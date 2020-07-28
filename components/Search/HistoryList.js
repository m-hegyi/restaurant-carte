import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const history = ['Magyaros pizza', 'Gyros', 'Hamburger'];

const HistoryList = ({containerStyle, iconStyle, textStyle}) => {
  return (
    <>
      {history.map((item, index) => (
        <View style={containerStyle} key={index}>
          <Icon name="history" size={18} color="#999" style={iconStyle} />
          <Text style={textStyle}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default HistoryList;
