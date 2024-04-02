import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { TitleRegisterForm, WrapRegisterForm } from './RegisterForm.styled';
const initialValues = {
  name: '',
  email: '',
  password: '',
};
const userSchema = yup.object().shape({
  name: yup.string().required('Be sure to enter your name'),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Incorret email')
    .required('Be sure to enter your email'),
  password: yup
    .string()
    .min(7, 'Password must contain minimum 8 symbols')
    .max(64, 'Password must contain maximum 64 symbols')
    .required('Be sure to enter your password'),
});
export const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {};
  return (
    <WrapRegisterForm>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TitleRegisterForm>
            Expand your mind, reading
            <span>a book</span>
          </TitleRegisterForm>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="text" name="email" placeholder="Email" />
          <Field
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {/* {isPasswordVisible ? <EyeOn /> : <EyeOff />} */}
          </button>

          <button type="submit">Registration</button>
          <Link to="/login">Already have an account?</Link>
        </Form>
      </Formik>
    </WrapRegisterForm>
  );
};
