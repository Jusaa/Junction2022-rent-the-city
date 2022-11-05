const express = require('express')
const cors = require('cors')
const path = require('path');

const app = express()
const port = 8080

const { 
  Category,
  BookableItem,
  BookableItemCategory,
  initializeDb, 
} = require('./models');
const { bookableItems } = require('./data/initialData');

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
    res.send(await BookableItem.findAll());
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})