// const Card = require('../models/cardModel');
// const asyncHandler = require('express-async-handler');

// const getCards = asyncHandler(async (req, res) => {
//     const cards = await Card.find({});
//     res.json(cards);
// });


// const createCard = asyncHandler(async (req, res) => {
//     const { text, images, videos } = req.body;
//     const card = new Card({ text, images, videos });

//     const createdCard = await card.save();
//     res.status(201).json(createdCard);
// });

// const updateCard = asyncHandler(async (req, res) => {
//     const { text, images, videos } = req.body;
//     const card = await Card.findById(req.params.id);

//     if (card) {
//         card.text = text || card.text;
//         card.images = images || card.images;
//         card.videos = videos || card.videos;

//         const updatedCard = await card.save();
//         res.json(updatedCard);
//     } else {
//         res.status(404);
//         throw new Error('Card not found');
//     }
// });

// const deleteCard = asyncHandler(async (req, res) => {
//     const card = await Card.findById(req.params.id);

//     if (card) {
//         await Card.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Card removed' });
//     } else {
//         res.status(404);
//         throw new Error('Card not found');
//     }
// });

// module.exports = { getCards, createCard, updateCard, deleteCard };

const asyncHandler = require('express-async-handler');

let cards = [];

// Get all cards
const getCards = asyncHandler(async (req, res) => {
    res.json(cards);
});

// Create a new card
const createCard = asyncHandler(async (req, res) => {
    const { text, images, videos } = req.body;
    const newCard = { id: cards.length + 1, text, images, videos };

    cards.push(newCard);
    res.status(201).json(newCard);
});

// Update a card
const updateCard = asyncHandler(async (req, res) => {
    const { text, images, videos } = req.body;
    const cardId = parseInt(req.params.id);
    const card = cards.find(c => c.id === cardId);

    if (card) {
        card.text = text || card.text;
        card.images = images || card.images;
        card.videos = videos || card.videos;

        res.json(card);
    } else {
        res.status(404);
        throw new Error('Card not found');
    }
});

// Delete a card
const deleteCard = asyncHandler(async (req, res) => {
    const cardId = parseInt(req.params.id);
    const cardIndex = cards.findIndex(c => c.id === cardId);

    if (cardIndex !== -1) {
        cards.splice(cardIndex, 1);
        res.json({ message: 'Card removed' });
    } else {
        res.status(404);
        throw new Error('Card not found');
    }
});

module.exports = { getCards, createCard, updateCard, deleteCard };

