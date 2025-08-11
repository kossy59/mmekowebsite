"use server"
import { NextRequest, NextResponse } from "next/server";
import {jwtVerify, SignJWT} from "jose"
import axios from "axios";
import { cookies } from "next/headers";
import handleLogout from "./logout";

export type user = {email: string, password: string}
export type payload = {user: user, expires: number}

const secrete = process.env.NEXT_PUBLIC_SCERET
const key = new TextEncoder().encode(secrete)
let credentials: user | false

export async function encryptData(payload:payload ) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}

export async function decryptData(input: string){
    console.log({input})
    // try{
        const payload = await jwtVerify(input, key, {algorithms: ["HS256"]})
        console.log({payload})
        return payload
//     }catch(error: any){
//         console.log(error)
//         if (error.code === 'ERR_JWT_EXPIRED') {
//         console.warn("Token expired:", error.payload)
//         throw new Error("Session expired. Please log in again.")
//   }
//         throw error
//     }
}

export async function isRegistered(payload: {email: string, password: string}): Promise<{email: string, password: string} | undefined> {
    try{
        const res = axios.post(`${process.env.NEXT_PUBLIC_API}/login`, payload, {withCredentials: true})
        const user = (await res).data.user
        console.log(user)
        return user
    }catch(error){
        console.log(error)
        credentials = false
        return {email: "", password: ""}
    }
}


export async function sessionMng(request: NextRequest) {
    const cookie = request.cookies.get("session")?.value
    if(!cookie) return NextResponse.redirect(new URL('/', request.url))
    try{
        const userSession = await decryptData(cookie)
        console.log({userSession})
    
    }catch(error: any){
        console.log(error)
        return new Response('Session expired. Please log in again.', { status: 401 })
    }
}

// export async function updateSession(request: NextRequest) {
//     const session = request.cookies.get("session")?.value

//     const payload = await decryptData(String(session))
//     payload.expires = expires
//     const res = NextResponse.next()

//     res.cookies.set({
//         name: "session",
//         value: await encryptData(payload),
//         httpOnly: true,
//         expires
//     })

// }