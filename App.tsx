import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./store";
import HomeScreen from './screens/HomeScreen';

// 1) set up redux


const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>

  );
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
