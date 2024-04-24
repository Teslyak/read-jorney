import styled from 'styled-components';
import { colors } from '../../constats';
import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const WrapRegisterForm = styled.div``;

export const TitleRegisterForm = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.64px;
  margin-bottom: 20px;
  color: ${colors.color_text_first};
  span {
    color: ${colors.color_text_second};
  }
`;

export const LogoSvg = styled.svg`
  margin-bottom: 40px;
`;

export const FormRegister = styled(Form)`
  padding: 20px 20px;
  background-color: ${colors.bgc_second};
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 44px;
  padding: 14px 14px 14px 0;
  border-radius: 12px;
  background-color: ${colors.bgc_third};
  color: ${colors.color_text_first};
  border: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
  text-align: left;
  &[name='name'] {
    padding-left: 59px;
  }
  &[name='email'] {
    padding-left: 49px;
  }
  &[name='password'] {
    padding-left: 78px;
  }
  &.error {
    border: 1px solid rgb(233, 5, 22);
  }
  &.success {
    border: 1px solid rgb(48, 185, 77);
  }
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const WrapLabel = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  left: 14px;
  top: 14px;
  color: ${colors.color_text_label};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.24px;
  z-index: 1;

  text-align: start;
`;

export const EyeIcon = styled.svg``;
export const EyeOffIcon = styled.svg``;

export const EyeBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 16px;
  background: none;
  border: none;
`;
export const SubmitBtn = styled.button`
  border-radius: 30px;
  background: rgb(249, 249, 249);
  color: rgb(31, 31, 31);
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.22px;
  padding: 12px 29px 12px 29px;
  border: none;
  margin-right: 14px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.2);

    background: transparent;
    color: ${colors.color_text_first};
  }
  &:focus {
    border: 1px solid rgba(249, 249, 249, 0.2);
    background: transparent;
    color: ${colors.color_text_first};
  }
`;

export const LoginLink = styled(Link)`
  color: ${colors.color_text_label};
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  text-align: left;
  text-decoration-line: underline;
`;

export const SectionHero = styled.section`
  width: 100%;
  height: 351px;
  overflow: hidden;
  border-radius: 30px;
  background: ${colors.bgc_second};
  padding: 20px 40px 0 40px;
`;
export const ImgHero = styled.img``;

export const ErrorMsg = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  color: rgb(233, 5, 22);
  margin-top: 8px;
`;
