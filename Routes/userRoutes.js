const router = require("express").Router();


const {
    addUser,
    deleteUser,
    updateUser,
    getUser,
    rawQueryUser,
    
} = require("../Controller/userController");

const {
addUserDetail, getUserDetail, addOneToMany,
getOneToMany, addOneToManyTwo
} = require("../Controller/userDetailController");

router.post("/addUser", addUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.get("/getUser", getUser);
router.get("/rawQueryUser", rawQueryUser);

//User Detail route
router.post("/addUserDetail", addUserDetail);
router.get("/getUserDetail", getUserDetail);
router.post("/addOneToMany", addOneToMany);
router.get("/getOneToMany", getOneToMany);
router.post("/addOneToManyTwo", addOneToManyTwo);



module.exports = router;