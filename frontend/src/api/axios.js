import axios from "axios"

export async function axsiosAddRocket(name,city,rocketType,latitude,longitude){
    try{
        const res =await axios.post("http://127.0.0.1:3000/api/launchers",{
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

export async function axsiosGetAllData(){
    try{
        const res = await axios.get("http://127.0.0.1:3000/api/launchers")
        return res.data["data"]
    }
    catch{
       return false 
    }    
}

export async function axsiosGetRocket(){

}


