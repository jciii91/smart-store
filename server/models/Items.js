const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        category: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number
        }
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;