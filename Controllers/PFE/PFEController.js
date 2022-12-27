const PFE = require('../../Models/PFE')

exports.CreatePFE = async (req , res)=>{

    try {
        
    const Result = await PFE.create(req.body)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }


exports.FetchPFE = async (req , res)=>{

try {
    
const Result = await PFE.find({})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchPFEById = async (req , res)=>{

    try {
        
    const Result = await PFE.findById(req.params.idPFE)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdatePFE= async (req , res)=>{

        try {
            
        const Result = await PFE.findByIdAndUpdate(req.params.idPFE , req.body)

        const Resultupdate = await PFE.findById(req.params.idPFE)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeletePFE = async (req , res )=>
        {
            try {

                const Result = await PFE.findByIdAndDelete(req.params.idPFE) 

                
                res.status(200).send('PFE deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }