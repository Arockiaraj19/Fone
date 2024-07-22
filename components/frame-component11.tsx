import type { NextPage } from "next";
import FrameComponent12 from "./frame-component12";
import {addContacts } from "../service/order.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { serverTimestamp } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {


  const formik = useFormik({
    validateOnBlur: false,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      enquiry:""
    },
    validationSchema: Yup.object({
      name: Yup.string()

        .required("Please enter a valid name")
        .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
      phone: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid")
        .required("Please enter a valid phone number"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a valid email"),
      enquiry: Yup.string().required("Please enter a valid enquiry"),
      subject: Yup.string().required("Please enter a valid subject"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
       
        if(!terms){
          return toast.error("Please accept the terms and conditions");
        }

        await addContacts({
          ...values,
       
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
       
        });
        toast.success("Contact us submitted successfully");
        
        resetForm();
       // router.reload();
      } catch (error: any) {}

      //
    },
  });
const [terms,setTerms]=useState(false);
  return (
    <>
    <form
     autoComplete="off"
     onSubmit={formik.handleSubmit}
      className={`self-stretch flex flex-row  items-start justify-center pt-0 pb-[11.5px] pr-6 pl-5 box-border max-w-full text-left text-xs text-new-1f font-inter ${className}`}
    >
        <Toaster  toastOptions={{
    className: 'text-sm',
   
  }} position="top-right" reverseOrder={false} />
      <div className="w-[1116px] flex flex-col items-end justify-start gap-[14.5px] max-w-full">
     
        <div className="self-stretch flex flex-row items-start justify-start gap-[58px] max-w-full mq750:gap-[29px] mq1050:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[48px] min-w-[408px] max-w-full mq750:gap-[24px] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch relative font-medium">CONTACT</div>
              <h1 className="m-0 self-stretch relative text-29xl tracking-[-0.06em] leading-[55px] font-medium font-work-sans text-anew-black mq450:text-10xl mq450:leading-[33px] mq1050:text-19xl mq1050:leading-[44px]">
                Get in touch to find out how we can help transform your trade-in
                journey
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-lg font-work-sans mq750:flex-wrap">
              <FrameComponent12
                amsterdamOffice="Amsterdam Office"
                fredRoeskestraat100="Fred. Roeskestraat 100,"
                eDAmsterdam="1076ED Amsterdam,"
                theNetherlands="The Netherlands,"
                europe="Europe"
              />
              <FrameComponent12
                amsterdamOffice="Dubai Office"
                fredRoeskestraat100="111, Offices 4,"
                eDAmsterdam="One Central,"
                theNetherlands="Next to World Trade Center,"
                europe="Dubai"
                propPadding="unset"
              />
            </div>
          </div>
          <div className="w-[430px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border min-w-[430px] max-w-full text-sm text-new-1f font-work-sans mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start  max-w-full">
            <div className="w-[430px] rounded-sm box-border flex  flex-row items-start justify-start p-[18px] max-w-full border-[1px] border-solid border-darkslateblue-100">
          <input
            className="w-[70px] [border:none] [outline:none] font-medium font-work-sans text-sm bg-[transparent] h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
            placeholder="Full Name*"
            {...formik.getFieldProps("name")}
            type="text"
          />
        </div>
        {formik.errors.name ? (
          <div className="w-full  mt-1 text-sm text-start text-red">
            {formik.errors.name}
          </div>
        ) : null}
              <div className="self-stretch flex flex-row mt-5 items-start justify-start  mq450:flex-wrap">
             
                <div className="flex-1 rounded-sm box-border  flex flex-row items-start justify-start p-[18px] min-w-[91px] border-[1px] border-solid border-darkslateblue-100">
                  <input
                    className="w-[91px] [border:none] [outline:none] font-medium font-work-sans text-sm bg-[transparent] h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
                    placeholder="Mobile Phone*"
                    type="text"
                    {...formik.getFieldProps("phone")}
                  />
                </div>
               
              </div>
               {formik.errors.phone ? (
          <div className="w-full  mt-1 text-sm text-start text-red">
            {formik.errors.phone}
          </div>
        ) : null}
              <div className="self-stretch rounded-sm flex mt-5  flex-row items-start justify-start p-[18px] border-[1px] border-solid border-darkslateblue-100">
                <input
                  className="w-[124px] [border:none] [outline:none] font-medium font-work-sans text-sm bg-[transparent] h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
                  placeholder="Your email Address*"
                  {...formik.getFieldProps("email")}
                  type="text"
                />
              </div>
              {formik.errors.email ? (
          <div className="w-full  mt-1 text-sm text-start text-red">
            {formik.errors.email}
          </div>
        ) : null}
              <div className="self-stretch rounded-sm flex flex-row mt-5 items-start justify-start p-[18px] border-[1px] border-solid border-darkslateblue-100">
                <input
                  className="w-[59px] [border:none] [outline:none] font-medium font-work-sans text-sm bg-[transparent] h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
                  placeholder="Subject *"
                  {...formik.getFieldProps("subject")}
                  type="text"
                />                
              </div>
              {formik.errors.subject ? (
          <div className="w-full  mt-1 text-sm text-start text-red">
            {formik.errors.subject}
          </div>
        ) : null}
              <div className="self-stretch rounded-sm flex flex-row mt-5 items-start justify-start p-[18px] border-[1px] border-solid border-darkslateblue-100">
                <input
                  className="w-[165px] [border:none] [outline:none] font-medium font-work-sans text-sm bg-[transparent] h-4 relative tracking-[-0.06em] text-new-1f text-left flex items-center p-0"
                  placeholder="Tell us about your enquiry*"
                  {...formik.getFieldProps("enquiry")}
                  type="text"
                />                
              </div>
              {formik.errors.enquiry ? (
          <div className="w-full mt-1 text-sm text-start text-red">
            {formik.errors.enquiry}
          </div>
        ) : null}
              <div className="self-stretch rounded-sm flex flex-row mt-5 items-start justify-start py-0 pr-7 pl-0 box-border gap-[10px] max-w-full text-new-1f mq450:flex-wrap">
                <input
                  className="m-0 h-[23px] w-[23px] relative rounded box-border border-[1px] border-solid border-plum"
                  type="checkbox"
                checked={terms}
                  onChange={(e)=>setTerms(e.target.checked)}
                />
                <div className="flex-1 flex flex-col items-start  justify-start pt-[3.5px] px-0 pb-0 box-border min-w-[240px] max-w-full">
                  <div className="h-4 relative tracking-[-0.06em] leading-[16.67px] font-medium flex items-center">
                    <span>
                      <span>You must agree with the </span>
                      <span className="text-mediumslateblue">{`Terms & Conditions`}</span>
                      <span>{` & `}</span>
                      <span className="text-mediumslateblue">
                        Privacy Policy
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <button   type="submit" className="cursor-pointer [border:none] mt-5 py-4 px-5 bg-new-1f w-[430px] rounded-xl flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslateblue-200">
          <div  className="relative text-lg tracking-[-0.06em] font-medium font-poppins text-white text-left inline-block min-w-[60px]">
            Submit
          </div>
        </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  
        </>
  );
};

export default FrameComponent11;
