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
        },
        rating:{
            type: Number,
            require: true
        },
        filename:{
            type: String,
            reguire: true
        }
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;