"use client"
// import Popup from "reactjs-popup";
// import locationIcon from "../../../public/icons/locationIcon.svg"
import React, { useState } from "react";
// import Confirmemail from "../confirm-email/page";
// import HeaderBackNav from "../../_components/navs/HeaderBackNav";
// import { ToastContainer, toast } from "react-toastify";
// import CountrySelect from "../../_components/CountrySelect/CountrySelect";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
// import { Action, Dispatch, UnknownAction } from "@reduxjs/toolkit";
// import {
//   registernewUser,
//   status,
//   error,
//   changeStatus
// } from "../../../services/features/register/registerSlice";
// import { AppDispatch } from "@/app/store";
// import { alert, dismissalert } from "@/utils/alert";

export const Register = () => {
  const [firstname, setfirstname] = useState<string>("");
  const [gender, setgender] = useState<string>("");
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState<boolean>(false);
  const [step, setStep] = useState<"1" | "2" | "3">("1");
  const [password, setpassword] = useState<string>("");
  const [compas, setcompas] = useState<string>("");
  const [nickname, setnickname] = useState<string>("");
  
  // const [lastname, setlastname] = useState<string>("");
  // const [dob, setdob] = useState<string>("");
  // const [country, setcountry] = useState<string>("");
  // const stats = useSelector(status);
  // const errs = useSelector(error);
  // const dispatch = useDispatch<AppDispatch>();
  // const [email, setemail] = useState<string>("");
  // const [dateofbirth, setdateofbirth] = useState<Date>(new Date());
  // const dispatch = useDispatch();

  let regex = /^[a-zA-Z0-9_@]+$/;
  // let firstLatter = /^@.*/;

  // const notify = (message: string) =>
    // toast.error(`${message}`, {
    //   autoClose: 1000,
    //   pauseOnHover: false,
    //   pauseOnFocusLoss: false,
    // });

  // const checkInput = () => {
  //   if (!firstname) {
  //     notify("Enter first name");
  //     return true;
  //   }

  //   if (firstname.length > 12) {
  //     notify("Name must be maximum of 12 characters");
  //     return true;
  //   }
  //   if (!lastname) {
  //     notify("Enter last name");
  //     return true;
  //   }
  //   if (lastname.length > 12) {
  //     notify("Name must be maximum of 12 characters");
  //     return true;
  //   }
  //   if (!dob) {
  //     notify("Enter date of birth");
  //     return true;
  //   }
  //   if (!gender) {
  //     notify("Select gender");
  //     return true;
  //   }
  //   if (!nickname) {
  //     notify("user must choose username");
  //     return true;
  //   }
  //   if (nickname.length > 20) {
  //     notify("Username must be maximum of 20 characters");
  //     return true;
  //   }

  //   if (!country) {
  //     notify("Enter country");
  //     return true;
  //   }
  //   if (!email) {
  //     notify("Enter email");
  //     return true;
  //   }
  //   if (!password) {
  //     notify("Enter password");
  //     return true;
  //   }
  //   if (password !== compas) {
  //     notify("Password mismatch");
  //     return true;
  //   }

  //   if (!agreedTerms || !agreedPrivacy) {
  //     notify("You must read and agree to the Terms and Privacy Policy");
  //     return true;
  //   }

  //   return false;
  // };

  // useEffect(() => {
  //   if (stats.toString() === "succeeded") {
  //     dismissalert();
  //     alert("Success!", "success", 2000);
  //     dispatch(changeStatus("idle"));
  //     toast(
  //       <Confirmemail
  //         email={email}
  //         alert={alert}
  //         dismissalert={dismissalert}
  //       />,
  //       { autoClose: false }
  //     );
  //   }
  //   if (stats.toString() === "failed") {
  //     dismissalert();
  //     alert(
  //       `${`${
  //         typeof errs === "string" ? errs : "Please check internet connection"
  //       }`}`,
  //       "error",
  //       2000
  //     );
  //     dispatch(changeStatus("idle"));
  //   }
  // }, [stats, errs, email, dispatch]);

  // const getLocation = (country: string) => {
  //   setcountry(`${country}`);
  // };

  console.log({nickname, compas, password}) // use to avoid lint errors 
  return (
    <div className="body w-full">
      {/* <ToastContainer position="top-center" theme="dark" /> */}
      <div className="form-container-wrapper w-full">
        <Image src={"/register.png"} alt="Register" width={500} height={300} />

        <form>
          <h2>Register</h2>
          <p>Create. Connect. Cash Out.</p>
          {/* Pagination Steps */}
          <div className="pagination">
            <div
              className={step === "1" ? "step active" : "step"}
              onClick={() => setStep("1")}
            ></div>
            <div
              className={step === "2" ? "step active" : "step"}
              onClick={() => setStep("2")}
            ></div>
            <div
              className={step === "3" ? "step active" : "step"}
              onClick={() => setStep("3")}
            ></div>
          </div>

          <div className="form-input-wrapper">
            {/* Step 1 */}
            <div className={step === "1" ? "form active" : "form"}>
              <div className="floating-label-group">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/[^a-zA-Z\s]/.test(value)) {
                      // toast.error("Special characters are not allowed", {
                      //   autoClose: 2000,
                      // });
                      return;
                    } else setfirstname(e.target.value);
                  }}
                  placeholder=""
                  required
                />
                <label htmlFor="firstName">First Name</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="text"
                  // value={lastname}
                  // onChange={(e) => {
                  //   const value = e.target.value;

                  //   if (/[^a-zA-Z\s]/.test(value)) {
                  //     toast.error("Special characters are not allowed", {
                  //     //   autoClose: 2000,
                  //     // });
                  //     return;
                  //   } else setlastname(e.target.value);
                  // }}
                  placeholder=""
                />
                <label htmlFor="lastName">Last Name</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="email"
                  // onChange={(e) => setemail(e.target.value)}
                  placeholder=""
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="date"
                  onChange={(e) => {
                    let date = new Date(String(e.target.value));
                    let current_date = new Date(Number(Date.now()));
                    let years = current_date.getFullYear() - date.getFullYear();
                    // setdob(String(years));
                    // setdateofbirth(date);
                  }}
                  required
                />
                <label htmlFor="dob">Date of Birth</label>
              </div>

              <button
                type="button"
                // onClick={() => {
                //   setStep("2");
                // }}
              >
                Next
              </button>
            </div>

            {/* Step 2 */}
            <div className={step === "2" ? "form active" : "form"}>
              <div className="floating-label-group">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                  required
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="floating-label-group username">
                <span>@</span>
                <input
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    if (!regex.test(e.target.value)) {
                      // toast.info("invalid input format", {
                      //   autoClose: false,
                      // });
                      return;
                    }
                    if (e.target.value.length > 20) {
                      // toast.info("username must be maximum of 20 characters", {
                      //   autoClose: false,
                      // });
                      return;
                    }
                    setnickname("@".concat(e.target.value));
                  }}
                  required
                />
                <label
                  htmlFor="username"
                  style={{ left: "30px", width: "fit-content" }}
                >
                  User Name
                </label>
              </div>

              <div className="floating-label-group">
                {/* <CountrySelect onSelectCountry={getLocation} /> */}
              </div>

              <button type="button" onClick={() => setStep("3")}>
                Next
              </button>
            </div>

            {/* Step 3 */}
            <div className={step === "3" ? "form active" : "form"}>
              <div className="floating-label-group">
                <input
                  type="password"
                  placeholder=""
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="floating-label-group">
                <input
                  type="password"
                  placeholder=""
                  onChange={(e) => setcompas(e.target.value)}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                />
                <span className="checkmark"></span>
                <span>
                  I read and agree to{" "}
                  <a href="/term_condition">the Terms and Conditions.</a>
                </span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={agreedPrivacy}
                  onChange={(e) => setAgreedPrivacy(e.target.checked)}
                />
                <span className="checkmark"></span>
                <span>
                  I read and agree to{" "}
                  <a href="/privacy_policy">the Privacy Policy.</a>
                </span>
              </label>

              <button
                type="button"
                // onClick={() => {
                //   if (!checkInput()) {
                //     alert("Please wait...", "info", false);
                //     dispatch(
                //       registernewUser({
                //         firstname,
                //         lastname,
                //         age: dob,
                //         gender,
                //         nickname,
                //         country,
                //         email,
                //         password,
                //         dob: dateofbirth,
                //       })
                //     );
                //   }
                // }}
              >
                Register
              </button>
            </div>
          </div>
          <p>
            I already have an account <Link href="/auth/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
