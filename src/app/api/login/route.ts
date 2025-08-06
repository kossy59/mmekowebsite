import axios from 'axios';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

 try {
    const response = await axios.post(process.env.NEXT_PUBLIC_API+"/login", { email, password }, {withCredentials: true});
    return NextResponse.json({ status: 200, ok: true, response: response.data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
