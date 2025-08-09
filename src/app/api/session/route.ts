import { expires } from "@/constants/expires";
import { decryptData, encryptData } from "@/lib/service/manageSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  debugger
  console.log("route was hit")
  try{
    const data = await request.json();
    const sessionId = await encryptData({user: data, expires: expires});
  
    // console.log("Encrypted session ID:", sessionId);
  
    // Optional: test decryption
    // await decryptData(String(sessionId));
  
    // Create response
    const res = new NextResponse(JSON.stringify({ sessionId }), {
      status: 200,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
  
    // Set cookie in response
    res.cookies.set("session", sessionId, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
    });
  
    return res;
  }catch(error){
    console.log(error)
  }
}
