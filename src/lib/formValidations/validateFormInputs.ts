import z from "zod";
import { LoginFormSchema } from "./zodLoginSchema"
import { SignupFormSchema } from "./zodSignupSchema"

type ValidationResult<T> = {
  success: boolean;
  validatedFields: T | {};
  errors?: Record<string, string[] | string>;
};

// Rate limiting configuration
const RATE_LIMIT = {
  MAX_ATTEMPTS: 5,
  WINDOW_TIME: 60 * 1000, // 1 minute
}

// Track sign-up attempts
const signUpAttempts = new Map()

export default function validations(formData: FormData): ValidationResult<z.infer<typeof SignupFormSchema> | z.infer <typeof LoginFormSchema>> {
  // Rate limiting check
  const ip = "default" // Placeholder for IP address
  const attempts = signUpAttempts.get(ip) || 0

  if (attempts >= RATE_LIMIT.MAX_ATTEMPTS) {
    return {
      errors: { general: "Too many sign-up attempts. Please try again later." },
      success: false,
      validatedFields: {}
    }
  }

  signUpAttempts.set(ip, attempts + 1)
  setTimeout(() => signUpAttempts.delete(ip), RATE_LIMIT.WINDOW_TIME)

  // Validate form fields
  const validatedFields = formData.get("signing-type") === "signup" 
    ? SignupFormSchema.safeParse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        nickname: formData.get("nickname"),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmpassword: formData.get('confirmpassword'),
        gender: formData.get('gender'),  
        country: formData.get('country'),
        dob: formData.get('dob')
      })
    : LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
      })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      validatedFields: {}
    }
  }

  // const { name, email, password } = validatedFields.data
  // console.log({ name, email, password })
  return { 
    validatedFields: validatedFields.data, 
    success: true,
  }
}
