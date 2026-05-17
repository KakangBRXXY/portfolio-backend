'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
    }
  }
  Project.init({
    judul: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    teknologi: DataTypes.STRING,
    url_github: DataTypes.STRING,
    url_demo: DataTypes.STRING,
    gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};