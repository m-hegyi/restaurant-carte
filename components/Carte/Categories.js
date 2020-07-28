import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import Category from './Category';

const Categories = ({
  categories,
  activeCategory,
  setActiveCategory,
  loading = false,
}) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kategóriák</Text>
        <ScrollView
          horizontal
          scrollEnabled={false}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}>
          {[0, 1, 2].map((value) => (
            <Category key={value} loading />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategóriák</Text>
      <ScrollView
        scrollEnabled
        horizontal
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Category
            key={category.id}
            name={category.name}
            url={category.url}
            onPress={() => setActiveCategory(index)}
            isActive={activeCategory == index}
            loading={false}
            index={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

export default Categories;
