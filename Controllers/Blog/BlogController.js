const Blog = require('../../Models/Blog')

exports.CreateBlog = async (req , res)=>{

    try {
        
    const Result = await Blog.create(req.body)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }


exports.FetchBlog = async (req , res)=>{

try {
    
const Result = await Blog.find({})

res.send(Result)


} catch (error) {

    res.status(500).send(error)
}

}


exports.FetchBlogById = async (req , res)=>{

    try {
        
    const Result = await Blog.findById(req.params.idBlog)
    
    res.send(Result)
    
    
    } catch (error) {
    
        res.status(500).send(error)
    }
    
    }

    exports.UpdateBlog= async (req , res)=>{

        try {
            
        const Result = await Blog.findByIdAndUpdate(req.params.idBlog , req.body)

        const Resultupdate = await Blog.findById(req.params.idBlog)
        
        res.send(Resultupdate)
        
        
        } catch (error) {
        
            res.status(500).send(error)
        }
        
        }


        exports.DeleteBlog = async (req , res )=>
        {
            try {

                const Result = await Blog.findByIdAndDelete(req.params.idBlog) 

                
                res.status(200).send('Blog deleted with success')
            } catch (error) {
                

                res.status(500).send('error serveur')
            }
        }