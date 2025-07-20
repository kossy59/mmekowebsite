// "use client"
// import React from "react";
// import { toast } from "react-toastify";

// export type type = "success" | "error" | "info" | "warning" | "default"
// export type close = false | number | undefined

// const toastId = React.useRef<string | number | null>(null);
// export const alert = (message: string, type: type, close: close) => {
//     toastId.current = toast(`${message}`, {
//       type: `${type}`,
//       autoClose: close,
//     });

//     return {toastId: toastId.current}
//   };

// export  const dismissalert = () => {
//     if (toastId.current !== null) {
//       toast.dismiss(toastId.current);
//       toastId.current = null;
//     }
//   };