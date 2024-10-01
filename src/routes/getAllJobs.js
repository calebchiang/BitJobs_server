// Routing for getAllJobs endpoint
const express = require('express');
const router = express.Router();
const getAllJobsController = require('../controllers/getAllJobsController');

router.get('/', getAllJobsController.fetchAllJobs);
module.exports = router;