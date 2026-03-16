// import mongoose from "mongoose"

// const dbName = ""

// export function connectToMongo(){
//     mongoose.connect('mongodb://127.0.0.1:27017/rocetdb');
    
//     const Rocet = mongoose.model('Rocet', {name: String });
//     dbName = Rocet
//     return Rocet
// }



// export function insertData(id,city,rocketType,latitude,longitude,name){
//     const rocet = new dbName({id:id, city: city,rocketType:rocketType,latitude:latitude,longitude:longitude,name:name });
//     rocet.save().then(() => console.log('conecct to db'));
// } 

// connectToMongo()