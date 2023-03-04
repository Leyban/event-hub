import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import logo from './../images/logoSolo.png';
import mail from './../images/icons/Mail.png';
import lock from './../images/icons/Password.png';
import hide from './../images/icons/Hide.png';
import view from './../images/icons/View.png';
import ToggleSwitch from '../components/ToggleSwitch';
import PrimaryButtonNext from '../components/PrimaryButtonNext';
import bg from '../images/SplashScreen.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialLogin from '../components/SocialLogin';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
      <ImageBackground source={bg} resizeMode="stretch" style={styles.bg} />

      <ScrollView
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
          <Text
            style={styles.forgotText}
            onPress={() => navigate('ResetPassword')}>
            Forgot Password?
          </Text>
        </View>
        <PrimaryButtonNext text="SIGN IN" onPress={() => {}} />
        <SocialLogin
          questionText={"Don't have and account?"}
          actionText={'Sign up'}
          action={() => navigate('SignUp')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 20,
  },
  inputContainer: {
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
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
});
