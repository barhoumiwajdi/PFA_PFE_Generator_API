
const PFA = require('../../Models/PFA')
const PFE = require('../../Models/PFE')
const PostulerPFA = require('../../Models/PostulerPFA')
const PostulerPFE = require('../../Models/PostulerPFE')

exports.ConfirmationPFA = async (req, res) => {

    try {
        const confirm = await PostulerPFA.find({ Confirmation: false })

        const valid = await PFA.findByIdAndUpdate(req.body.idPFA, { Disponibilite: false })

        res.send("PFA confirme")

    } catch (error) {

        res.status(500).send(error)
    }

}
exports.ConfirmationPFE = async (req, res) => {

    try {
        const confirm = await PostulerPFE.find({ Confirmation: false })

        const valid = await PFE.findByIdAndUpdate(req.body.idPFE, { Disponibilite: false })

        res.send("PFE confirme")

    } catch (error) {

        res.status(500).send(error)
    }

}

