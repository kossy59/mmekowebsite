'use server';
import React from "react";
import z from "zod";
import { LoginFormSchema } from "../formValidations/zodLoginSchema";
import validations from "../formValidations/validateFormInputs"
import { SignupFormSchema } from "../formValidations/zodSignupSchema";
import axios from "axios"


// type formValues = z.infer<typeof LoginFormSchema>

export async function login(state: void, formData: FormData) {
    const result = validations(formData);
    console.log(formData)

  if (!result.success) {
    console.error(result.errors);
    return;
  }

    const signinData = result.validatedFields as z.infer<typeof LoginFormSchema>;

  try {
    const response = await axios.post(process.env.NEXT_API+"/login", signinData, {withCredentials: true});
    // const response = await axios.post("http://localhost:3100/login", signinData, {withCredentials: true});
    console.log({data: response.data})
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
