var router = require("express").Router();
const multer = require("multer");

const create = require("./content/create.js");
const read = require("./content/read.js");
const upload = require("./content/upload.js");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});
const uploader = multer({ storage: storage });
const type = uploader.single("file");

router.get("/", async (req, res) => {
    res.send("Server is online");
});
router.get("/read", read);

router.post("/upload", type, upload);

router.post("/create", create);

module.exports = router;
