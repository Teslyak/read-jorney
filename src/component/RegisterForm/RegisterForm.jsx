import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import {
  ErrorMsg,
  EyeBtn,
  EyeIcon,
  EyeOffIcon,
  FormRegister,
  ImgHero,
  Input,
  Label,
  LoginLink,
  LogoSvg,
  SectionHero,
  SubmitBtn,
  TitleRegisterForm,
  WrapInput,
  WrapLabel,
  WrapRegisterForm,
} from './RegisterForm.styled';
import SpriteIcons from '../../assets/icons/sprite.svg';
import iPhoneBlack from '../../assets/img/iphone.png';
const initialValues = {
  name: '',
  email: '',
  password: '',
};
const userSchema = yup.object().shape({
  name: yup.string().required('Be sure to enter your name'),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid Email')
    .required('Enter a valid Email*'),
  password: yup
    .string()
    .min(7, 'Password must contain minimum 8 symbols')
    .max(64, 'Password must contain maximum 64 symbols')
    .required('Enter a valid Password*'),
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
        {({ errors, touched }) => (
          <FormRegister>
            <LogoSvg width={42} height={17}>
              <use xlinkHref={`${SpriteIcons}#logo`} />
            </LogoSvg>
            <TitleRegisterForm>
              Expand your mind, reading
              <span> a book</span>
            </TitleRegisterForm>
            <WrapInput>
              <WrapLabel>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" />
              </WrapLabel>
              <WrapLabel>
                <Label htmlFor="email">Mail:</Label>
                <Input
                  type="text"
                  name="email"
                  className={`special ${
                    errors.email && touched.email ? 'error' : ''
                  } ${touched.email && !errors.email ? 'success' : ''}`}
                />

                <ErrorMessage name="email" component={ErrorMsg} />
              </WrapLabel>
              <WrapLabel>
                {' '}
                <Label htmlFor="password">Password:</Label>
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  name="password"
                  className={`special ${
                    errors.password && touched.password ? 'error' : ''
                  } ${touched.password && !errors.password ? 'success' : ''}`}
                />
                <EyeBtn
                  type="button"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                >
                  {isPasswordVisible ? (
                    <EyeIcon width={18} height={18}>
                      <use xlinkHref={`${SpriteIcons}#eye`} />
                    </EyeIcon>
                  ) : (
                    <EyeOffIcon width={18} height={18}>
                      <use xlinkHref={`${SpriteIcons}#eyeOff`} />
                    </EyeOffIcon>
                  )}
                </EyeBtn>
                ;
              </WrapLabel>
            </WrapInput>

            <SubmitBtn type="submit">Registration</SubmitBtn>
            <LoginLink to="/login">Already have an account?</LoginLink>
          </FormRegister>
        )}
      </Formik>
      <SectionHero>
        <ImgHero src={iPhoneBlack} alt="phone" />
      </SectionHero>
    </WrapRegisterForm>
  );
};
