module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('comment', {
        // Model attributes are defined here
        comment: {
          type: DataTypes.STRING,
        },
        media_Id:{
            type: DataTypes.STRING
        }
      }, {
       
      });
    return comment
}