const { QueryTypes } = require('sequelize')
const db = require('../DBconnection/DBconnection')
const Image = db.image
const Video = db.video
const Comment = db.comment

const addImage = async (req, res) => {

    const img = await Image.create(req.body) 
    await img.save()
    res.send({inserted: "img inserted"})
}

const addVideo = async (req, res) => {

    const Vid = await Video.create(req.body) 
    await Vid.save()
    res.send({inserted: "video inserted"})
}

const addComment = async (req, res) => {

    const comments = await Comment.create(req.body) 
    await comments.save()
    res.send({inserted: "Comment inserted"})
}

const getImg = async (req, res) => {
    const data = await Image.findAll({
        include:{
            model: Comment
        }

    })
    res.send(data)
}

module.exports ={
    addImage,
    addVideo,
    addComment,
    getImg
}