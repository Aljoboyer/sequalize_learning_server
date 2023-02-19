module.exports = (sequelize, DataTypes) => {
    const UserDetail = sequelize.define('UserDetail', {
        // Model attributes are defined here
        country: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.INTEGER
        },
        user_id: {
          type: DataTypes.STRING
        }
      }, {
       
      });
    return UserDetail
}
