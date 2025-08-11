import { toast } from 'react-toastify'

export default function toastError({message}: {message: string}) {
  return toast.error(message, {style: {backgroundColor: "#111"}})
}
