import * as Yup from "yup";

const Validate = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string()
    .email("invalid email")
    .max(25)
    .required("please enter your email"),
  dob: Yup.string().required("please enter your Date of Birth"),
  address: Yup.string().min(10).max(80).required("please enter your address"),
  pincode: Yup.string().min(6).required("please enter your pincode"),
  country: Yup.string().min(2).max(25).required("please enter your country"),
  state: Yup.string().min(2).max(25).required("please enter your state"),
  date: Yup.string().required("please enter your date"),
  time: Yup.string().required("please enter your time"),
  maritalstatus: Yup.string().required("please select your marital status"),
  gender: Yup.string().required("please select your gender status"),
  detaile: Yup.string()
    .min(5)
    .max(30)
    .required("please enter your vaccination center detail"),

  mobilenumber: Yup.string()
    .required("please enter your Mo.number")
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .min(10)
    .max(10),
});

export default Validate;
