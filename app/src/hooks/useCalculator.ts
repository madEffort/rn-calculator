import { useState } from 'react';

export const useCalculator = () => {
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

  return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressConvert,
    onPressOperator,
    onPressReset,
  };
};

export default useCalculator;
