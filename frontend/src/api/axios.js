import axios from "axios"

export async function axsiosAddRocket(name,city,rocketType,latitude,longitude){
    try{
        const res =await axios.post("http://127.0.0.1:3000//api/launchers",{
        name:name,
        city:city,
        longitude:longitude,
        latitude:latitude,
        rocketType:rocketType
        })
        return res.data
    }catch(err){
           return false
    }  
}

export async function axsiosGetAllRockets(){
    
}

export async function axsiosGetRocket(){

}