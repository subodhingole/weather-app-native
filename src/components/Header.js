import { View, Text, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0

    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});

function Header() {
    const { container, headerText } = styles;
    return (
        <View style={container}>
            <Text style={headerText}>Subodh's Weather App</Text>
        </View>
    );
}

export default Header;