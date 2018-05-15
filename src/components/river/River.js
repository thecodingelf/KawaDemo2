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
import { Actions } from 'react-native-router-flux'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import { saveDraggable } from '../../actions/draggable/Draggable'
import { Header, Draggable } from '../common'
import SubMenu from '../submenu/SubMenu'
import Rock from '../draggables/rock'
import Tree from '../draggables/tree'
import Flower from '../draggables/flower'

class River extends Component {
    onSavePress() {
        this.props.saveDraggable(this.state.coordX, this.state.coordY, { uid: this.props.user })
    }
    render() {
        const {
            elementStyle,
            containerStyle,
            actionButtonIcon,
            actionButtonImage,
            buttonStyle,
            backgroundStyle,
        } = styles
        return (
            <View style={containerStyle}>

                <SubMenu />

                <ImageBackground
                    source={require('../../assets/images/river2.png')}
                    style={backgroundStyle}
                >
                    <Tree />
                    <Rock />
                    <Flower />
                </ImageBackground>

                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    fixNativeFeedbackRadius // Fixes ripple effect overflow, doesn't work on children :(
                >
                    <ActionButton.Item
                        buttonColor='#9b59b6'
                        title="Tree"
                        onPress={() => { }}
                    >
                        <Image
                            source={require('../../assets/images/tree1-01.png')}
                            style={actionButtonImage}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#3498db'
                        title="Rock"
                        onPress={() => { }}
                    >
                        <Image
                            source={require('../../assets/images/rock1-01.png')}
                            style={actionButtonImage}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#4950dc'
                        title="Flower"
                        onPress={() => { }}
                    >
                        <Image
                            source={require('../../assets/images/flower1-01-01.png')}
                            style={actionButtonImage}
                        />
                    </ActionButton.Item>
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

export default River
