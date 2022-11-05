const categories = [
    {
        name: 'Toys',
        imageUrl: '/img/toys.jpg',
    },
    {
        name: 'Sports equipment',
        imageUrl: '/img/sports-equipment.jpg',
    },
];

const bookableItems = [
    {
        name: 'Makita drill',
        description: 'Very good drill for making holes.',
        imageUrl: '/img/makitaDrill.jpg',
        categories: [ { name: 'Tools', imageUrl: '/img/tools.jpg' }, ]
    },
];

const users = [
    {
        name: 'Test Testerson',
        email: 'test.testerson@test.com',
        phoneNumber: '+3581234567',
    }
];

module.exports = {
    categories,
    bookableItems,
    users,
}