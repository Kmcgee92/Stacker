'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  Album.associate = function(models) {
    Album.belongsTo(models.User, { foreignKey: "userId", onDelete: "cascade"})
  };



  Album.getUserAlbums = async function (id) {
    const albums = await Album.findAll({ where: { "userId": id } })
    if (albums.length === 0) {
      return ''
    }
    
    return albums
  }

  Album.createAlbum = async function (name, userId) {
    const album = await Album.create({
      name,
      userId
    })

    return album

  }


  return Album;
}