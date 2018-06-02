import React from 'react'
import Draggable from './Draggable'

// Only modify these if the source image has been modifier
const WIDTH = 52
const HEIGHT = 100

// Modify this to change the base size of the image
const BASE_SCALE = 0.6;

export default Tree = ({ scale = 1 }) => (
  <Draggable
    itemLabel={'flower'}
    width={WIDTH * BASE_SCALE * scale}
    height={HEIGHT * BASE_SCALE * scale}
    source={require('../../assets/images/flower1-01-01.png')}
  />
)
