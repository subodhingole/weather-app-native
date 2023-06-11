import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Header from './src/components/Header';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from './src/hooks/useGetWeather';

const App = () => {
  const [isLoading, weather, errorMsg] = useGetWeather()

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <Header />
        {
          isLoading ? <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#0000ff" /> :
            <Tabs weather={weather} />
        }
      </NavigationContainer>
    </View>
  );
};

export default App;
