const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const skillController = require('../controllers/skillController');

router.get('/projects', projectController.getAllProjects);
router.get('/skills', skillController.getAllSkills);

module.exports = router;