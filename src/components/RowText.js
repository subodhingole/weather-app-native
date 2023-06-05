import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RowText = (props) => {
    const { highLowWrapperStyles, highLowStyles, highText, lowText } = props;
    return (
        <View style={highLowWrapperStyles}>
            <Text style={highLowStyles}>{highText}</Text>
            <Text style={highLowStyles}>{lowText}</Text>
        </View>
    );
};

export default RowText;
