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

module.exports = {
    categories,
    bookableItems,
}