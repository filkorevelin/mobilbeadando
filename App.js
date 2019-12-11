
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/HomeScreen';
import Profil from './src/ProfileScreen';
import Szoveg from './src/TextScreen';
import Szamlalo from './src/CounterScreen';
import Input from './src/InputScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profil,
  text: {screen: Szoveg},
  counter: {screen: Szamlalo},
  input: {screen: Input},
});

export default App = createAppContainer(MainNavigator);
