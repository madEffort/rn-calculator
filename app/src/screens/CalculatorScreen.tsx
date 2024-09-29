import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { CalcButtonPropsTypes } from './calcButton.types';
import { COLOR } from '../constants/Color';
import styled from 'styled-components/native';

const CalcButton = (props: CalcButtonPropsTypes) => {
  const backgroundColor =
    props.type === 'reset'
      ? COLOR.RESET
      : props.type === 'operator'
      ? COLOR.OPERATOR
      : props.type === 'num'
      ? COLOR.NUM
      : props.type === 'result'
      ? COLOR.RESULT
      : 'transparent';

  return (
    <TouchableOpacity
      style={{
        flex: props.flex,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderWidth: 0.2,
        borderColor: '#000',
      }}>
      <Text style={{ color: '#fff', fontSize: 30 }}>{props.text}</Text>
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
  const [input, setInput] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [result, setResult] = useState(null);
  const [tempInput, setTempInput] = useState(null);
  const [tempOperator, setTempOperator] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <InputContainer>
        <Text style={{ color: '#fff', fontSize: 50, textAlign: 'right' }}>
          {input}
        </Text>
      </InputContainer>

      <ButtonContainer>
        <CalcButton type="reset" text="AC" onPress={() => {}} flex={3} />
        <CalcButton type="operator" text="÷" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <CalcButton type="num" text="7" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="8" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="9" onPress={() => {}} flex={1} />
        <CalcButton type="operator" text="×" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <CalcButton type="num" text="4" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="5" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="6" onPress={() => {}} flex={1} />
        <CalcButton type="operator" text="−" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <CalcButton type="num" text="1" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="2" onPress={() => {}} flex={1} />
        <CalcButton type="num" text="3" onPress={() => {}} flex={1} />
        <CalcButton type="operator" text="+" onPress={() => {}} flex={1} />
      </ButtonContainer>
      <ButtonContainer>
        <CalcButton type="num" text="0" onPress={() => {}} flex={3} />
        <CalcButton type="operator" text="=" onPress={() => {}} flex={1} />
      </ButtonContainer>
    </SafeAreaView>
  );
};
