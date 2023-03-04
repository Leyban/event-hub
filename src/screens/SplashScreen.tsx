import {Image, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../images/logo.png';
import bg from '../images/SplashScreen.png';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = () => {
  const {navigate} = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate('Onboarding');
    }, 3000);
  }, [navigate]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="stretch" style={styles.bg} />
      <Image source={logo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
});
