import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HistoryList from './HistoryList';

const SearchScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <View style={styles.container}>
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Keresés"
                style={styles.input}
                onChangeText={setSearch}
                value={search}
              />
            </View>
            {search.length === 0 ? (
              <HistoryList
                containerStyle={styles.resultContainer}
                iconStyle={styles.resultIcon}
                textStyle={styles.resultText}
              />
            ) : null}
          </View>
          <Button onPress={() => navigation.goBack()} title="Mégse" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 10,
    borderColor: '#999',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  input: {
    padding: 20,
    fontSize: 18,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#a3a3a3',
  },
  resultIcon: {
    width: 40,
    marginRight: 10,
  },
  resultText: {
    color: '#666',
    fontSize: 16,
  },
});

export default SearchScreen;
