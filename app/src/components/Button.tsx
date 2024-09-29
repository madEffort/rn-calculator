import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLOR } from '../constants/Color';

type ButtonPropsTypes = {
  type: string;
  text: string;
  onPress: () => void;
  flex: number;
  isSelected: boolean;
};

const Button = ({ type, text, onPress, flex, isSelected }: ButtonPropsTypes) => {
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
    <TouchableOpacity
      style={{
        flex: flex,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: '#000',
      }}
      onPress={onPress}>
      <Text style={{ color: '#fff', fontSize: 30 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
