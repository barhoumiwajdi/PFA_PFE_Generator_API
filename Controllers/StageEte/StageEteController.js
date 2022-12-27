const StageEte = require('../../Models/StageEte')

exports.CreateStageEte = async (req , res)=>{

    try {
        
    const Result = await StageEte.create(req.body)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }


exports.FetchStageEte = async (req , res)=>{

try {
    
const Result = await StageEte.find({})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchStageEteById = async (req , res)=>{

    try {
        
    const Result = await StageEte.findById(req.params.idStageEte).populate("stagiaire")
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateStageEte= async (req , res)=>{

        try {
            
        const Result = await StageEte.findByIdAndUpdate(req.params.idStageEte , req.body)

        const Resultupdate = await StageEte.findById(req.params.idStageEte)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteStageEte = async (req , res )=>
        {
            try {

                const Result = await StageEte.findByIdAndDelete(req.params.idStageEte) 

                
                res.status(200).send('StageEte deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }