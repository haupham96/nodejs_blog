const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
// const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        //   _id: ObjectId,
        name: { type: String, maxLength: 50 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('courses', Course);
