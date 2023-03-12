module.exports = (sequelize, DataTypes) => {
    const image = sequelize.define('image', {
        // Model attributes are defined here
        imgName: {
          type: DataTypes.STRING,
        }
      }, {
       
      });
    return image
}