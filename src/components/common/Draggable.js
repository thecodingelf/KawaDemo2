import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    PanResponder,
    Animated
} from 'react-native'

export default class Draggable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
        };
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            // Initially, set the value of x and y to 0 (the center of the screen)
            onPanResponderGrant: (e, gestureState) => {
                //    Set the initial value to the current state
                this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
                this.state.pan.setValue({ x: 0, y: 0 });
                Animated.spring(
                    this.state.scale,
                    { toValue: 1.1, friction: 3 }
                ).start();
            },
            // When we drag/pan the object, set the delate to the states pan position
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y },
            ]),
            onPanResponderRelease: (e, { vx, vy }) => {
                //   Flatten the offset to avoid erratic behavior
                this.state.pan.flattenOffset()
                this.props.setCoordinates(vx, vy, this.props.itemLabel)
            }
        });
    }

    render() {
        const size = {
            width: this.props.width,
            height: this.props.height,
        }
        let { pan, scale } = this.state;
        let rotate = '0deg';
        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];
        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };
        const panStyle = {
            ...size,
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <Animated.View
                {...this._panResponder.panHandlers}
                style={[panStyle]}
            >
                <Image
                    style={size}
                    source={this.props.source}
                />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    elementStyle: {
        width: 80,
        height: 80,
    },
});

export { Draggable }
