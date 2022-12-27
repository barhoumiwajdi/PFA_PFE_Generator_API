const admins = require('../../Models/Compte')




exports.FetchAdmin = async (req , res)=>{

try {
    
const Result = await admins.find({role : "ADMIN"})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchAdminById = async (req , res)=>{

    try {
        
    const Result = await admins.findById(req.params.idadmin)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateAdmin= async (req , res)=>{

        try {
            
        const Result = await admins.findByIdAndUpdate(req.params.idadmin , req.body)

        const Resultupdate = await admins.findById(req.params.idadmin)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteAdmin = async (req , res )=>
        {
            try {

                const Result = await admins.findByIdAndDelete(req.params.idadmin) 

                
                res.status(200).send('admin deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }