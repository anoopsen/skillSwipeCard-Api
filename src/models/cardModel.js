const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    videos: {
        type: [String]
    }
}, {
    timestamps: true
});

const Card = mongoose.model('Card', cardSchema);


module.exports = Card;
