import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import OB1 from '../images/OB1.png';
import OB2 from '../images/OB2.png';
import OB3 from '../images/OB3.png';
import {useNavigation} from '@react-navigation/native';
import {useSwipe} from '../hooks/useSwipe';

const Onboarding = () => {
  const [view, setView] = useState(1);
  const {navigate} = useNavigation();
  const dotOpacity1 = useRef(new Animated.Value(1)).current;
  const dotOpacity2 = useRef(new Animated.Value(0.6)).current;
  const dotOpacity3 = useRef(new Animated.Value(0.6)).current;

  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, 6);

  function onSwipeLeft() {
    handleNext();
  }

  function onSwipeRight() {
    handleBack();
  }

  const handleBack = () => {
    if (view === 3) {
      setView(view - 1);
      fadeInOut(dotOpacity3, dotOpacity2);
    } else if (view === 2) {
      setView(view - 1);
      fadeInOut(dotOpacity2, dotOpacity1);
    }
  };

  const handleNext = () => {
    if (view === 3) {
      navigate('SignIn');
    } else if (view === 1) {
      setView(view + 1);
      fadeInOut(dotOpacity1, dotOpacity2);
    } else if (view === 2) {
      setView(view + 1);
      fadeInOut(dotOpacity2, dotOpacity3);
    }
  };

  const fadeInOut = (fadeOut: Animated.Value, fadeIn: Animated.Value) => {
    Animated.sequence([
      Animated.timing(fadeOut, {
        toValue: 0.6,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const size = (animateValue: Animated.Value) =>
    animateValue.interpolate({
      inputRange: [0.6, 1],
      outputRange: [6, 8],
    });

  const popup = (animateValue: Animated.Value) =>
    animateValue.interpolate({
      inputRange: [0.6, 1],
      outputRange: [10, 0],
    });

  const appear = (animateValue: Animated.Value) =>
    animateValue.interpolate({
      inputRange: [0.6, 1],
      outputRange: [0, 1],
    });

  return (
    <SafeAreaView
      style={styles.container}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <Animated.Image
        source={OB1}
        style={[
          styles.phone,
          view !== 1 && styles.hidden,
          {
            opacity: appear(dotOpacity1),
            transform: [{translateY: popup(dotOpacity1)}],
          },
        ]}
      />

      <Animated.Image
        source={OB2}
        style={[
          styles.phone,
          view !== 2 && styles.hidden,
          {
            opacity: appear(dotOpacity2),
            transform: [{translateY: popup(dotOpacity2)}],
          },
        ]}
      />
      <Animated.Image
        source={OB3}
        style={[
          styles.phone,
          view !== 3 && styles.hidden,
          {
            opacity: appear(dotOpacity3),
            transform: [{translateY: popup(dotOpacity3)}],
          },
        ]}
      />
      <View style={styles.blueThing}>
        <Text style={[styles.title, view !== 1 && styles.hidden]}>
          Explore Upcoming and Nearby Events
        </Text>
        <Text style={[styles.title, view !== 2 && styles.hidden]}>
          Web Have Modern Events Calendar Feature
        </Text>
        <Text style={[styles.title, view !== 3 && styles.hidden]}>
          To Look Up More Events or Activities Nearby By Map
        </Text>
        <Text style={styles.description}>
          In publishing and graphic design, Lorem is a placeholder text commonly
        </Text>
        <View style={styles.navigation}>
          <Text style={styles.skip} onPress={() => navigate('SignIn')}>
            Skip
          </Text>
          <View style={styles.dotContainer}>
            <Animated.View
              style={[
                styles.dotInactive,
                {
                  opacity: dotOpacity1,
                  width: size(dotOpacity1),
                  height: size(dotOpacity1),
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dotInactive,
                {
                  opacity: dotOpacity2,
                  width: size(dotOpacity2),
                  height: size(dotOpacity2),
                },
              ]}
            />
            <Animated.View
              style={[
                styles.dotInactive,
                {
                  opacity: dotOpacity3,
                  width: size(dotOpacity3),
                  height: size(dotOpacity3),
                },
              ]}
            />
          </View>
          <Text style={styles.next} onPress={handleNext}>
            Next
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  phone: {
    marginTop: 20,
  },
  blueThing: {
    paddingVertical: 40,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#5669FF',
    borderTopEndRadius: 48,
    borderTopStartRadius: 48,
  },
  title: {
    fontSize: 17,
    color: 'white',
    paddingHorizontal: 60,
    textAlign: 'center',
    lineHeight: 28,
  },
  description: {
    fontSize: 12,
    paddingTop: 10,
    color: 'white',
    opacity: 0.6,
    paddingHorizontal: 30,
    textAlign: 'center',
    lineHeight: 23,
  },
  navigation: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skip: {
    fontSize: 15,
    color: 'white',
    opacity: 0.6,
  },
  next: {
    fontSize: 15,
    color: 'white',
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  dotInactive: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  dotActive: {
    opacity: 1,
  },
  hidden: {
    display: 'none',
  },
});
