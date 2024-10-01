const fs = require("fs");
const Cloudinary = require("cloudinary").v2;
const upload = async (req, res, next) => {
    //Taking file from the Frontend
    if (!req.file) {
        throw new Error("Invalid Paylod");
    }

    const file = req.file.path;

    try {
        // Upload the resized image to Cloudinary
        const cloudName = `assetPlus${req.file.fileName}`;
        const uploadImage = await Cloudinary.uploader.upload(file, {
            public_id: cloudName,
        });

        if (!uploadImage.public_id) {
            throw new Error("Failed to upload image on the cloud");
        }
        const response = {
            success: 1,
            result: uploadImage.secure_url,
        };

        res.status(200).json(response);
        return fs.unlinkSync(file);
    } catch (error) {
        next(error);
        return fs.unlinkSync(file);
    }
};
module.exports = upload;
