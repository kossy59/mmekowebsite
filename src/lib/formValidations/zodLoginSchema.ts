import { z } from 'zod'
import { zodObj } from './zodSignupSchema'
 
export const LoginFormSchema = z.object({
  email: zodObj.email,
  password: zodObj.password,
})