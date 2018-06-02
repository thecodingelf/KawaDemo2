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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as draggableActions from '../../actions/Draggable-actions'
import { saveDraggable } from '../../actions/Draggable-actions'
import { Header, Draggable } from '../common'
// import SubMenu from '../submenu/SubMenu'
import Tree from '../draggables/tree'
/* import Rock from '../draggables/rock'
import Flower from '../draggables/flower' */

// Only modify these if the source image has been modifier

// Modify this to change the base size of the image
class River extends Component {
    onSavePress() {
        // this.props.saveDraggable(this.props.treeX, this.props.treeY)
        console.log("CURRENT USER:", this.props.user)
        console.log("TreeX:",this.props.treeX, "TreeY:", this.props.treeY)
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
                    onPress={() => this.onSavePress()}
                />
                <ImageBackground
                    source={require('../../assets/images/river2.png')}
                    style={backgroundStyle}
                >
                    <Tree />
 {/*                    <Rock />
                    <Flower /> */}
                </ImageBackground>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.auth,
        ...state.river
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...draggableActions }, dispatch)
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

export default connect(
    mapStateToProps, mapDispatchToProps, null, { 
        withRef: true 
})(River)