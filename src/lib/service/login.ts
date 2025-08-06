'use server';
import z from "zod";
import { LoginFormSchema } from "../formValidations/zodLoginSchema";
import validations from "../formValidations/validateFormInputs"
import { revalidatePath } from "next/cache";
import axios from "axios";
import { cookies } from "next/headers";

let token: string;

export async function login(state: void, formData: FormData) {
  const result = validations(formData);

  if (!result.success) {
    console.error(result.errors);
    return;
  }

  const {email, password} = result.validatedFields as z.infer<typeof LoginFormSchema>;
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });
  const data = await response.json()
  console.log(data)
    if(!response.status) throw new Error("access denied")
    // revalidatePath("/", "layout")
    return {success: true};
  }catch(error){
      console.log(error)
  }
}


