import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    Uname: Yup.string().min(3).max(20).required("Please Enter your name"),
    Email: Yup.string().email().required("Please Enter your Email"),
    Password: Yup.string().min(5).required("Please Enter your Password"),
    captcha: Yup.string().required("Please Enter the Captcha"),
});


import React from 'react'

const signUpSchema = () => {

    const signSchema = Yup.object({
        Uname: Yup.string().min(3).max(20).required("Please Enter your name"),
        Email: Yup.string().email().required("Please Enter your Email"),
        Password: Yup.string().min(5).required("Please Enter your Password"),
        captcha: Yup.string().required("Please Enter the Captcha"),
    });
    

  return (
    <div>
      
    </div>
  )
}

export default signUpSchema;
