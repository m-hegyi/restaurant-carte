import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = ({onPress}) => {
  const translateX = useRef(new Animated.Value(-500)).current;

  const transformIn = () => {
    translateX.setValue(-500);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      ease: Easing.ease,
    }).start(() => {
      onPress();
      setTimeout(() => {
        transformOut();
      }, 1000);
    });
  };

  const transformOut = () => {
    translateX.setValue(-500);
  };

  return (
    <Pressable style={styles.container} onPress={transformIn}>
      <View style={styles.iconContainer}>
        <Icon name="search" color="#999" size={18} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.placeholder}>Kereső</Text>
        <Animated.View style={[styles.line, {transform: [{translateX}]}]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1,
    marginLeft: 5,
    position: 'relative',
    overflow: 'hidden',
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#e76b2d',
    width: '100%',
  },
  placeholder: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#c3c3c3',
    paddingBottom: 5,
  },
});

export default Search;
