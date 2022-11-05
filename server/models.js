const { Sequelize, Model, DataTypes } = require('sequelize');
const { categories, bookableItems } = require('./data/initialData');
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

const initializeDb = async () => {
    console.log(categories);
    await sequelize.sync({ force: true });
    const categoryCreates = categories.map(x => Category.create(x));
    await Promise.all(categoryCreates);

    const bookableItemCreates = bookableItems.map(x => BookableItem.create(
        x, 
        { include: [ Category ] })
    );
    await Promise.all(bookableItemCreates);
};

module.exports = {
    Category,
    BookableItemCategory,
    BookableItem,
    initializeDb,
};
