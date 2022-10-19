import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from '@expo-google-fonts/mulish';
import Main from './src/screens/home/Main';
import Provider from './src/contexts/ProviderTips';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mulish-Bold': require('./assets/fonts/Mulish-Bold.ttf'),
    'Mulish-Regular': require('./assets/fonts/Mulish-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider>
    <View style={styles.container}>
      <Main />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
