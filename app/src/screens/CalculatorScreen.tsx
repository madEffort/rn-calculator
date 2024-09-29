import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { ButtonPropsTypes } from './button.types';
import { COLOR } from '../constants/Color';
import styled from 'styled-components/native';

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

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const InputContainer = styled.View`
  background-color: ${COLOR.RESULT};
  flex: 1;
  min-height: 50px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 10px 3px 5px;
`;

export default () => {
  const [input, setInput] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [tempInput, setTempInput] = useState<number | null>(null);
  const [tempOperator, setTempOperator] = useState<string | null>(null);
  const [isClickedOperator, setIsClickedOperator] = useState<boolean>(false);
  const [isClickedEqual, setIsClickedEqual] = useState<boolean>(false);

  const hasInput = input ? true : false;

  const onPressNum = (num: number) => {
    if (currentOperator && isClickedOperator) {
      setResult(+input);
      setInput(num);
      setIsClickedOperator(false);
    } else {
      const newInput = '' + input + num;
      setInput(+newInput);
    }
  };

  const onPressOperator = (operator: string) => {
    if (operator !== '=') {
      setCurrentOperator(operator);
      setIsClickedOperator(true);
      setIsClickedEqual(false);
    } else {
      let finalResult = result;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;
      switch (finalOperator) {
        case '/':
          finalResult = Number(result) / Number(finalInput);
          break;
        case '*':
          finalResult = Number(result) * Number(finalInput);
          break;
        case '-':
          finalResult = Number(result) - Number(finalInput);
          break;
        case '+':
          finalResult = Number(result) + Number(finalInput);
          break;
        default:
          break;
      }
      setResult(Number(finalResult));
      setInput(Number(finalResult));
      setTempInput(finalInput);
      setTempOperator(finalOperator);
      setCurrentOperator(null);
      setIsClickedEqual(true);
    }
  };

  const onPressConvert = (type: string) => {
    switch (type) {
      case '+/-':
        setInput(-1 * input);
        setResult(-1 * Number(result));
        break;
      case '%':
        setInput(0.01 * input);
        setResult(0.01 * Number(result));
        break;
      default:
        break;
    }
  };

  const onPressReset = () => {
    if (hasInput) {
      setInput(0);
    } else {
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <InputContainer>
        <Text style={{ color: '#fff', fontSize: 50, textAlign: 'right' }}>
          {input}
        </Text>
      </InputContainer>

      <ButtonContainer>
        <Button
          type="reset"
          text={hasInput ? 'C' : 'AC'}
          onPress={onPressReset}
          flex={1}
          isSelected={false}
        />
        <Button
          type="reset"
          text="±"
          onPress={() => onPressConvert('+/-')}
          flex={1}
          isSelected={currentOperator === '+/-'}
        />
        <Button
          type="reset"
          text="%"
          onPress={() => onPressConvert('%')}
          flex={1}
          isSelected={currentOperator === '%'}
        />
        <Button
          type="operator"
          text="÷"
          onPress={() => onPressOperator('/')}
          flex={1}
          isSelected={currentOperator === '/'}
        />
      </ButtonContainer>
      <ButtonContainer>
        {[7, 8, 9].map(num => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
            isSelected={false}
          />
        ))}
        <Button
          type="operator"
          text="×"
          onPress={() => onPressOperator('*')}
          flex={1}
          isSelected={currentOperator === '*'}
        />
      </ButtonContainer>
      <ButtonContainer>
        {[4, 5, 6].map(num => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
            isSelected={false}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator('-')}
          flex={1}
          isSelected={currentOperator === '-'}
        />
      </ButtonContainer>
      <ButtonContainer>
        {[1, 2, 3].map(num => (
          <Button
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
            key={num}
            isSelected={false}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator('+')}
          flex={1}
          isSelected={currentOperator === '+'}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button
          type="num"
          text="0"
          onPress={() => onPressNum(0)}
          flex={3}
          isSelected={false}
        />
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator('=')}
          flex={1}
          isSelected={false}
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};
