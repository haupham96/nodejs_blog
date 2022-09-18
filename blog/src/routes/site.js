const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.home);
router.get('/me/courses', siteController.myCourses);

module.exports = router;
