import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import RowText from '../components/RowText';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'orange',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLow: {
        color: 'black',
        fontSize: 24,
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
        color: 'black',
    },
    message: {
        fontSize: 30,
    },
});

const CurrentWeather = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <FontAwesome5Icon name={'sun'} size={100} color={'black'} />
                <Text style={styles.temp}>8</Text>
                <Text style={styles.feels}>Feels like 7</Text>
                <RowText
                    highText={'High: 10; '}
                    lowText={'Low: 5'}
                    highLowWrapperStyles={styles.highLowWrapper}
                    highLowStyles={styles.highLow}
                />
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>It's Sunny</Text>
                <Text style={styles.message}>It's Perfect T-Shirt Weather</Text>
            </View>
        </SafeAreaView>
    );
};

export default CurrentWeather;
