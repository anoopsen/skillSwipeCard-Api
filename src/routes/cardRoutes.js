const express = require('express');
const { getCards, createCard,updateCard, deleteCard } = require('../controllers/cardController');
const validateCard = require('../middleware/validateCard');

const router = express.Router();

router.route('/')
    .get(getCards)
    .post(validateCard, createCard);

router.route('/:id')
    .put(validateCard, updateCard)
    .delete(deleteCard);

module.exports = router;
