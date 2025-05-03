// App.js
import React, { useEffect, useState } from 'react';
import { AppState, Image, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { ThemeProvider, useTheme } from './theme/themeContext';
import splashLogo from './App/assets/images/splash_logo.png';
import { CONTENT } from './App/constants/content';
import createStore from './App/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import network from './App/services/network';

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    toggleTheme();
  };
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 6, justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.background },
    splashlogo: {height: 106, width:144,resizeMode:'contain'},
    subText: {fontFamily: theme.fontFamily.medium, fontSize: theme.fonts.subtitle2, color: theme.colors.secondary.light}
  })
  return (
    <View style={styles.container}>
      <Switch value={isSwitchOn}  onValueChange={onToggleSwitch} style={{height: 50,width: 50,alignSelf:'flex-end'}} />
      <Image source={splashLogo} style={styles.splashlogo}/>
      <Text style={styles.subText}>{CONTENT.splashSubText}</Text>
    </View>
  );
};

const App = () => {
  const { store, persistor } = createStore();
  network.setupInterceptors(store);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate persistor={persistor}>
          <MainApp />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
