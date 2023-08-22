import React from 'react';
import { StyleSheet, View } from 'react-native';
import Component from '../src';

const App = () => (
  <View style={styles.container}>
    <Component />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
