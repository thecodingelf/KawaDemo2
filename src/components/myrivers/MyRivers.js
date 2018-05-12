import React, { Component } from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'
import { Header } from '../common'

class MyRivers extends Component {
    render() {
        let A = ['Therapy0', 'Therapy1']
        let B = ['Therapy2', 'Therapy3']
        let C = ['Therapy3', 'Therapy4']
        const { container, sectionHeaderStyle, sectionListItemStyle } = styles;
        return (
            <View style={container}>
                <Header
                    headerText={'My Rivers'}
                />
                <View>
                    <SectionList
                        renderSectionHeader={({ section: { title } }) =>
                            <Text
                                style={sectionHeaderStyle}>{title}
                            </Text>}
                        renderItem={({ item, index, section }) =>
                            <Text
                                key={index}
                                style={sectionListItemStyle}>
                                {item}
                            </Text>}
                        sections={[
                            { title: 'Day One', data: A },
                            { title: 'Day Two', data: B },
                            { title: 'Day Three', data: C },
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionHeaderStyle: {
        fontSize: 20,
        padding: 5,
        backgroundColor: 'steelblue',
        color: '#fff',
    },
    sectionListItemStyle: {
        fontSize: 15,
        padding: 5,
    },
});

export default MyRivers