import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import back from './../images/icons/Back.png';
import PrimaryButtonNext from '../components/PrimaryButtonNext';
import bg from '../images/SplashScreen.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import VerificationInput from '../components/VerificationInput';

const Verification = () => {
  const {navigate} = useNavigation();
  const [code, setCode] = useState('xxxx');
  const [timeLeft, setTimeLeft] = useState<any>({
    minutes: 0,
    seconds: 5,
  });

  const desplaySeconds =
    String(timeLeft.seconds).length === 1
      ? `0${timeLeft.seconds}`
      : timeLeft.seconds;

  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const email = 'abc@email.com';

  const handleInput = (val: string, index: number) => {
    if (/[0-9]/.test(val)) {
      switch (index) {
        case 1:
          input2.current?.focus();
          setCode(`${val}${code.substring(1, 4)}`);
          break;
        case 2:
          input3.current?.focus();
          setCode(`${code.substring(0, 1)}${val}${code.substring(2)}`);
          break;
        case 3:
          input4.current?.focus();
          setCode(`${code.substring(0, 2)}${val}${code.substring(3)}`);
          break;
        case 4:
          input4.current?.blur();
          setCode(`${code.substring(0, 3)}${val}`);
          break;
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft.seconds === 0) {
        if (timeLeft.minutes === 0) {
          clearInterval(intervalId);
        } else {
          setTimeLeft({
            minutes: timeLeft.minutes - 1,
            seconds: 59,
          });
        }
      } else {
        setTimeLeft({
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds - 1,
        });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  console.log(code);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="stretch" style={styles.bg} />
      <Pressable style={styles.back} onPress={() => navigate('SignUp')}>
        <Image source={back} />
      </Pressable>
      <Text style={styles.verificationLabel}>Verification</Text>
      <Text style={styles.verificationText}>
        We've send you the verification
      </Text>
      <Text style={[styles.verificationText, {paddingTop: 5}]}>
        code on {email}
      </Text>
      <View style={styles.inputContainer}>
        <VerificationInput
          handleInput={handleInput}
          index={1}
          inputRef={input1}
        />
        <VerificationInput
          handleInput={handleInput}
          index={2}
          inputRef={input2}
        />
        <VerificationInput
          handleInput={handleInput}
          index={3}
          inputRef={input3}
        />
        <VerificationInput
          handleInput={handleInput}
          index={4}
          inputRef={input4}
        />
      </View>
      <PrimaryButtonNext text="CONTINUE" onPress={() => {}} />
      <View style={styles.resendTextContainer}>
        {timeLeft.seconds || timeLeft.minutes ? (
          <>
            <Text>Re-send code in</Text>
            <Text style={{color: '#5669FF'}}>
              {timeLeft.minutes}:{desplaySeconds}
            </Text>
          </>
        ) : (
          <TouchableOpacity onPress={() => {}} style={styles.resendButton}>
            <Text style={{color: '#333'}}>Resend code</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bg: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  back: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  verificationLabel: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
    width: 200,
  },
  verificationText: {
    color: '#333',
    paddingLeft: 20,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  resendTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
  },
  resendText: {
    color: '#333',
  },
  resendButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flex: 1,
    marginHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
