import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LockerScreen = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.goBack(); // Go back to the previous screen, which is the "Home" screen
  };

  return (
    <View style={styles.container}>
      <Text>This is the Locker Screen</Text>
      {/* Add your locker content here */}
      <Button title="Home" onPress={navigateToHome} />
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
