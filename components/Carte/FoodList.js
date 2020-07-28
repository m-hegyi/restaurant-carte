import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Food from './Food';
import SkeletonGradient from '../SkeletonGradient';

const FoodList = ({foods = [], categoryName = '', loading = true}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <SkeletonGradient style={[styles.titleSkeleton]} />
        {[0, 1].map((value) => (
          <Food key={value} loading />
        ))}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      {foods.map((food, index) => (
        <Food key={food.id} food={food} index={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleSkeleton: {
    marginTop: 20,
    marginBottom: 20,
    height: 20,
    width: '50%',
    backgroundColor: '#e3e3e3',
  },
});

export default FoodList;
