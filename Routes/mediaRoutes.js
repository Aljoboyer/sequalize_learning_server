const router = require("express").Router();


const {
    addImage,
    addVideo,
    addComment,
    getImg
} = require("../Controller/mediaController");

router.post("/addImage", addImage);
router.post("/addVideo", addVideo);
router.post("/addComment", addComment);
router.get("/getImg", getImg);


module.exports = router;