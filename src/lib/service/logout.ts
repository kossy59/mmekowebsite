"use server"

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export default async function handleLogout() {
  const cookieStore = await cookies()

  const response = NextResponse.next();
  cookieStore.set('session', '', {
    path: '/',
    expires: new Date(0),
  });
  NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_API))
  revalidatePath("/", "page")
}
