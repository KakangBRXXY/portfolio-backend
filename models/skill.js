'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
    }
  }
  Skill.init({
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    level: DataTypes.STRING,
    icon: DataTypes.STRING,
    deskripsi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};