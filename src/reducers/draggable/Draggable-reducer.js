import {
    SAVE_TREE_XCOORDINATES,
    SAVE_TREE_YCOORDINATES,
    SAVE_ROCK_XCOORDINATES,
    SAVE_ROCK_YCOORDINATES,
    SAVE_FLOWER_XCOORDINATES,
    SAVE_FLOWER_YCOORDINATES,
} from '../../actions/types/types'

const INITIAL_STATE = {
    treeX: '',
    treeY: '',
    rockX: '',
    rockY: '',
    flowerX: '',
    flowerY: '',
    itemLabel: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log("ACTION TYPE:", action.type)
    switch (action.type) {
        case SAVE_TREE_XCOORDINATES:
            console.log("TreeX Payload:", action.payload)
            return { ...state, treeX: action.payload };
        case SAVE_TREE_YCOORDINATES:
            console.log("TreeY Payload:", action.payload)
            return { ...state, treeY: action.payload };
        case SAVE_ROCK_XCOORDINATES:
            return { ...state, rockX: action.payload };
        case SAVE_ROCK_YCOORDINATES:
            return { ...state, rockY: action.payload };
        case SAVE_FLOWER_XCOORDINATES:
            return { ...state, flowerX: action.payload };
        case SAVE_FLOWER_YCOORDINATES:
            return { ...state, flowerY: action.payload };
        default:
            return { ...state }
    }
}