import * as yup from "yup";

// export default yup.object().shape({
//     username: yup.string()
//     .required("user required")
//     .min(3, "min. 3 char long"),
//     email:  yup.string().email("email required"),
   
//     role:  
//     yup.string()
//     .string()
//     .oneOf(["tl", "instructor", "student", "alumni"], "role is required"),
   
//     civil:  yup.string(),
  
//     hiking: yup.boolean,
//     reading: yup.boolean,
//     coding: yup.boolean,
// });

// const formSchema = Yup.object().shape({
//     email: Yup
//       .string()
//       .email("Must be a valid email address.")
//       .required("Must include email address."),
//     password: Yup
//       .string()
//       .required("Password is Required")
//       .min(6, "Passwords must be at least 6 characters long."),
//     terms: Yup
//       .boolean()
//       .oneOf([true], "You must accept Terms and Conditions"),
//       // required isn't required for checkboxes.
//   });