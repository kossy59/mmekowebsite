'use server';
import React from "react";
import z from "zod";
import { LoginFormSchema } from "../formValidations/zodLoginSchema";
import validations from "../formValidations/validateFormInputs"
import { SignupFormSchema } from "../formValidations/zodSignupSchema";
import axios from "axios"


type formValues = z.infer<typeof LoginFormSchema>

export async function register(state: void, formData: FormData) {
    const result = validations(formData);
    console.log({formData})

  if (!result.success) {
    console.error(result.errors);
    return;
  }

    const signupData = result.validatedFields as z.infer<typeof SignupFormSchema>;

     try {
    const response = await axios.post('http://localhost:3000/register', signupData);
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
