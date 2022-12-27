const Alumni = require('../../Models/Compte')


exports.FetchAlumni = async (req , res)=>{

try {
    
const Result = await Alumni.find({role : "Alumni"})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchAlumniById = async (req , res)=>{

    try {
        
    const Result = await Alumni.findById(req.params.idAlumni)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateAlumni= async (req , res)=>{

        try {
            
        const Result = await Alumni.findByIdAndUpdate(req.params.idAlmuni , req.body)

        const Resultupdate = await Alumni.findById(req.params.idAlumni)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteAlumni = async (req , res )=>
        {
            try {

                const Result = await Alumni.findByIdAndDelete(req.params.idAlumni) 

                
                res.status(200).send('Alumni deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }