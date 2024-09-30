import React from 'react';
import { COLOR } from '../constants/Color';
import styled from 'styled-components/native';

type ButtonPropsTypes = {
  type: string;
  text: string;
  onPress: () => void;
  flex: number;
  isSelected: boolean;
};

type TouchButtonPropTypes = {
  flex: number;
  backgroundColor: string;
  isSelected: boolean;
};

const TouchButton = styled.TouchableOpacity<TouchButtonPropTypes>`
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.backgroundColor};
  align-items: center;
  justify-content: center;
  height: 80px;
  border-width: ${(props) => (props.isSelected ? 1 : 0.2)}px;
  border-color: #000;
`;

const Text = styled.Text`
  font-size: 40px;
  color: #fff;
`;

const Button = ({
  type,
  text,
  onPress,
  flex,
  isSelected,
}: ButtonPropsTypes) => {
  const backgroundColor =
    type === 'reset'
      ? COLOR.RESET
      : type === 'operator'
      ? COLOR.OPERATOR
      : type === 'num'
      ? COLOR.NUM
      : type === 'result'
      ? COLOR.RESULT
      : 'transparent';

  return (
    <TouchButton
      flex={flex}
      backgroundColor={backgroundColor}
      isSelected={isSelected}
      onPress={onPress}>
      <Text>{text}</Text>
    </TouchButton>
  );
};

export default Button;
