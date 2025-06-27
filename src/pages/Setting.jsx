// import { Input, Form, Button, notification } from 'antd';
// import { useNavigate } from "react-router-dom";
// const SettingsPage = () => {
//   const navigate = useNavigate();
//   const [api, contextHolder] = notification.useNotification();

//   const OnFinsh = (values) => {
//     const { username, password } = values;
//     if (username === "admin" && password === "admin01") {
//       navigate("/menu");
//     } else {
//       api.open({
//         message: 'Login Failed',
//         description: 'Username yoki parol noto‘g‘ri. Iltimos, qayta urinib ko‘ring.',
//       });
//     }
//   };

//   return (
//     <div className="settings flex justify-center items-center h-screen">
//       {contextHolder}
//       <div className="w-[400px] h-[350px] bg-white p-4 rounded shadow">
//         <h2 className="text-center text-[30px] mb-4">Sign In</h2>
//         <Form className='flex flex-col gap-2' onFinish={OnFinsh}>
//           <Form.Item
//             label="Username"
//             name="username"
//             rules={[{ required: true, message: "Please enter Username" }]}
//           >
//             <Input placeholder="username..." size='large' />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: "Please enter Password" }]}
//           >
//             <Input.Password placeholder='password...' size='large' />
//           </Form.Item>
//           <Button type="primary" htmlType='submit'>Submit</Button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // <-- Qadam 1

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name").matches(/^[A-Z][a-z]*$/, "Name must start with a capital letter"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  feedback: Yup.string().min(10, "Feedback must be at least 10 characters").required("Please enter your feedback"),
  password: Yup.string().min(5, "Feedback must be at least 5 characters").required("Please enter your feedback")
});

const SignUp = () => {
  const navigate = useNavigate(); 
  return (
    <Formik
      initialValues={{ name: "", email: "", feedback: "" ,password:""}}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Feedback submitted:", values);
        navigate("/menu");
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 w-[400px] m-auto mt-10">
          <div>
            <label>Name</label>
            <Field name="name" type="text" className="border p-2 w-full" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Feedback</label>
            <Field as="textarea" name="feedback" className="border p-2 w-full h-[100px]" />
            <ErrorMessage name="feedback" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label>Password</label>
            <Field as="textarea" name="password" className="border p-2 w-full h-[100px]" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white py-2 rounded">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
