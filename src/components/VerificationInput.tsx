import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

interface VerificationInputProps {
  handleInput: (val: string, index: number) => void;
  index: number;
  inputRef: React.RefObject<TextInput>;
}

const VerificationInput = ({
  handleInput,
  index,
  inputRef,
}: VerificationInputProps) => {
  const [num, setNum] = useState<string>();

  const [focus, setFocus] = useState(false);

  return (
    <TextInput
      textContentType="oneTimeCode"
      keyboardType="number-pad"
      ref={inputRef}
      placeholder={'–'}
      style={[styles.input, focus && {borderColor: '#5669FF'}]}
      value={focus ? undefined : num}
      caretHidden={true}
      onBlur={() => setFocus(false)}
      onFocus={() => {
        setFocus(true);
        setNum(undefined);
      }}
      onChangeText={val => {
        handleInput(val, index);
        setNum(val);
      }}
    />
  );
};

export default VerificationInput;

const styles = StyleSheet.create({
  input: {
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    width: 55,
    height: 55,
    fontSize: 24,
    paddingLeft: 21,
  },
});
