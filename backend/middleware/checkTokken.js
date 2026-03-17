import { checkToken } from "../utils/jwt.js"

export function loginToken(req,res,next){
    try{        
        const {token} = req.headers
        const resToken = checkToken(token)

        if(resToken){
            next()
        }else{
            res.status(400).json({error:"token is not valid"})
        }        
    }catch(err){
        console.error(err.message)
    }   
}

export default loginToken