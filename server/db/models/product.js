'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    inventory: {
        type: Number,
        required: true
    },
    category: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        }]
    },
    photo: {
        type: String,
        default: "http://wiki.solid-run.com/images/7/75/No_image_available.png"
    }
});

schema.virtual('shortDesc').get(function() {
    return this.description.substring(0, 200);
});

// if this works, use. Otherwise delete.
// schema.methods('getReviews').get(function() {
//     mongoose.model('Review').find({
//         product: this._id
//     }).exec().then(function(reviews) {
//         return reviews;
//     });
// })


mongoose.model('Product', schema);