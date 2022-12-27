const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const PostulerPFASchema = new Schema(
    {
       
        Etudient: {
            type: Schema.Types.ObjectId,
            ref: "Compte",
        },
        Stage: {
            type: Schema.Types.ObjectId,
            ref: "PFA",
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
    mongoose.models.PostulerPFA|| mongoose.model('PostulerPFA', PostulerPFASchema);
