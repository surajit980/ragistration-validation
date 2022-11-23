import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fname:yup
  .string()
  .matches(/^[aA-zZ\s]+$/, "please use only alphabet")
  .min(2)
  .max(15)
  .required("please enter your first name"),

  lname:yup
  .string()
  .matches(/^[aA-zZ\s]+$/, "please use only alphabet")
  .min(2)
  .max(15)
  .required("please enter your last name"),

  email: yup
  .string()
  .email("please enter a valid email")
  .required("please enter your email"),

  panAadhar:yup
  .string()
  .min(10,"please enter a valid pan/aadhar number")
  .max(12,"pan or aadhar must be at most 12 charecter")
  .required("please enter your pan or aadhar number"),

  phNo: yup
    .string()
    .min(10,"phone number must be at least 10 digit")
    .max(10,"phone number must be at most 10 digit")
    .required("please enter your phone number"),

  password: yup
    .string()
    .min(8, "at least 8 chars")
    .matches(/[a-z]/, "at least one lowercase char")
    .matches(/[A-Z]/, "at least one uppercase char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    ).required("please make a strong password"),

    dob:yup
    .date()
    .max(2004,"you are not 18 years old")
    .required("please enter your date of birth"),

    address:yup
    .string()
    .required("please enter your address"),

    pin:yup
    .string()
    .min(6,"pin number must be at least 6 digit")
    .max(6,"pin number must be at most 6 digit")
    .required("please enter your pin number"),

    username:yup
    .string()
    .required("please enter your username"),
  
});
