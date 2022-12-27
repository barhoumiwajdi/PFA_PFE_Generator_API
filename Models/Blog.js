const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const BlogSchema = new Schema(
    {
       
        Type: { type: String, required: [true, 'type obligatoire!'] },
        Sujet: { type: String, required: [true, 'sujet obligatoire!'] },
        description: { type: String, required: [true, 'description obligatoire!'] },

    },
    {
        timestamps: true, versionKey: false
    }
);

module.exports =
    mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
