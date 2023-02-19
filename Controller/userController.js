const { QueryTypes } = require('sequelize')
const db = require('../DBconnection/DBconnection')
const User = db.user

const addUser = async (req, res) => {
    console.log('hitted', req.body)

    const jane = await User.create(req.body) 
    await jane.save()
    res.send({inserted: "data inserted"})
}

const getUser = async (req, res) => {
    console.log('hitted', req.body)

    const data = await User.findAll({
        attributes: ['id', 'lastName']
    })
    res.send(data)
}

const deleteUser = async (req, res) => {
    console.log('hitted', req.params)

    const jane = await User.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json({data: 'User Deleted'})
}

const updateUser = async (req, res) => {
    const userData = await User.findOne({ where: { id: req.params.id } });

    if(userData?.id){
        const jane = await User.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({data: 'User Updated'})
    }
    else{
        res.status(200).json({data: 'User Not Found'})
    }
}

const rawQueryUser = async (req, res) => {
    const users = await db.sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });

    res.send(users)
}
module.exports ={
    addUser,
    deleteUser,
    updateUser,
    getUser,
    rawQueryUser
}