import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Animated, StyleSheet} from 'react-native';

Animated.AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const SkeletonGradient = ({style, children}) => {
  const [anim] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width + width / 2],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  });

  const onLayout = (e) => {
    const {width: w} = e.nativeEvent.layout;
    setWidth(w);
  };

  return (
    <View style={[style, styles.container]} onLayout={(e) => onLayout(e)}>
      <Animated.AnimatedGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        location={{}}
        colors={['#e3e3e3', '#eee', '#e3e3e3']}
        style={[styles.innerContainer, {transform: [{translateX: offset}]}]}>
        {children}
      </Animated.AnimatedGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  innerContainer: {
    flex: 1,
  },
});

export default SkeletonGradient;
