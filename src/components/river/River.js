import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    ImageBackground,
    StyleSheet,
    PanResponder,
    Animated
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { saveDraggable } from '../../actions/Draggable-actions'
import { Header, Draggable} from '../common'
// import SubMenu from '../submenu/SubMenu'
import Tree from '../draggables/Tree'
/* import Rock from '../draggables/rock'
import Flower from '../draggables/flower'
 */

 // Only modify these if the source image has been modifier
const WIDTH = 73
const HEIGHT = 100

// Modify this to change the base size of the image
const BASE_SCALE = 0.75;
const scale = 1
class River extends Component {
    onSavePress() {
        this.props.saveDraggable = ({ x, y }) => {
            this.setState({ coordX: x, coordY: y })
        }
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
                <Button
                    title="Save"
                    onPress={() => this.props.saveDraggable(this.state.coordX, this.state.coordY)}
                />
                <ImageBackground
                    source={require('../../assets/images/river2.png')}
                    style={backgroundStyle}
                >
                    <Draggable
    itemLabel={'tree'}
    width={WIDTH * BASE_SCALE * scale}
    height={HEIGHT * BASE_SCALE * scale}
    source={require('../../assets/images/tree1-01.png')}
  />
{/*                     <Rock />
                    <Flower /> */}
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
    },
    subMenuStyle: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 10,
    }
});

export default River
