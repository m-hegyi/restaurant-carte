import React, {useState, useRef, useEffect} from 'react';
import {Text, StyleSheet, ScrollView, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {carte} from '../../mocks/carte';

import Categories from './Categories';
import FoodList from './FoodList';
import Search from './Search';
import Header from './Header';
import SmallHeader from './SmallHeader';

const CarteScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [loading, setLoading] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;

  const {restaurantName, categories} = carte;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      <ScrollView
        scrollEnabled={!loading}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={1}>
        <SafeAreaView style={styles.container}>
          <Header onPress={() => setLoading(true)} />
          <Text style={styles.title}>{restaurantName}</Text>

          <Search onPress={() => navigation.navigate('Search')} />

          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            loading={loading}
          />

          <FoodList
            foods={categories[activeCategory].items}
            categoryName={categories[activeCategory].name}
            loading={loading}
          />
        </SafeAreaView>
      </ScrollView>
      <SmallHeader
        restaurantName={restaurantName}
        activeCategory={categories[activeCategory].name}
        scrollY={scrollY}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default CarteScreen;
