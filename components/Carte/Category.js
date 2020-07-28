import React, {useEffect, useState, useCallback} from 'react';
import {Text, StyleSheet, Image, Pressable, View, Animated} from 'react-native';
import SkeletonGradient from '../SkeletonGradient';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Category = ({
  name,
  onPress,
  isActive = false,
  url,
  loading = true,
  index = 0,
}) => {
  const [anim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (!loading) {
      const animation = Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });

      setTimeout(() => {
        animation.start();
      }, index * 80);
    }
  }, [loading, anim, index]);

  if (loading) {
    return (
      <View style={styles.container}>
        <SkeletonGradient style={[styles.icon, styles.iconSkeleton]} />
        <SkeletonGradient style={styles.textSkeleton} />
      </View>
    );
  }

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
    extrapolate: 'clamp',
  });

  return (
    <AnimatedPressable
      style={[
        styles.container,
        isActive ? styles.activeContainer : null,
        {transform: [{translateY: offset}], opacity: anim},
      ]}
      onPress={onPress}>
      <Image
        style={styles.icon}
        source={{
          uri: url,
        }}
      />
      <Text style={styles.text}>{name}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    borderColor: '#e76b2d',
    borderWidth: 2,
    shadowOpacity: 0.4,
  },
  container: {
    width: 120,
    height: 180,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  iconSkeleton: {
    backgroundColor: '#e3e3e3',
    borderRadius: 25,
  },
  text: {
    fontWeight: 'bold',
  },
  textSkeleton: {
    backgroundColor: '#e3e3e3',
    color: '#e3e3e3',
    width: '100%',
    height: 15,
  },
});

export default Category;
