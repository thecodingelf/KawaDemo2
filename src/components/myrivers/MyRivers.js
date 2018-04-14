import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../common'

class MyRivers extends Component {
    render() {
        const { } = styles;
        return (
            <View>
                <Header
                    headerText={'My Rivers'}
                />
                <View>
                    <Text>My rivers</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default MyRivers