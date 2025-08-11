import { expires } from "@/constants/expires";
import { encryptData } from "@/lib/service/manageSession";
import { NextRequest, NextResponse } from "next/server";
import {hash} from "bcrypt"
import handleLogout from "@/lib/service/logout";

export async function POST(request: NextRequest) {
  // debugger
    const data = await request.json();
    handleLogout()
    const sessionId = await encryptData({user: data, expires: expires});
    console.log({data, sessionId})
  
    // Create response
    const res = new NextResponse(JSON.stringify({ sessionId }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    // delete initial cookie

  
    // Set cookie in response
    res.cookies.set("session", sessionId, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
    });
  
    return res;
}
