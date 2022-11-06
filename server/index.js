const express = require('express')
const cors = require('cors')
const path = require('path');
const util = require('util')

const app = express()
const port = 8080

const { 
  sequelize,
  Category,
  BookableItem,
  BookableItemCategory,
  initializeDb,
  User,
  Lender,
  Borrower, 
  Address,
  Transport,
  RentalEvent,
  WoltShipment,
} = require('./models');
const { bookableItems } = require('./data/initialData');
const { bookItemShipment, bookItemReturn } = require('./apiconnector');
const { format } = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/api/ping', (req, res) => {
  res.send('Pigngg!')
})

app.get('/api/categories', async (req, res) => {
  try {
    res.send(await Category.findAll());
  } catch (error) {
    res.send(error)
  }
});

app.get('/api/bookable-items', async (req, res) => {
  try {
    const bo = await BookableItem.findAll({ include: [ { model: RentalEvent, include: { model: Lender, include: { model: User, include: [Address]}} }]});
    res.send(bo);
  } catch (error) {
    res.send(error)
  }
});

app.get('/api/bookable-items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await BookableItem.findByPk(id));
  } catch (error) {
    res.send(error)
  }
});

app.get('/api/reset', async (req, res) => {
  try {
    await initializeDb();
    res.send('Reset OK');
  } catch (error) {
    res.send(error)
  }
});

app.get('/api/categories/:id/bookableitems', async (req, res) => {
    const { id } = req.params;
    try {
    const cat = await Category.findByPk(id);
    const items = await cat.getBookableItems();
    res.send(items);
    } catch (e) {
      res.status(500).send({ error: e });
    }

});

app.post('/api/categories/:id/bookableitems', async (req, res) => {
    const { name, description, imageUrl } = req.body;
    const { id } = req.params;
    if (!name || !description || !imageUrl || !id ) {
        return res.status(400).send({ error: 'missing params'});
    } else {
        try {
          const category = await Category.findByPk(id);
          if (!category) {
            res.status(500).send({error: 'category not found'});
          }
          const savedItem = await BookableItem.create({
              name,
              description,
              imageUrl
          });
          await savedItem.addCategory(category);
          res.status(201).send(savedItem);
        } catch (e) {
            res.status(500).send({error: e});
        }
    }
});

app.post('/api/book-item', async (req, res) => {
  const { lenderId, borrowerId, itemId, parcelIdentifier, returnDate } = req.body;
  try {
    const [lender, borrower, item] = await Promise.all([
      Lender.findByPk(lenderId, { include: [ { model: User, include: [Address] }]}),
      Borrower.findByPk(borrowerId, { include: [ { model: User, include: [Address] }]}),
      BookableItem.findByPk(itemId)
    ]);

    let returnDate2 = returnDate;
    if (!returnDate2) {
      returnDate2 = new Date();
      returnDate2.setDate(returnDate2.getDate() + 7);
    }
    const formattedLenderAddress = `${lender.user.address.street}, ${lender.user.address.postalCode} ${lender.user.address.city}`
    const formattedBorrowerAddress = `${borrower.user.address.street}, ${borrower.user.address.postalCode} ${borrower.user.address.city}`

    const deliveryResponse = await bookItemShipment(item.name, formattedLenderAddress, formattedBorrowerAddress);
    const returnResponse = await bookItemReturn(item.name, formattedLenderAddress, formattedBorrowerAddress, returnDate2);

    if (deliveryResponse.status === 201 && returnResponse.status === 201) {
      const deliveryShipment = await WoltShipment.create({ trackingUrl: deliveryResponse.data.tracking.url });
      const deliveryTransport = await Transport.create({
        parcelDescription: item.name,
        parcelIdentifier: parcelIdentifier || item.name,
      });
      await deliveryTransport.setWoltShipment(deliveryShipment);
      await sequelize.query(`update transports set fromAddressId = ${lender.user.address.id} where id = ${deliveryTransport.id}`);
      await sequelize.query(`update transports set toAddressId = ${borrower.user.address.id} where id = ${deliveryTransport.id}`);
    
      const returnShipment = await WoltShipment.create({ trackingUrl: returnResponse.data.tracking.url });
      const returnTransport = await Transport.create({
        parcelDescription: item.name,
        parcelIdentifier: parcelIdentifier || item.name,
      });
      await returnTransport.setWoltShipment(returnShipment);
      await sequelize.query(`update transports set fromAddressId = ${borrower.user.address.id}, toAddressId = ${lender.user.address.id} where id = ${returnTransport.id}`);

      const rentalEvent = await RentalEvent.create({
        startDate: new Date(),
        endDate: returnDate2,
      });
      await rentalEvent.setBookableItem(item);
      await rentalEvent.setLender(lender);
      await rentalEvent.setBorrower(borrower);
      await sequelize.query(`update rentalEvents set deliveryTransportId = ${deliveryTransport.id}, returnTransportId = ${returnTransport.id} where id = ${rentalEvent.id}`);  

      return res.status(201).send(deliveryResponse.data);
    } else {
      res.status(400).send({ error: 'kaikki meni pieleen' });
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})