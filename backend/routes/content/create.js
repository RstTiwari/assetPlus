const ContentModule = require("../../models/Content");

const create = async (req, res, next) => {
    try {
        let { data } = req.body;
        console.log(req.body);

        let newData = new ContentModule(req.body);
        await newData.save();
        let response = {
            success: 1,
            message: "Content create succefully",
        };
        res.send(response);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = create;
