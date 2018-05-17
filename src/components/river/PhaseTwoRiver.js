import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    PanResponder,
    Animated
} from 'react-native'
import { Header, Draggable } from '../common'
import Rock from '../draggables/rock'
class PhaseTwoRiver extends Component {

    render() {
        const {
            elementStyle,
            containerStyle,
            actionButtonIcon,
            actionButtonImage,
            buttonStyle,
            backgroundStyle,
        } = styles;
        return (
            <View style={containerStyle}>

                <Header
                    headerText={'Kawa'}
                />

                <ImageBackground
                    source={require('../../assets/images/river2.png')}
                    style={backgroundStyle}
                >
                    <Rock />
                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    actionButtonImage: {
        height: 40,
        width: 40,
    },
    buttonStyle: {
        height: 20,
        width: 60,
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
    }
});

export default PhaseTwoRiver
