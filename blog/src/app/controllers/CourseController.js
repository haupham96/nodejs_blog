const Course = require('../models/Course');
const { entityToObj } = require('../../utils/mongoose');
class CourseController {
    //[GET] course/:slug
    async courseDetail(req, res, next) {
        const course = await Course.findOne({ slug: req.params.slug }).exec();
        res.render('courses/view', { course: entityToObj(course) });
    }

    //[GET] /courses/create
    createCourseView(req, res, next) {
        res.render('courses/create');
    }

    //[POST] courses/create
    //https://img.youtube.com/vi/FS3WACQHVU0/hqdefault.jpg
    async createCourse(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`;
        try {
            await Course.create(formData);
        } catch (err) {
            next(err);
        }
        res.redirect('/');
    }

    //[GET] /courses/edit/:id
    async editCourseView(req, res, next) {
        try {
            const course = await Course.findOne({ _id: req.params.id });
            res.render('courses/edit-course', { course: entityToObj(course) });
        } catch (err) {
            next(err);
        }
    }

    //[PUT] courses/eidt
    async editCourse(req, res, next) {
        try {
            const courseEdit = req.body;
            await Course.updateOne({ _id: req.params.id }, courseEdit);
            res.redirect('/me/courses');
        } catch (err) {
            next(err);
        }
    }

    //[DELETE] courses/delete/:id
    async deleteCourse(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController();
