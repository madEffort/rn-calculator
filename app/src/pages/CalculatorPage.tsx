import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useCalculator } from '../hooks';
import { Button, InputContainer, ButtonContainer } from '../components';


const CalculatorPage = () => {

  const {input, currentOperator, hasInput,
        onPressNum, onPressConvert, onPressOperator, onPressReset} = useCalculator();

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
          <Button type="num"
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

export default CalculatorPage;
