import {Animated, Pressable, StyleSheet, ViewStyle} from 'react-native';
import React, {useRef} from 'react';

interface ToggleSwitchProps {
  toggle: boolean;
  toggler: () => void;
  containerStyles?: ViewStyle;
  circleStyles?: ViewStyle;
}

const ToggleSwitch = ({
  toggle,
  toggler,
  containerStyles,
  circleStyles,
}: ToggleSwitchProps) => {
  const translateX = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    if (toggle) {
      Animated.timing(translateX, {
        toValue: 0,
        useNativeDriver: false,
        duration: 200,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: 13,
        useNativeDriver: false,
        duration: 200,
      }).start();
    }
    toggler();
  };

  return (
    <Pressable onPress={handleToggle}>
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: translateX.interpolate({
              inputRange: [0, 13],
              outputRange: ['#bbb', '#3D56F0'],
            }),
          },
          containerStyles,
        ]}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX: translateX,
                },
              ],
            },
            circleStyles,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D56F0',
    width: 29,
    height: 16,
    borderRadius: 10,
    padding: 2,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  containerGray: {
    backgroundColor: 'gray',
  },
});
