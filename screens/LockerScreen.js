import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Icon, Image } from 'react-native-elements';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to your Locker</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
    <View style={{ alignItems: 'center', margin: 10 }}>
      <Icon
        type="material-community"
        name="airplane"
        size={80}
        color={selected ? 'blue' : 'gray'}
        onPress={onPress}
      />
      {selected && (
        <Image source={checkIcon} style={{ position: 'absolute', top: -10, right: -10, width: 20, height: 20 }} />
      )}
    </View>
  );
};

export default LockerScreen;




