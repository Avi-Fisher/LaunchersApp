import fs from "fs"
import papaparse from "papaparse"

export function readCsvFile(){
    const file = fs.readFileSync("./db/data.csv","utf-8")
    const data =
    papaparse.parse(file,{
        header:true,
        complete:(results)=>{
            console.log("Data from file:",results.data); 
        }
    })
    
    return data["data"]
}


export function addRow( newRow) {
    const csvRow = `\n${Object.values(newRow).join(',')}`;
    fs.appendFileSync("./db/data.csv", csvRow, 'utf8');
}
