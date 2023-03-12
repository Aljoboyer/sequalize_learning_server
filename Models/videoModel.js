module.exports = (sequelize, DataTypes) => {
    const Video = sequelize.define('Video', {
        // Model attributes are defined here
        videoName: {
          type: DataTypes.STRING,
        }
      }, {
       
      });
    return Video
}