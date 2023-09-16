import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const bluePlaneIcon = require('../assets/images/bluePlane.png');
const redPlaneIcon = require('../assets/images/redPlane.png');
const purplePlaneIcon = require('../assets/images/purplePlane.png');
const checkIcon = require('../assets/images/checkIcon.png'); // Replace with the path to your checkmark icon

const LockerScreen = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(bluePlaneIcon); // Initial icon selection

  const navigateToHome = () => {
    navigation.goBack(); // Go back to the previous screen, which is the "Home" screen
  };

  const changeIcon = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to your Locker</Text>

      <View style={styles.iconContainer}>
        <TouchableIcon
          icon={bluePlaneIcon}
          onPress={() => changeIcon(bluePlaneIcon)}
          selected={selectedIcon === bluePlaneIcon}
        />
        <TouchableIcon
          icon={redPlaneIcon}
          onPress={() => changeIcon(redPlaneIcon)}
          selected={selectedIcon === redPlaneIcon}
        />
        <TouchableIcon
          icon={purplePlaneIcon}
          onPress={() => changeIcon(purplePlaneIcon)}
          selected={selectedIcon === purplePlaneIcon}
        />
      </View>

      <Button title="Home" onPress={navigateToHome} />
    </View>
  );
};

const TouchableIcon = ({ icon, onPress, selected }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={[styles.icon, selected && styles.selectedIcon]} />
        {selected && (
          <TouchableWithoutFeedback onPress={onPress}>
            <Image source={checkIcon} style={styles.checkIcon} />
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    margin: 10,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  selectedIcon: {
    borderColor: 'blue', // Change the color to indicate the selected icon
    borderWidth: 2,
  },
  checkIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
  },
});

export default LockerScreen;






