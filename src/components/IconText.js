import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    body: {},
});

const IconText = (props) => {
    const { iconName, iconColor, bodyText, bodyTextStyles, wrapperStyles } = props;
    const { body } = styles;
    return (
        <View style={wrapperStyles}>
            <FontAwesome5Icon name={iconName} size={30} color={iconColor} />
            <Text style={[bodyTextStyles]}> {bodyText} </Text>
        </View>
    );
};

export default IconText;
