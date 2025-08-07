import z from "zod";
import { LoginFormSchema } from "../formValidations/zodLoginSchema";
import validations from "../formValidations/validateFormInputs"

type LoginSuccess = {
  email: string;
  password: string;
  success: boolean;
  errors: Record<string, string | string[]> | undefined;
};

export function login(formData: FormData): LoginSuccess {
  const result = validations(formData);

  if (!result.success) {
    console.error(result.errors);
    return {success: false, errors: result.errors, password: "", email: ""};
  }

  const {email, password} = result.validatedFields as z.infer<typeof LoginFormSchema>;
  return {success: true, errors: result.errors, password, email}
}


