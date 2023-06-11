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
    temperature: {
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

const CurrentWeather = ({ weatherData }) => {
    const { main: { temp, feels_like, temp_min, temp_max }, weather } = weatherData;
    console.log(weather)
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <FontAwesome5Icon name={'sun'} size={100} color={'black'} />
                <Text style={styles.temperature}>{temp}</Text>
                <Text style={styles.feels}>Feels like {feels_like}F</Text>
                <RowText
                    highText={`High: ${temp_max}; `}
                    lowText={`Low: ${temp_min}; `}
                    highLowWrapperStyles={styles.highLowWrapper}
                    highLowStyles={styles.highLow}
                />
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>{weather[0].main}</Text>
                <Text style={styles.message}>{weather[0].description}</Text>
            </View>
        </SafeAreaView>
    );
};

export default CurrentWeather;
