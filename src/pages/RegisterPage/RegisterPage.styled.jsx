import { colors } from '../../constats';
import styled from 'styled-components';

export const WrapRegisterPage = styled.div`
  max-width: 375px;
  background-color: ${colors.bgc_first};
  @media only screen and (min-width: 375px) {
    width: 100%;
    padding: 20px 20px;
  }
`;
