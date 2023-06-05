import React from 'react';
import { StatusBar } from 'react-native';
import { ImageBackground } from 'react-native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IconText from '../components/IconText';


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // black background color transparent
    },
    imageLayout: {
        flex: 1,
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 7.5,
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

const City = (props) => {
    const {
        wrapper,
        imageLayout,
        container,
        cityText,
        populationText,
        populationWrapper,
        riseSetWrapper,
        riseSetText,
    } = styles;

    return (
        <SafeAreaView style={wrapper}>
            <ImageBackground
                source={require('../../static/city.jpg')}
                style={imageLayout}>
                <View style={container}>
                    <Text style={{ ...cityText, fontSize: 40 }}> City </Text>
                    <Text style={{ ...cityText, fontSize: 30 }}> Country </Text>
                </View>
                <View>
                    <IconText
                        wrapperStyles={populationWrapper}
                        iconName="users"
                        iconColor="red"
                        bodyText="8000"
                        bodyTextStyles={populationText}
                    />
                </View>
                <View>
                    <IconText
                        iconName="sun"
                        iconColor="white"
                        bodyText="10:46:43 AM"
                        bodyTextStyles={{ ...populationText, color: 'white' }}
                        wrapperStyles={riseSetWrapper}
                    />
                    <IconText
                        iconName="moon"
                        iconColor="white"
                        bodyText={'10:46:43 PM'}
                        bodyTextStyles={{ ...populationText, color: 'white' }}
                        wrapperStyles={riseSetWrapper}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default City;
