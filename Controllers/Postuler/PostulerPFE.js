
const PFE = require('../../Models/PFE')
const PostulerPFE = require('../../Models/PostulerPFE')

exports.CreatePostulerPFE = async (req, res) => {

    try {
        const verify = await PFE.findById(rep.body.idPFE)

        if (verify.Disponibilite == true) {
            const Result = await PostulerPFE.create(req.body)
            res.send(Result)
        } else {
            res.status(400).send("PFE has alredy been affected choose another one ")

        }

    } catch (error) {

        res.status(500).send(error)
    }

}

