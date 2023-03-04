import {Image, StyleSheet} from 'react-native';
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
      <Image source={bg} style={styles.bg} />
      <Image source={logo} />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    flex: 1,
  },
});
