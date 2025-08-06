'use server';
import z from "zod";
import { LoginFormSchema } from "../formValidations/zodLoginSchema";
import validations from "../formValidations/validateFormInputs"
import { revalidatePath } from "next/cache";

export async function login(state: void, formData: FormData) {
  const result = validations(formData);

  if (!result.success) {
    console.error(result.errors);
    return;
  }

  const {email, password} = result.validatedFields as z.infer<typeof LoginFormSchema>;
  try{
    const response = await fetch(process.env.NEXT_PUBLIC_URL+'/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    console.log({response, url: process.env.NEXT_PUBLIC_URL})
    if(!response.ok) throw new Error("access denied")
    revalidatePath("/", "layout")
    const result = await response.json();
  }catch(error){
      console.log(error)
  }
}


