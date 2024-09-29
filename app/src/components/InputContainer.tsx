import styled from 'styled-components/native';
import { COLOR } from '../constants/Color';

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  flex: 1;
  min-height: 50px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 10px 3px 5px;
`;

export default InputContainer;
