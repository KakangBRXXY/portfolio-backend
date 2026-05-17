const { Skill } = require('../models');

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).json({
      status: "Success",
      message: "Data skill berhasil diambil, aman!",
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Waduh, gagal ngambil data skill",
      error: error.message
    });
  }
};

module.exports = {
  getAllSkills
};