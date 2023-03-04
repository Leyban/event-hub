import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import arrowRight from './../images/icons/ArrowRight.png';

interface PrimaryButtonNextProps {
  text: string;
  onPress?: () => void;
}

const PrimaryButtonNext = ({text, onPress}: PrimaryButtonNextProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image source={arrowRight} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default PrimaryButtonNext;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5669FF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    margin: 35,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  arrow: {
    position: 'absolute',
    right: 20,
  },
});
