const Enseignant = require('../../Models/Compte')




exports.FetchEnseignant = async (req , res)=>{

try {
    
const Result = await Enseignant.find({role : "Enseignant"})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchEnseignantById = async (req , res)=>{

    try {
        
    const Result = await Enseignant.findById(req.params.idEnseignant)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateEnseignant= async (req , res)=>{

        try {
            
        const Result = await Enseignant.findByIdAndUpdate(req.params.idEnseignant , req.body)

        const Resultupdate = await Enseignant.findById(req.params.idEnseignant)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteEnseignant = async (req , res )=>
        {
            try {

                const Result = await Enseignant.findByIdAndDelete(req.params.idEnseignant) 

                
                res.status(200).send('Enseignant deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }