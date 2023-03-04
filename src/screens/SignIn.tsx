import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import logo from './../images/logoSolo.png';
import mail from './../images/icons/Mail.png';
import lock from './../images/icons/Password.png';
import hide from './../images/icons/Hide.png';
import view from './../images/icons/View.png';
import google from './../images/google.png';
import facebook from './../images/facebook.png';
import ToggleSwitch from '../components/ToggleSwitch';
import PrimaryButtonNext from '../components/PrimaryButtonNext';

const SignIn = () => {
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingVertical: 20}}>
      <Image source={logo} style={styles.companyLogo} />
      <Text style={styles.companyText}>EventHub</Text>

      <Text style={styles.signInLabel}>Sign in</Text>
      <View style={styles.inputContainer}>
        <Image source={mail} />
        <TextInput
          placeholder="abc@email.com"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={[styles.inputContainer, styles.passwordInputContainer]}>
        <Image source={lock} />
        <TextInput
          value={password}
          secureTextEntry={hidden}
          placeholder="Your password"
          style={styles.passwordInput}
          textContentType="password"
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setHidden(!hidden)}>
          {hidden ? <Image source={hide} /> : <Image source={view} />}
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <ToggleSwitch
          toggle={remember}
          toggler={() => setRemember(!remember)}
        />
        <Text style={styles.rememberText}>Remember Me</Text>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
      <View>
        <PrimaryButtonNext text="SIGN IN" />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15}}>OR</Text>
        <View style={styles.socialButton}>
          <Image source={google} />
          <Text style={styles.bigBlack}>Login with Google</Text>
        </View>
        <View style={styles.socialButton}>
          <Image source={facebook} />
          <Text style={styles.bigBlack}>Login with Facebook</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.bigBlack}>Don't have and account?</Text>
          <Text style={[styles.bigBlack, {color: '#5669FF'}]}>Sign up</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  companyLogo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  companyText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#444',
  },
  signInLabel: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  inputContainer: {
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    margin: 20,
  },
  passwordInputContainer: {
    marginTop: 0,
  },
  passwordInput: {
    flex: 1,
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  rememberText: {
    flex: 1,
    fontSize: 12,
    color: '#222',
    paddingLeft: 8,
  },
  forgotText: {
    fontSize: 12,
    color: '#222',
  },
  socialButton: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    padding: 20,
  },
  bigBlack: {
    color: '#222',
    fontSize: 15,
    letterSpacing: 0.6,
  },
});
