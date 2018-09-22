import React from 'react'
import Draggable from './Draggable'

// Only modify these if the source image has been modifier
const WIDTH = 52
const HEIGHT = 100

// Modify this to change the base size of the image
const BASE_SCALE = 0.6;

export default Clam = ({ scale = 1 }) => (
  <Draggable
    itemLabel={'clam'}
    width={WIDTH * BASE_SCALE * scale}
    height={HEIGHT * BASE_SCALE * scale}
    source={require('../../assets/images/shell-pearl1-01.png')}
  />
)
