import React from 'react'
import Draggable from './Draggable'

// Only modify these if the source image has been modifier
const WIDTH = 73
const HEIGHT = 100

// Modify this to change the base size of the image
const BASE_SCALE = 0.75;

export default VerticalLine = ({ scale = 1 }) => (
  <Draggable
    itemLabel={'vertical-line'}
    width={WIDTH * BASE_SCALE * scale}
    height={HEIGHT * BASE_SCALE * scale}
    source={require('../../assets/images/v-line.png')}
  />
)