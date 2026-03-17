import jwt from "jsonwebtoken"
import "dotenv/config"

export function createToken(userName, userType) {
    const token = jwt.sign(
        { userName: userName, userType: userType },
        "process.env.SECRET_KEY_FOR_JWT",
        { expiresIn: "1h" }
    )
    return token
}

export function checkToken(token) {
    try {
        const isConnect = jwt.verify(token, "process.env.SECRET_KEY_FOR_JWT")
        return isConnect
    } catch {
        return false
    }
}