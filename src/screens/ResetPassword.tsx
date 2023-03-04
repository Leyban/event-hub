import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import back from './../images/icons/Back.png';
import PrimaryButtonNext from '../components/PrimaryButtonNext';
import bg from '../images/SplashScreen.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import mail from './../images/icons/Mail.png';

const ResetPassword = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="stretch" style={styles.bg} />
      <Pressable style={styles.back} onPress={() => navigate('SignIn')}>
        <Image source={back} />
      </Pressable>
      <Text style={styles.resetLabel}>Reset Password</Text>
      <Text style={styles.resetText}>Please enter your email address to</Text>
      <Text style={[styles.resetText, {paddingTop: 5}]}>
        request a password reset
      </Text>
      <View style={styles.inputContainer}>
        <Image source={mail} />
        <TextInput placeholder="abc@email.com" textContentType="emailAddress" />
      </View>
      <PrimaryButtonNext text="SEND" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default ResetPassword;

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
  resetLabel: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
  },
  resetText: {
    color: '#333',
    paddingLeft: 20,
    paddingTop: 20,
  },
  inputContainer: {
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 15,
    borderRadius: 12,
    margin: 20,
    marginBottom: 0,
  },
});
