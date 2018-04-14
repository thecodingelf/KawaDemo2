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
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Draggable, SubMenu } from '../common'

class Home extends Component {

    render() {
        const { 
            elementStyle, 
            containerStyle, 
            actionButtonIcon, 
            actionButtonImage,
            buttonStyle,
        } = styles;
        return (
            <View style={containerStyle}>
                <Header
                    headerText={'Kawa'}
                />
                <SubMenu
                    headerText={"Content coming here"}
                >
                </SubMenu>
                <ImageBackground
                    source={require('../../assets/images/river2.png')}
                    style={{
                        width: '100%', height: '100%'
                    }}>
                    <Draggable
                        source={require('../../assets/images/tree1-01.png')}
                    />
                    <Draggable
                        source={require('../../assets/images/rock1-01.png')}
                    />
                    <Draggable
                        source={require('../../assets/images/flower1-01-01.png')}
                    />
                </ImageBackground>
                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Tree" onPress={() => { }}>
                        <Image
                            source={require('../../assets/images/tree1-01.png')}
                            style={actionButtonImage}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Rock" onPress={() => { }}>
                        <Image
                            source={require('../../assets/images/rock1-01.png')}
                            style={actionButtonImage}
                        />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Flower" onPress={() => { }}>
                        <Image
                            source={require('../../assets/images/flower1-01-01.png')}
                            style={actionButtonImage}
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
        height: 50,
        width: 50,
    },
    buttonStyle: {
        height: 20,
        width: 60,
    },
});

export default Home