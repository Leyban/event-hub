import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import google from './../images/google.png';
import facebook from './../images/facebook.png';

interface SocialLoginProps {
  questionText: string;
  actionText: string;
  action: () => void;
}

const SocialLogin = ({questionText, actionText, action}: SocialLoginProps) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 15}}>OR</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={google} />
        <Text style={styles.bigBlack}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image source={facebook} />
        <Text style={styles.bigBlack}>Login with Facebook</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', gap: 5}}>
        <Text style={styles.bigBlack}>{questionText}</Text>
        <Text style={[styles.bigBlack, {color: '#5669FF'}]} onPress={action}>
          {actionText}
        </Text>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 10,
    width: 300,
  },
  bigBlack: {
    color: '#222',
    fontSize: 15,
    letterSpacing: 0.6,
  },
});
