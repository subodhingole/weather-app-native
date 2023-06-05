import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    temp: {
        fontSize: 15,
        color: 'white',
    },
    date: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
    cond: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});

const ListItem = (props) => {
    const { item, temp, cond, date } = styles;
    const { dt_txt, min, max, condition } = props;

    return (
        <View style={item}>
            <FontAwesome5 name="sun" size={24} color="white" />
            <Text style={date}>
                {dt_txt.substring(5, 7) + ' ' + dt_txt.substring(11, 16)}
            </Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
            <Text style={cond}>{condition}</Text>
        </View>
    );
};

export default ListItem;
