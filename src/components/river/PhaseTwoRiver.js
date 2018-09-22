import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

class PhaseTwoRiver extends Component {
    onSavePress() {
        Actions.pop()
        // ToastAndroid.show('River was saved', ToastAndroid.SHORT)
    }
    render() {
        const {
            containerStyle,
            actionButtonIcon,
            actionButtonImage,
            backgroundStyle,
        } = styles;
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require('../../assets/images/river-phase-2.png')}
                    style={backgroundStyle}
                >
                                <ActionButton 
                    buttonColor="rgba(231,76,60,1)" 
                    fixNativeFeedbackRadius
                >
                    <ActionButton.Item buttonColor='#3498db' title="Rock" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/rock1-01.png')}
                            style={actionButtonImage}
                        />                   
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Driftwood" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/driftwood1-01.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Clam" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/shell-pearl1-01.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Fish" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/fish.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#9b59b6' title="Save" onPress={() => this.onSavePress()}>
                        <Icon name="md-save" style={actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
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
    backgroundStyle: {
        width: '100%',
        height: '100%',
    }
});

export default PhaseTwoRiver
