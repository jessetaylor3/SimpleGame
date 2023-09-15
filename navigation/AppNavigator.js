import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen'; // Make sure you import GameScreen correctly
import LockerScreen from '../screens/LockerScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    Locker: LockerScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
