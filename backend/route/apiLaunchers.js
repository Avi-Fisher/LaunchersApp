import express from "express"
import  {addRow, readCsvFile}  from "../db/readcsv.js"


const router = express.Router()



router.get("/", (req, res) => {
    try {
        const data = readCsvFile()
        res.status(200).json({ data })
    } catch (error) {
        console.error(error.message)
    }
})


// router.get("/id", (req, res) => {
//     try {
//         const { id } = req.body

//         if (!id) {
//             res.status(400).json({ error: "some ditels is miste" })
//         } else {
//             const data = id
//             res.status(200).json({ data })
//         }
//     } catch (error) {
//         console.error(error.message)
//     }
// })


router.post("/", (req, res) => {
    try {
        const { city, rocketType, latitude, longitude, name } = req.body
        
        if (!city || !rocketType || !latitude || !longitude || !name) {
            res.status(400).json({ error: "some ditels is miste" })
        } else {
            
            addRow(req.body)
            res.status(200).json({ message: "rocet add to db" })
        }
    } catch (error) {
        console.error(error.message)
    }
})


export default router