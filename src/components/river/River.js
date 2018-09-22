import React, { Component } from 'react'
import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ToastAndroid,
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as draggableActions from '../../actions/draggable/Draggable-actions'
import { saveDraggable } from '../../actions/draggable/Draggable-actions'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import Tree from '../draggables/tree'
import Rock from '../draggables/rock'
import Flower from '../draggables/flower'
import Wave from '../draggables/wave'

class River extends Component {
    onSavePress() {
        this.props.saveDraggable(this.props.treeX, this.props.treeY, this.props.user, 'tree')
        this.props.saveDraggable(this.props.rockX, this.props.rockY, this.props.user, 'rock')
        this.props.saveDraggable(this.props.flowerX, this.props.flowerY, this.props.user, 'flower')
        this.props.saveDraggable(this.props.waveX, this.props.waveY, this.props.user, 'wave')
        Actions.phasetwo()
        ToastAndroid.show('River was saved', ToastAndroid.SHORT)
    }
    render() {
        const {
            containerStyle,
            actionButtonIcon,
            actionButtonImage,
            backgroundStyle,
        } = styles
        return (
            <View style={containerStyle}>
                <ImageBackground
                    source={require('../../assets/images/river-phase-1.png')}
                    style={backgroundStyle}
                >
                <ActionButton 
                    buttonColor="rgba(231,76,60,1)" 
                    fixNativeFeedbackRadius
                >
                    <ActionButton.Item buttonColor='#3498db' title="Tree" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/tree1-01.png')}
                            style={actionButtonImage}
                        />                   
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Rock" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/rock1-01.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Flower" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/flower1-01-01.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Wave" onPress={() => {}}>
                        <Image
                            source={require('../../assets/images/wave.png')}
                            style={actionButtonImage}
                        />                    
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#9b59b6' title="Save" onPress={() => this.onSavePress()}>
                        <Icon name="md-save" style={actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
                    <Tree />
                    <Rock />
                    <Flower />
                    <Wave />
                </ImageBackground>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.auth,
        ...state.draggable
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