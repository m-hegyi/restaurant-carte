import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({onPress}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.backBtn} onPress={onPress}>
        <Icon name="angle-left" size={18} color="#333" />
      </Pressable>
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => setIsFavorite(!isFavorite)}
        activeOpacity={0.5}>
        <Icon solid={isFavorite} name="heart" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteBtn: {
    margin: 20,
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e76b2d',
  },
  backBtn: {
    margin: 20,
    width: 45,
    height: 45,
    borderRadius: 10,
    borderColor: '#999',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
