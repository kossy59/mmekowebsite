"use client"
import Link from "next/link";
import React, {  useState } from "react";
import { ToastContainer } from "react-toastify";
import Input from "./Input";
// import { useSelector, useDispatch } from "react-redux";
// import Popup from "reactjs-popup";
// import { Fail } from "../../fragment/Fail";
// import { PassEmail } from "../auth/sent-confirmation-link/page";
// import {
//   changecompleate,
//   error,
//   loginuser,
//   savelogin,
//   changelogin,
//   forgetpass,
// } from "../../services/features/register/registerSlice";
// import { useNavigate } from "react-router-dom";
// import { alert, dismissalert } from "@/utils/alert";
// import { AppDispatch } from "../store";

// export const Loginview = ({ close }: {close: boolean}) => { // use later
export const Loginview = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // const message = useSelector((state: any) => state.register.message);
  // const stats = useSelector((state: any) => state.register.logstats);
  // const [open, setopen] = useState(false);
  // const closeModal = () => setopen(false);
  // const toastId = React.useRef(null);
  // const [closetoast, setClosetoast] = useState<boolean>(false);
  // const errs = useSelector(error);
  // const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  // const forgetpassstate = useSelector(
  //   (state: any) => state.register.forgetpassstate
  // );

  // useEffect(() => {
  //   if (message) {
  //     toast.success(`${message}`, { autoClose: 2000 });
  //     dispatch(
  //       changecompleate({
  //         compstats: "idle",
  //         message: "",
  //       })
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (stats === "succeeded") {
  //     dismissalert();
  //     alert(`${message}`, "success", 2000);
  //     dispatch(changelogin({ logstats: "idle", message: "" }));

  //     close;
  //   }
  //   if (stats === "failed") {
  //     console.log(errs);
  //     dismissalert();
  //     alert(
  //       `${
  //         typeof errs === "string" ? errs : "Please check internet connection"
  //       }`,
  //       "error",
  //       2000
  //     );
  //     dispatch(changelogin({ logstats: "idle", message: "" }));
  //   }
  // }, [stats, dispatch]);

  // const checkinput = () => {
  //   if (!acceptedTerms) {
  //     toast.error("You must accept the terms and conditions to continue.", {
  //       autoClose: 2000,
  //     });
  //     return;
  //   }
  //   if (!email) {
  //     toast.error("Enter Email", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!password) {
  //     toast.error("password Email", { autoClose: 2000 });
  //     return;
  //   }

  //   if (stats !== "loading") {
  //     dispatch(savelogin({ email, password }));
  //     alert("please wait..", "info", false);
  //     dispatch(
  //       loginuser({
  //         email,
  //         password,
  //       })
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (forgetpassstate === "succeeded") {
  //     dismissalert();
  //     alert(`${message}`, "success", 2000);
  //     toast(
  //       <PassEmail
  //         setClosetoast={setClosetoast}
  //         alert={alert}
  //         dismissalert={dismissalert}
  //         email={email}
  //         close={false}
  //       />,
  //       { autoClose: false, pauseOnHover: false, pauseOnFocusLoss: false }
  //     );
  //   }
  //   if (forgetpassstate === "failed") {
  //     dismissalert();
  //     alert(`${errs}`, "error", 2000);
  //   }
  // }, [forgetpassstate, dispatch]);

  // const forget = async () => {
  //   if (!email) {
  //     toast.error("Enter Registered Email to Continue", { autoClose: 2000 });
  //     return;
  //   }
  //   if (forgetpassstate !== "loading") {
  //     alert("please wait..", "info", false);
  //     dispatch(
  //       forgetpass({
  //         email,
  //       })
  //     );
  //   }
  // };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4"
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        margin: "0 10px",
        width: "90%",
        maxWidth: "450px",
      }}
    >
      <ToastContainer position="top-center" theme="dark" />
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h1 className="text-orange-500 text-3xl font-bold text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Log in to access your account
        </p>

        <div className="mt-6 space-y-4">
          <Input
            type="email"
            placeholder="Email Address"
          />
          <Input type="password"/>
          <div className="flex items-start mt-4">
            <Input
              type="checkbox"
              id="terms"
              overide={true} // overide classNames
              classNames="mr-2"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms" className="text-gray-400 text-sm">
              I accept the{" "}
              <span
                className="text-orange-500 underline cursor-pointer"
                // onClick={() => navigate("/term_condition")}
              >
                Terms and Conditions
              </span>
            </label>
          </div>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded shadow transition"
            // onClick={checkinput}
          >
            Log In
          </button>

          <p
            className="text-blue-500 text-sm text-center hover:text-blue-400 cursor-pointer"
            // onClick={forget}
          >
            Forgot Password?
          </p>

          <p className="text-gray-400 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              className="text-orange-500 font-bold hover:underline cursor-pointer"
              href="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
