import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <AppNavigation />;
};

export default App;
