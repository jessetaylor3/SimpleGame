import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const bluePlaneIcon = require('../assets/images/bluePlane.png');
const redPlaneIcon = require('../assets/images/redPlane.png');
const purplePlaneIcon = require('../assets/images/purplePlane.png');

const LockerScreen = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(bluePlaneIcon); // Initial icon selection

  const startGame = () => {
    // Navigate to the GameScreen and pass the selected icon as a parameter
    navigation.navigate('Game', { selectedIcon });
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

      <TouchableOpacity style={styles.startButton} onPress={startGame}>
        <Text>Play Game</Text>
      </TouchableOpacity>

      {/* Home link */}
      <TouchableOpacity style={styles.homeLink} onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const TouchableIcon = ({ icon, onPress, selected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image source={icon} style={[styles.icon, selected && styles.selectedIcon]} />
      </View>
    </TouchableOpacity>
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
  startButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  homeLink: {
    marginTop: 20,
  },
});

export default LockerScreen;









