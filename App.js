
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/Home';
import Profil from './src/Profil';
import Szoveg from './src/Szoveg';
import Szamlalo from './src/Szamlalo';
import Input from './src/Input';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profil,
  text: {screen: Szoveg},
  counter: {screen: Szamlalo},
  input: {screen: Input},
});

export default App = createAppContainer(MainNavigator);
