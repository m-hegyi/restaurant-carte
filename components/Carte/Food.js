import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Animated} from 'react-native';
import SkeletonGradient from '../SkeletonGradient';

const Food = ({food, loading = false, index = 0}) => {
  const [anim] = useState(new Animated.Value(0));
  const [descOpen, setDescOpen] = useState(false);
  const [textOverflow, setTextOverflow] = useState(false);

  const onTextLayout = (e) => {
    if (e.nativeEvent.lines.length > 3) {
      setTextOverflow(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      const animation = Animated.timing(anim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });

      setTimeout(() => {
        animation.start();
      }, index * 100 + 100);
    }
  }, [loading, anim, index]);

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
    extrapolate: 'clamp',
  });

  if (loading) {
    return (
      <Animated.View style={[styles.container, styles.fixedHeight]}>
        <View style={[styles.titleContainer, styles.titleSkeletonContainer]}>
          <SkeletonGradient style={styles.titleSkeleton} />
        </View>
        <View style={styles.descContainer}>
          <View style={styles.skeletonContainer}>
            <SkeletonGradient style={styles.descSkeleton} />
          </View>
          <View style={styles.skeletonContainer}>
            <SkeletonGradient style={styles.descSkeleton} />
          </View>
          <View style={styles.skeletonContainer}>
            <SkeletonGradient style={styles.descSkeleton} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.priceContainer} />
          <View style={[styles.btnContainer, styles.inactiveBtnContainer]} />
        </View>
        <View style={[styles.imgContainer, styles.imgSkeletonContainer]}>
          <SkeletonGradient style={styles.img} />
        </View>
      </Animated.View>
    );
  }

  const {subcategories} = food;

  return (
    <Animated.View
      style={[
        styles.container,
        descOpen && textOverflow ? null : styles.fixedHeight,
        {transform: [{translateX: offset}], opacity: anim},
      ]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{food.name}</Text>
      </View>
      <Pressable
        style={styles.descContainer}
        onPress={() => setDescOpen(!descOpen)}>
        <Text
          style={[
            styles.description,
            descOpen && textOverflow ? styles.descPadding : null,
          ]}
          numberOfLines={textOverflow && !descOpen ? 3 : null}
          onTextLayout={onTextLayout}>
          {food.ingredients.join(', ')}
        </Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{subcategories[0].price} Ft</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.btn}>Megtekintem</Text>
        </View>
      </View>
      <View style={[styles.imgContainer, styles.imgContainerShadow]}>
        <Image
          source={{
            uri: food.url,
          }}
          style={styles.img}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fixedHeight: {
    height: 190,
  },
  container: {
    position: 'relative',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    marginBottom: 50,
    flex: 1,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
  titleContainer: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  titleSkeletonContainer: {
    backgroundColor: '#e3e3e3',
    width: '50%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  titleSkeleton: {
    height: 22,
  },
  descContainer: {
    paddingHorizontal: 15,
  },
  descSkeleton: {
    height: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  descPadding: {
    paddingTop: 23,
  },
  bottomContainer: {
    height: 40,
    flexDirection: 'row',
  },
  priceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e76b2d',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  inactiveBtnContainer: {
    backgroundColor: '#e3e3e3',
  },
  btn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  imgContainer: {
    position: 'absolute',
    right: 20,
    top: -40,
  },
  imgSkeletonContainer: {
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
  },
  imgContainerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  skeletonContainer: {
    width: '100%',
    backgroundColor: '#e3e3e3',
    marginBottom: 4,
  },
});

export default Food;
