module.exports = (sequelize, DataTypes) => {
    const education = sequelize.define('education', {
        // Model attributes are defined here
        degree: {
          type: DataTypes.STRING,
          allowNull: false
        },
        university: {
          type: DataTypes.STRING,
        },
        userdetail_Id: {
          type: DataTypes.STRING
        }
      }, {
        // Other model options go here

      });
    return education
}
