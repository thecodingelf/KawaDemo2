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
import { saveDraggable } from '../../actions/draggable/Draggable'
import { Header, Draggable } from '../common'
// import SubMenu from '../submenu/SubMenu'
import Rock from '../draggables/rock'
import Tree from '../draggables/tree'
import Flower from '../draggables/flower'

class River extends Component {
    setDraggable = ({ x, y, item }) => {
        switch (item) {
            case 'tree':
                this.setState({ treeCoordX: x, treeCoordY: y })
                break;
            case 'rock':
                this.setState({ treeCoordX: x, treeCoordY: y })
                break;
            case 'flower':
                this.setState({ treeCoordX: x, treeCoordY: y })
                break;
        }
    }
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
                    <Tree setCoordinates={this.setDraggable} />
                    <Rock setCoordinates={this.setDraggable} />
                    <Flower setCoordinates={this.setDraggable} />
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
