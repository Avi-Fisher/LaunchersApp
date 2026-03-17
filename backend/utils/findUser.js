
import { readCsvFile } from "./files.js";

export async function checkUserPassword(userName, password) {
    const user = findAgentByAgentCode(userName)
    if (!user || password !== user.username) {
        return false
    }
    return user
}


export function findAgentByAgentCode(userName) {
    const users = readCsvFile()
    const user = users.find((e) => e.username == userName)
    if(user){
        return user
    }
    return false
}