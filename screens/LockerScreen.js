// LockerScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LockerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Locker Screen</Text>
      {/* Add your locker content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LockerScreen;
