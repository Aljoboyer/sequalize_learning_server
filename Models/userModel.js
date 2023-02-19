module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          // allowNull defaults to true
          // set(value) {
          //   this.setDataValue('lastName', value + ' Boss');
          // }
        }
      }, {
        // Other model options go here
        sequelize,
        modelName: "User",
        paranoid: true,
        deleteAt: 'destroyTime'
      });
    return User
}
