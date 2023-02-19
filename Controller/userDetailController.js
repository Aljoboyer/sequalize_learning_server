const { QueryTypes } = require('sequelize')
const db = require('../DBconnection/DBconnection')
const userdetail = db.userdetail
const User = db.user
const education = db.education

const addUserDetail = async (req, res) => {
    console.log('hitted', req.body)

    const data = await User.create(req.body.user) 
    if(data.id){
        const detail = {...req.body.userDetail, user_id: data.id}
        userdetail.create(detail) 
    }
    res.send({inserted: "data inserted"})
}

//Using one to one from sequelize
const getUserDetail = async (req, res) => {

    const UserData = await User.findAll({
        include: userdetail
    }) 
    res.send(UserData)
}

const addOneToMany = async (req, res) => {
    console.log('hitted', req.body)

    const detail = {...req.body.userDetail, user_id: req.body.user.id}
    await userdetail.create(detail)
    res.send({inserted: "data inserted"})
}

const addOneToManyTwo = async (req, res) => {
    console.log('hitted', req.body)

    const detail = {...req.body.education, userdetail_Id: req.body.user.id}
    await education.create(detail)
    res.send({inserted: "data inserted"})
}

const getOneToMany = async (req, res) => {
    const data = await userdetail.findAll({
        include:{
            model: education
        }

    })
    res.send(data)
}

module.exports ={
    addUserDetail,
    getUserDetail,
    addOneToMany,
    getOneToMany,
    addOneToManyTwo
}
