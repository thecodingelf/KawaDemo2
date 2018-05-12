import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

class SubMenu extends Component {

    onSavePress() {
        Actions.phasetwo()
    }
    render() {
        return (
            <ActionButton
                buttonColor="rgba(231,76,60,1)"
                fixNativeFeedbackRadius // Fixes ripple effect overflow, doesn't work on children :(
            >
                <ActionButton.Item
                    buttonColor='#3498db'
                    title="Save"
                    onPress={this.onSavePress.bind(this)}
                >
                    <Icon
                        name="md-cloud-upload"
                        size={30}
                    />
                </ActionButton.Item>
            </ActionButton>
        )
    }
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
    },
}

export default SubMenu