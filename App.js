import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import Header from './src/components/Header';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import { API_URL, API_TOKEN } from "@env"

const App = () => {
  useEffect(() => {

  }, [])
  const [isLoading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_TOKEN}`, {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      })
    });

  }, [location]);

  if (location) console.log(location.coords.latitude, location.coords.longitude);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer >
        <Header />
        {
          isLoading ? <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#0000ff" /> : <Tabs />
        }
      </NavigationContainer>
    </View>
  );
};

export default App;
