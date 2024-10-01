var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
        date: {
            type: Number,
            default: Math.floor(Date.now() / 1000),
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Content", postSchema, "Content");
