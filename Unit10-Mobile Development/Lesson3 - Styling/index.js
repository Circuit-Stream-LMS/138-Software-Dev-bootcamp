import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent registers <App /> as the root component of the app
// (it calls AppRegistry.registerComponent('main', () => App) for you).
// It works the same whether the app runs in Expo Go or in a native build.
registerRootComponent(App);
