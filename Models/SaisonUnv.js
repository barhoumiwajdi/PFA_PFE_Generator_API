const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const SaisonSchema = new Schema(
    {
        Description: { type: String, required: [true, 'description obligatoire!'] },
        DateDebut: { type: Date, required: [true, 'date obligatoire!'] },
        Datefin: { type: Date, required: [true, 'date obligatoire!'] },


       

    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.Saison|| mongoose.model('Saison', SaisonSchema);
