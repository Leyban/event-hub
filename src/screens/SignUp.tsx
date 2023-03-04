import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import mail from './../images/icons/Mail.png';
import profile from './../images/icons/Profile.png';
import back from './../images/icons/Back.png';
import lock from './../images/icons/Password.png';
import hide from './../images/icons/Hide.png';
import view from './../images/icons/View.png';
import PrimaryButtonNext from '../components/PrimaryButtonNext';
import bg from '../images/SplashScreen.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialLogin from '../components/SocialLogin';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [hidden, setHidden] = useState(true);
  const [hiddenConfirm, setHiddenConfirm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'pink'}]}>
      <ImageBackground source={bg} resizeMode="stretch" style={styles.bg} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}>
        <Pressable style={styles.back} onPress={() => navigate('SignIn')}>
          <Image source={back} />
        </Pressable>
        <Text style={styles.signInLabel}>Sign up</Text>
        <View style={styles.inputContainer}>
          <Image source={profile} />
          <TextInput
            placeholder="Full name"
            textContentType="name"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={mail} />
          <TextInput
            placeholder="abc@email.com"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
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
        <View style={styles.inputContainer}>
          <Image source={lock} />
          <TextInput
            value={password}
            secureTextEntry={hidden}
            placeholder="Confirm password"
            style={styles.passwordInput}
            textContentType="password"
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setHiddenConfirm(!hiddenConfirm)}>
            {hiddenConfirm ? <Image source={hide} /> : <Image source={view} />}
          </TouchableOpacity>
        </View>
        <PrimaryButtonNext text="SIGN UP" />
        <SocialLogin
          questionText="Already have an account?"
          actionText="Sign in"
          action={() => navigate('SignIn')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    paddingHorizontal: 20,
    gap: 15,
    borderRadius: 12,
    margin: 20,
    marginBottom: 0,
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
