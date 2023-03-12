const mysql = require('mysql2');
const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('sequelizeLearndb', 'root', 'Tanvir1233', {
    host: '127.0.0.1',
    logging: false,
    dialect: 'mysql'
  });
  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize

db.user =  require("../Models/userModel")(sequelize, DataTypes)
db.userdetail =  require("../Models/userDetailmodel")(sequelize, DataTypes)
db.education =  require("../Models/educationmodel")(sequelize, DataTypes)
db.image =  require("../Models/imageModel")(sequelize, DataTypes)
db.video =  require("../Models/videoModel")(sequelize, DataTypes)
db.comment =  require("../Models/commentModel")(sequelize, DataTypes)

// db.user.hasOne(db.userdetail,{foreignKey: "user_id"})
// db.userdetail.belongsTo(db.user)
// db.user.hasMany(db.userdetail,{foreignKey: "user_id"})
// db.userdetail.belongsTo(db.user)

// db.userdetail.hasMany(db.education,{foreignKey: "userdetail_Id"})
// db.education.belongsTo(db.userdetail)

// db.userdetail.hasMany(db.education,{foreignKey: "userdetail_Id"})
// db.education.belongsTo(db.userdetail)

db.image.hasMany(db.comment,{foreignKey: "media_Id"})
db.comment.belongsTo(db.image)

db.video.hasMany(db.comment,{foreignKey: "media_Id"})
db.comment.belongsTo(db.video)

db.sequelize.sync();

module.exports = db;