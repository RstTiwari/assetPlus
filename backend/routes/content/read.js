const ContentModule = require("../../models/Content");

const read = async (req, res, next) => {
    try {
        let data = await ContentModule.find({});
        let response = {
            success: 1,
            data: data || [],
            message: "Fetched Content Data SuccessFully",
        };
        res.send(response);
    } catch (error) {
        next(error);
    }
};

module.exports = read;
