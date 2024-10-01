var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", postSchema);
