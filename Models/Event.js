const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const EventSchema = new Schema(
    {
        Nom: { type: String, required: [true, 'NOM obligatoire!'] },
        Description: { type: String, required: [true, 'description obligatoire!'] },
        Date: { type: Date, required: [true, 'date obligatoire!'] },
        Moderateur: {
            type: Schema.Types.ObjectId,
            ref: "Compte",
        },
       
    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.Event|| mongoose.model('Event', EventSchema);
