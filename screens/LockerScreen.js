import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const bluePlaneIcon = require('../assets/images/bluePlane.png');
const redPlaneIcon = require('../assets/images/redPlane.png');
const purplePlaneIcon = require('../assets/images/purplePlane.png');

const LockerScreen = ({ navigation }) => {
  const [selectedIcon, setSelectedIcon] = useState(bluePlaneIcon);

  const startGame = () => {
    navigation.navigate('Game', { selectedPlane: selectedIcon });
  };

  const changeIcon = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <ImageBackground 
      source={require('../assets/images/lockerScreenAI.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.lockerTitle}>Welcome to your Locker</Text>

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
    </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    width: '100%', 
    height: '100%', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 150, 
  },
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
    borderColor: 'blue',
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









