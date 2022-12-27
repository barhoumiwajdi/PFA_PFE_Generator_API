const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const PFASchema = new Schema(
    {
        Titre: { type: String, required: [true, 'titre obligatoire!'] },
        Description: { type: String, required: [true, 'description obligatoire!'] },
        Technologie: { type: String, required: [true, 'technologie obligatoire!'] },
        Disponibilite: { type: Boolean, default: true },

    },
    {
        timestamps: true, versionKey: false
    }
);

module.exports =
    mongoose.models.PFA || mongoose.model('PFA', PFASchema);
