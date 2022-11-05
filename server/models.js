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
    modelName: 'Category',
});


class BookableItem extends Model {};
BookableItem.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
    },
    {
        sequelize, 
        modelName: 'BookableItem',
    });

class BookableItemCategory extends Model {};
BookableItemCategory.init({},
    {
        sequelize, 
        modelName: 'BookableItemCategory',
    });
    BookableItem.belongsToMany(Category, { through: BookableItemCategory });

const initializeDb = async () => {
    console.log(categories);
    await sequelize.sync({ force: true });
    const categoryBuilds = categories.map(x => Category.build(x).save());
    await Promise.all(categoryBuilds);

    const bookableItemBuilds = bookableItems.map(x => BookableItem.build(x).save());
    await Promise.all(bookableItemBuilds);
};

module.exports = {
    Category,
    initializeDb,
};
