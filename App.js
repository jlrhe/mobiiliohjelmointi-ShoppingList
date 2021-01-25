import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const addToList = () => setShoppingList([...shoppingList, input]);
  const clear = () => setShoppingList([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          onChangeText={input => setInput(input)}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={addToList} title='ADD'></Button>
        <Button onPress={clear} title='CLEAR'></Button>
      </View>
      <Text style={styles.header}>Shopping List</Text>
      <View style={styles.listContainer}>
        
        <FlatList
          data={shoppingList}
          renderItem={({item}) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'blue',
    fontSize: 20,
    fontWeight : 'bold',
  },
  inputContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  listContainer: {
    flex: 7,
  },
  listItem: {
    fontSize: 15,
  },
});
