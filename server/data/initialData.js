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
        pricePerDay: 5,
        categories: [ { name: 'Tools', imageUrl: '/img/tools.jpg' }, ]
    },
    {
        name: 'Makita saw',
        description: 'Very good saw for cutting stuff in pieces.',
        imageUrl: '/img/makitaSaw.png',
        pricePerDay: 6,
        categories: [ { name: 'Tools', imageUrl: '/img/tools.jpg' }, ]
    },
    {
        name: 'Slip and slide',
        description: 'For your slipping and sliding needs',
        imageUrl: '/img/slip.jpeg',
        pricePerDay: 10,
        categories: [ { name: 'Toys', imageUrl: '/img/toys.jpg' }, ]
    },
    {
        name: 'Rocking horse',
        description: 'Horse your way to happiness',
        imageUrl: '/img/rocking.jpg',
        pricePerDay: 3,
        categories: [ { name: 'Toys', imageUrl: '/img/toys.jpg' }, ]
    },
    {
        name: 'Scooter',
        description: 'Scooter perfect for kids',
        imageUrl: '/img/rocking.jpg',
        pricePerDay: 4,
        categories: [ { name: 'Toys', imageUrl: '/img/toys.jpg' }, ]
    },
];

const users = [
    {
        name: 'Test Lender',
        email: 'test.lender@test.com',
        phoneNumber: '+3581234567',
    },
    {
        name: 'Test Borrower',
        email: 'test.borrower@test.com',
        phoneNumber: '+3588791234',
    }
];

const addresses = [
    {
        street: 'Arkadiankatu 3-6',
        city: 'Helsinki',
        postalCode: '00100',
        deliveryComment: 'Wolt office in 3rd floor',
    },
    {
        street: 'Keilaranta 4',
        city: 'Espoo',
        postalCode: '02150',
        deliveryComment: 'Take the stairs to office in second floor.',
    }
];

const lenders = [
    {
        merchantName: 'My Merchant',
    }
];

const borrowers = [
    {
        publicUsername: 'Borrower2000',
    }
];

module.exports = {
    categories,
    bookableItems,
    users,
    lenders,
    borrowers,
    addresses,
}