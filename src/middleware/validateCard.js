const { body, validationResult } = require('express-validator');

const validateCard = [
    body('text').isString().notEmpty().withMessage('Text is required'),
    body('images').isArray().withMessage('Images should be an array'),
    body('videos').isArray().withMessage('Videos should be an array'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateCard;
