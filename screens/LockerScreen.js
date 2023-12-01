import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import DarkModeContext from '../systems/DarkModeContext';

const screenHeight = Dimensions.get('window').height;
const bluePlaneIcon = require('../assets/images/bluePlane.png');
const redPlaneIcon = require('../assets/images/redPlane.png');
const purplePlaneIcon = require('../assets/images/purplePlane.png');

const LockerScreen = ({ navigation }) => {
  // Use index for planes
  const [selectedPlaneIndex, setSelectedPlaneIndex] = useState(1);
  const { isDarkMode } = React.useContext(DarkModeContext);

  const startGame = () => {
    console.log('Selected Plane Index:', selectedPlaneIndex); // Add this log
    navigation.navigate('Game', { selectedPlaneIndex: selectedPlaneIndex });
  };

  const changePlane = (planeIndex) => {
    setSelectedPlaneIndex(planeIndex);
  };

  // Dynamic background image based on theme mode
  const backgroundImage = isDarkMode ? require('../assets/images/darkSettings.png') : require('../assets/images/SettingScreen.jpg');
  
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={[styles.lockerTitle, isDarkMode && styles.whiteText]}>Locker</Text>

        <View style={styles.iconContainer}>
          <TouchableIcon
            icon={bluePlaneIcon}
            onPress={() => changePlane(1)}
            selected={selectedPlaneIndex === 1}
          />
          <TouchableIcon
            icon={redPlaneIcon}
            onPress={() => changePlane(2)}
            selected={selectedPlaneIndex === 2}
          />
          <TouchableIcon
            icon={purplePlaneIcon}
            onPress={() => changePlane(3)}
            selected={selectedPlaneIndex === 3}
          />
        </View>

        <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]} onPress={startGame}>
          <Text>Play Game</Text>
        </TouchableOpacity>

        {/* Home link */}
        <TouchableOpacity style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]} onPress={() => navigation.navigate('Home')}>
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
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    top: screenHeight * 0.1,
  },
  iconContainer: {
    marginTop: 110,
    flexDirection: 'column',
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
  whiteText: {
    color: 'white',
  },
  lightButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  darkButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});

export default LockerScreen;

