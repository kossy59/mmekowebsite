"use server"
import { NextRequest, NextResponse } from "next/server";
import {jwtVerify, SignJWT} from "jose"
import axios from "axios";
import { cookies } from "next/headers";
import { expires } from "@/constants/expires";

export type user = {email: string, password: string}
export type payload = {user: user, expires: number}

const secrete = process.env.NEXT_PUBLIC_SCERET
const key = new TextEncoder().encode(secrete)
let credentials: user | false
let timeout_id: ReturnType<typeof setTimeout>

export async function encryptData(payload:payload ) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime('10s')
    .sign(key)
}

export async function decryptData(input: string): Promise<{ status: string; body: user }> {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] })
    const typedPayload = payload as payload
    console.log({ decryptData: payload, input })
    return { status: "valid", body: typedPayload.user }
  } catch (error: any) {
    console.log(error)
    return { status: "expired", body: error?.payload?.user ?? { email: "", password: "" } }
  }
}

export async function isRegistered(payload: {email: string, password: string, }): Promise<{email: string, password: string} | undefined> {
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
    const getAllCookies = request.cookies.getAll()
    console.log({cookieFrom_smng: cookie, cookies: getAllCookies})
    if(!cookie?.length) return
    const decryptCookie = await decryptData(String(cookie))
    console.log({status: decryptCookie?.status})
    if(decryptCookie?.status === "valid") return
    await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/session`, decryptCookie.body, {withCredentials: true})

    
}   
