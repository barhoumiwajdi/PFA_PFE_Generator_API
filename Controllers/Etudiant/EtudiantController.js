const Etudiant = require('../../Models/Compte')


exports.FetchEtudiant = async (req , res)=>{

try {
    
const Result = await Etudiant.find({role : "Etudiant"})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchEtudiantById = async (req , res)=>{

    try {
        
    const Result = await Etudiant.findById(req.params.idEtudiant)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.FetchEtudiantPublic = async (req , res)=>{

        try {
            
        const Result = await Etudiant.find({visibilite:true})
        
        res.send(Result)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }

    exports.UpdateEtudiant= async (req , res)=>{

        try {
            
        const Result = await Etudiant.findByIdAndUpdate(req.params.idEtudiant , req.body)

        const Resultupdate = await Etudiant.findById(req.params.idEtudiant)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.UpdateEtudiantVisibility= async (req , res)=>{

            try {
                
            const Result = await Etudiant.findByIdAndUpdate(req.params.idEtudiant , req.body)
    
            const Resultupdate = await Etudiant.findById(req.params.idEtudiant)
            
            res.send(Resultupdate)
            
            
            } catch (error) {
            
                res.status(500).send(error)
            }
            
            }


        exports.DeleteEtudiant = async (req , res )=>
        {
            try {

                const Result = await Etudiant.findByIdAndDelete(req.params.idEtudiant) 

                
                res.status(200).send('Etudiant deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }