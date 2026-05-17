const { Project } = require('../models');

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json({
      status: "Success",
      message: "Data project berhasil diambil, mantap!",
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Waduh, gagal ngambil data project",
      error: error.message
    });
  }
};

module.exports = {
  getAllProjects
};