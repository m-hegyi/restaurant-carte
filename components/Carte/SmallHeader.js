import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SmallHeader = ({restaurantName = '', activeCategory = '', scrollY}) => {
  const opacity = scrollY.interpolate({
    inputRange: [0, 20, 50],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  const titleY = scrollY.interpolate({
    inputRange: [20, 90],
    outputRange: [70, 0],
    extrapolate: 'clamp',
  });

  const catY = scrollY.interpolate({
    inputRange: [390, 460],
    outputRange: [70, 0],
    extrapolate: 'clamp',
  });

  const offset = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [-40, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.mainContainer,
        {opacity, transform: [{translateY: offset}]},
      ]}>
      <SafeAreaView edges={['top']}>
        <View style={styles.container}>
          <View style={styles.back}>
            <Icon name="angle-left" size={18} color="#fff" />
            <Text style={styles.backTitle}>Vissza</Text>
          </View>
          <View>
            <Animated.Text
              style={[styles.name, {transform: [{translateY: titleY}]}]}
              numberOfLines={1}>
              {restaurantName}
            </Animated.Text>
            <Animated.Text
              style={[styles.category, {transform: [{translateY: catY}]}]}
              numberOfLines={1}>
              {activeCategory}
            </Animated.Text>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#e76b2d',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    height: 50,
  },
  back: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  backTitle: {
    paddingLeft: 5,
    paddingRight: 10,
    color: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SmallHeader;
