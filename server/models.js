const { Sequelize, Model, DataTypes } = require('sequelize');
const initialData = require('./data/initialData');
const sequelize = new Sequelize('database', 'admin', 'admin',
{
    dialect: 'sqlite',
    storage: 'data/dev.sqlite',
});

class Category extends Model {};
Category.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'category',
});


class BookableItem extends Model {};
BookableItem.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
    },
    {
        sequelize, 
        modelName: 'bookableItem',
    });

class BookableItemCategory extends Model {};
BookableItemCategory.init({},
    {
        sequelize, 
        modelName: 'bookableItemCategory',
    });
BookableItem.belongsToMany(Category, { through: BookableItemCategory });
Category.belongsToMany(BookableItem, { through: BookableItemCategory });

class User extends Model {};
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'user',
});

class Lender extends Model {};
Lender.init({
    merchantName: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'lender',
});
User.hasOne(Lender);
Lender.belongsTo(User);

class Borrower extends Model {};
Borrower.init({
    publicUsername: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'borrower',
});
User.hasOne(Borrower);
Borrower.belongsTo(User);

class Address extends Model {};
Address.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    deliveryComment: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'address',
})
User.hasOne(Address);
Address.belongsTo(User);

class WoltShipment extends Model {};
WoltShipment.init({
    apiShipmentPromiseId: DataTypes.STRING,
    trackingUrl: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'woltShipment',
});

class Transport extends Model {};
Transport.init({
    parcelDescription: DataTypes.STRING,
    parcelIdentifier: DataTypes.STRING,
},
{
    sequelize, 
    modelName: 'transport',
});
Transport.hasOne(WoltShipment);
WoltShipment.belongsTo(Transport);


class RentalEvent extends Model {};
RentalEvent.init({
},
{
    sequelize, 
    modelName: 'rentalEvent',
});

Address.hasMany(Transport, { foreignKey: 'fromAddressId' });
Address.hasMany(Transport, { foreignKey: 'toAddressId' });

BookableItem.hasMany(RentalEvent);
RentalEvent.belongsTo(BookableItem);

Lender.hasMany(RentalEvent);
RentalEvent.belongsTo(Lender);

Borrower.hasMany(RentalEvent);
RentalEvent.belongsTo(Borrower);

Transport.hasOne(RentalEvent, { foreignKey: 'deliveryTransportId' });
Transport.hasOne(RentalEvent, { foreignKey: 'returnTransportId' });

const initializeDb = async () => {
    await sequelize.sync({ force: true });
    const categoryCreates = initialData.categories.map(x => Category.create(x));
    await Promise.all(categoryCreates);

    const bookableItemCreates = initialData.bookableItems.map(x => BookableItem.create(
        x, 
        { include: [ Category ] })
    );
    await Promise.all(bookableItemCreates);

    const lenderUser = await User.create(initialData.users[0])
    const lender = await Lender.create(initialData.lenders[0]);
    await lender.setUser(lenderUser);
    const lenderAddress = await Address.create(initialData.addresses[0]);
    await lenderAddress.setUser(lenderUser);

    const borrowerUser = await User.create(initialData.users[1]);
    const borrower = await Borrower.create(initialData.borrowers[0]);
    await borrower.setUser(borrowerUser);
    const borrowerAddress = await Address.create(initialData.addresses[1]);
    await borrowerAddress.setUser(borrowerUser);

    // const borrowerUser = await User.create(initialData.users[1])
    // await borrowerUser.addBorrower(await Lender.create(initialData.borrowers[0]))
};

module.exports = {
    Category,
    BookableItemCategory,
    BookableItem,
    User,
    Lender,
    Borrower,
    Address,
    Transport,
    WoltShipment,
    RentalEvent,
    initializeDb,
};
