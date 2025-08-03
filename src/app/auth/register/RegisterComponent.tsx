"use client"
// import Popup from "reactjs-popup";
// import locationIcon from "../../../public/icons/locationIcon.svg"
import React, { useActionState, useState } from "react";
// import Confirmemail from "../confirm-email/page";
// import HeaderBackNav from "../../_components/navs/HeaderBackNav";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import CountrySelect from "@/components/CountrySelect/CountrySelect";
import NextSlide from "./_components/NextSlideBtn";
import Input from "@/components/Input";
import Step from "./_components/Step";
import DotSlideBtn from "./_components/DotSlideBtn";
import Agree from "./_components/AgreeBtn";
import { register } from "@/lib/service/register";
import { useRouter } from "next/navigation";
import BtnLoader from "@/constants/BtnLoader";

let emailCapture: FormDataEntryValue | null
export const Register = () => {
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [country, setcountry] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  

  let regex = /^[a-zA-Z0-9_@]+$/;
  // let firstLatter = /^@.*/;

  const getLocation = (country: string) => {
    setcountry(`${country}`);
  };

  // Submit form
  async function handleSubmit(formData: FormData){
    setLoading(true)
    emailCapture = formData.get("email")
    if(!agreedPrivacy && !agreedTerms) return
    try{
      const result = await register(undefined, formData)
      router.push(`/auth/verify-email/?email=${emailCapture}`)
    }catch(error){
      console.log(error)
    }finally {setLoading(false)}
  }
  const inputs = [
    {
      step_1: [
        {
          label: "First Name",
          input: <Input type="text" name="firstname" placeholder="" overide={true} classNames="" />,
        },
        {
          label: "Last Name",
          input: <Input type="text" name="lastname" placeholder="" overide={true} classNames="" />,
        },
        {
          label: "Email",
          input: <Input required={true} type="email" placeholder="" overide={true} classNames="" />,
        },
        {
          label: "Date of birth",
          input: <Input required={true} type="date" name="dob" placeholder="" overide={true} classNames="" />,
        },
      ],
      step_2: [
        {
          label: "Gender",
          input: <select
          id="Gender" name="gender">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
        },
        {
          label: "@User Name",
          input: <Input required={true} type="text" name="username" placeholder="" overide={true} classNames="" />
        },
      ],
      step_3: [
        {
          label: "Password",
          input: <Input type="password" placeholder="" overide={true} classNames="" />,
        },
        {
          label: "Confirm Password",
          input: <Input type="password" name="confirmPassword" placeholder="" overide={true} classNames="" />,
        },
      ]
    }
  ]

  // console.log({}) // use to avoid lint errors 
  return (
    <div className="body w-full">
      {/* <ToastContainer position="top-center" theme="dark" /> */}
      <div className="form-container-wrapper w-full">
        <Image src={"/register.png"} alt="Register" width={500} height={300} />

        <form action={handleSubmit}>
          <h2>Register</h2>
          <p>Create. Connect. Cash Out.</p>
          {/* Pagination Steps */}
          <div className="pagination">
            <DotSlideBtn setStep={setStep} step={step} slide={1} />
            <DotSlideBtn setStep={setStep} step={step} slide={2} />
            <DotSlideBtn setStep={setStep} step={step} slide={3} />
          </div>

          <div className="form-input-wrapper">
            {/* Step 1 */}
            <Step step={step} slide={1}>
             {inputs[0].step_1.map((v, i)=>{
              return  <div className="floating-label-group" key={i}>
                {v.input}
                <label htmlFor={v.label}>{v.label}</label>
              </div>
             })}
              <NextSlide setStep={setStep} />
            </Step>

            <Step step={step} slide={2}>
             {inputs[0].step_2.map((v, i)=>{
              return  <div className="floating-label-group" key={i}>
                {v.input}
                <label htmlFor={v.label}>{v.label}</label>
              </div>
             })}
              <div className="floating-label-group">
                <CountrySelect onSelectCountry={getLocation} />
                <input type="hidden" name="country" value={country} />
              </div>
              <NextSlide setStep={setStep} />
            </Step>

            {/* Step 3 */}
            <Step step={step} slide={3}>
             {inputs[0].step_3.map((v, i)=>{
              return  <div className="floating-label-group" key={i}>
                {v.input}
                <label htmlFor={v.label}>{v.label}</label>
              </div>
             })}
              <input type="hidden" name="signing-type" value="signup" />
              <Agree toThe={<Link href="/term_condition">the Terms and Conditions.</Link>} agree={agreedTerms} setAgree={()=> setAgreedTerms(prev=> !prev)} />
              <Agree toThe={<Link href={"/privacy_&_policy"}>Privacy and Policy</Link>} agree={agreedPrivacy} setAgree={()=> setAgreedPrivacy(prev=> !prev)} />
              <button type="button" className="btn flex items-center justify-center">
                {!loading ? <p style={{color: "white"}} className="flex items-center justify-center gap-3 text-white"><BtnLoader /> Please wait...</p> : "Register" }
              </button>
            </Step>
          </div>
          <p>I already have an account <Link href="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
};
