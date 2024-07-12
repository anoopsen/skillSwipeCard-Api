const Card = require('../models/cardModel');

const getAllCards = async () => {
    return await Card.find({});
};

const createNewCard = async (cardData) => {
    const card = new Card(cardData);
    return await card.save();
};

module.exports = {
    getAllCards,
    createNewCard
};
