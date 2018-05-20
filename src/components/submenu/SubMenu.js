import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

class SubMenu extends Component {

    onSavePress() {
        Actions.phasetwo()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={() => this.animateSubMenu()}>
                        <View style={styles.button} />
                    </TouchableWithoutFeedback>
                    <Text>Header Text</Text>
                    <View style={styles.button2} />
                    <Animated.View style={[styles.subMenu, { height: this.state.animHeight }]} />
                </View>
            </View>
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