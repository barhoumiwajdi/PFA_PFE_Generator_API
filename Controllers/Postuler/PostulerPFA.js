
const PFA = require('../../Models/PFA')
const PostulerPFA = require('../../Models/PostulerPFA')

exports.CreatePostulerPFA = async (req, res) => {

    try {
        const verify = await PFA.findById(rep.body.idPFA)

        if (verify.Disponibilite == true) {
            const Result = await PostulerPFA.create(req.body)
            res.send(Result)
        } else {
            res.status(400).send("PFA has alredy been affected choose another one ")

        }

    } catch (error) {

        res.status(500).send(error)
    }

}

