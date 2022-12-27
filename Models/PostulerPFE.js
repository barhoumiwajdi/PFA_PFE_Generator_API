const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const PostulerPFESchema = new Schema(
    {
       
        Etudient: {
            type: Schema.Types.ObjectId,
            ref: "Compte",
        },
        Stage: {
            type: Schema.Types.ObjectId,
            ref: "PFE",
        },
        
        Confirmation: {
            type: Boolean , default:false
         
        },
    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.PostulerPFE|| mongoose.model('PostulerPFE', PostulerPFESchema);
