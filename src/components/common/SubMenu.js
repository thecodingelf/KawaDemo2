// Import libaries for making a component.
import React from 'react';
import { Text, View } from 'react-native';

// Make a component.
const SubMenu = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#333'
    }
};

// Make the component available to other parts of the app.
export { SubMenu };