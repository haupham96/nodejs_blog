const Course = require('../models/Course');
const { listDBtoArrayObj } = require('../../utils/mongoose');

class SiteController {
    async home(req, res, next) {
        try {
            const data = await Course.find({});
            res.render('home', { data: listDBtoArrayObj(data) });
        } catch (err) {
            next(err);
        }
    }

    search(req, res) {
        res.render('search');
    }

    async myCourses(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('my-courses', { courses: listDBtoArrayObj(courses) });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new SiteController();
