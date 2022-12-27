const Event = require('../../Models/Event')

exports.CreateEvent = async (req , res)=>{

    try {
        
    const Result = await Event.create(req.body)
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }


exports.FetchEvent = async (req , res)=>{

try {
    
const Result = await Event.find({})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchEventById = async (req , res)=>{

    try {
        
    const Result = await Event.findById(req.params.idEvent).populate("Moderateur")
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateEvent= async (req , res)=>{

        try {
            
        const Result = await Event.findByIdAndUpdate(req.params.idEvent , req.body)

        const Resultupdate = await Event.findById(req.params.idEvent)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteEvent = async (req , res )=>
        {
            try {

                const Result = await Event.findByIdAndDelete(req.params.idEvent) 

                
                res.status(200).send('Event deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }