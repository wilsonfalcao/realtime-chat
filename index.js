import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

//Funções e variáveis globais (ainda sem usar redux)
import "./src/controllers/functions/globalFunctions";

global.initialDate=Date.now();

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
