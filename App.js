import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [state, setState] = useState(0)

  const onPress = () => {
    setState(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {state} times</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.navigationMenu}>Home</Text>
        <Text style={styles.navigationMenu}>Promo</Text>
        <Text style={styles.navigationMenu}>Scan</Text>
        <Text style={styles.navigationMenu}>History</Text>
        <Text style={styles.navigationMenu}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#A1A1A1',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#818181',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  navigationMenu: {
    paddingHorizontal: 10,
    fontSize: 16
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
