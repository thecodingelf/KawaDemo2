import {
    SAVE_TREE_XCOORDINATES,
    SAVE_TREE_YCOORDINATES,
    SAVE_ROCK_XCOORDINATES,
    SAVE_ROCK_YCOORDINATES,
    SAVE_FLOWER_XCOORDINATES,
    SAVE_FLOWER_YCOORDINATES,
    SAVE_WAVE_XCOORDINATES,
    SAVE_WAVE_YCOORDINATES,
    SAVE_FISH_XCOORDINATES,
    SAVE_FISH_YCOORDINATES,
    SAVE_DRIFTWOOD_XCOORDINATES,
    SAVE_DRIFTWOOD_YCOORDINATES,
    SAVE_CLAM_XCOORDINATES,
    SAVE_CLAM_YCOORDINATES,
} from '../../actions/types/types'

const INITIAL_STATE = {
    treeX: '',
    treeY: '',
    rockX: '',
    rockY: '',
    flowerX: '',
    flowerY: '',
    waveX: '',
    waveY: '',
    fishX: '',
    fishY: '',
    driftwoodX: '',
    driftwoodY: '',
    clamX: '',
    clamY: '',
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
        case SAVE_WAVE_XCOORDINATES:
            return { ...state, waveX: action.payload };
        case SAVE_WAVE_YCOORDINATES:
            return { ...state, waveY: action.payload };
        case SAVE_FISH_XCOORDINATES:
            return { ...state, fishX: action.payload };
        case SAVE_FISH_YCOORDINATES:
            return { ...state, fishY: action.payload };
        case SAVE_DRIFTWOOD_XCOORDINATES:
            return { ...state, driftwoodX: action.payload };
        case SAVE_DRIFTWOOD_YCOORDINATES:
            return { ...state, driftwoodY: action.payload };
        case SAVE_CLAM_XCOORDINATES:
            return { ...state, clamX: action.payload };
        case SAVE_CLAM_YCOORDINATES:
            return { ...state, clamY: action.payload };
        default:
            return { ...state }
    }
}