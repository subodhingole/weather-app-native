import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Header from './src/components/Header';
import { View } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <Header />
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

export default App;
