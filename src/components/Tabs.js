import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
});



const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            style={styles.container}
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerStyles: {
                    backgroundColor: 'tomato',
                },
            }}
        >
            <Tab.Screen name="Current" options={{
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name="water" color={focused ? 'tomato' : 'black'} size={30} />
                ),
            }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen name="Upcoming Weather" component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="cloud" color={focused ? 'tomato' : 'black'} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="City" component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5 name="city" color={focused ? 'tomato' : 'black'} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default Tabs;