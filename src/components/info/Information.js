import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../common'

class Information extends Component {
    render() {
        const { } = styles;
        return (
            <View>
                <Header
                    headerText={'Info/Help'}
                />
                <View>
                    <Text>Information</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Information