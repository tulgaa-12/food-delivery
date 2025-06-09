// const validtionschema = Yup.object({
//   email: Yup.string()
//     .required()
//     .test(
//       "email",
//       "Invalid email. Use a format like example@email.com",
//       (value) => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i;
//         return emailRegex.test(value);
//       }
//     ),
// });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: validtionschema,
//     onSubmit: (values) => {
//       console.log("form submit", values);
//     },
//   });

//   const emailInputprops = {
//     name: "email",
//     value: formik.values.email,
//     onChange: formik.handleChange,
//   };

//   const isButtonDisbled = !formik.errors.email;

const Home = () => {
  return <div>Home page</div>;
};

export default Home;
