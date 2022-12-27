const Saison = require('../../Models/SaisonUnv')

exports.CreateSaison = async (req , res)=>{

    try {       
    const Result = await Saison.create(req.body)  
    res.send(Result)
      
    } catch (error) {   
        res.status(500).send(error)
    }   
    }

exports.FetchSaison = async (req , res)=>{

try {
    
const Result = await Saison.find({})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchSaisonById = async (req , res)=>{

    try {
        
    const Result = await Saison.findById(req.params.idSaison)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateSaison= async (req , res)=>{

        try {
            
        const Result = await Saison.findByIdAndUpdate(req.params.idSaison , req.body)

        const Resultupdate = await Saison.findById(req.params.idSaison)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteSaison = async (req , res )=>
        {
            try {

                const Result = await Saison.findByIdAndDelete(req.params.idSaison) 

                
                res.status(200).send('Saison deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }