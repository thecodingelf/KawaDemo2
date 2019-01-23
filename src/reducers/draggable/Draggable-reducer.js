import { AsyncStorage } from 'react-native'
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
    SAVE_VERTICALLINE_XCOORDINATES,
    SET_ACTIVE_SCENE,
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
    verticallineX: '',
    itemLabel: '',
    activeScene: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_TREE_XCOORDINATES:
            if (treeX) {
                AsyncStorage.setItem('treeX', action.payload.treeX)
            }
            console.log(AsyncStorage.getItem(treeX))
            return { ...state, treeX: action.payload }
        case SAVE_TREE_YCOORDINATES:
            if (action.treeY) {
                AsyncStorage.setItem('treeY', action.treeY)
            }
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
        case SAVE_VERTICALLINE_XCOORDINATES:
            return { ...state, verticallineX: action.payload };
        case SET_ACTIVE_SCENE:
            return { ...state, activeScene: action.payload }
        default:
            return { ...state }
    }
}