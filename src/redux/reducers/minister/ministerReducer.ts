import { MinisterAction, MinisterActionEnum, MinisterState } from "./types";

const initalState:MinisterState = {
    data: [],
    isLoading: false,
    error: ''
}

export const ministerReducer = (state = initalState, action: MinisterAction): MinisterState => {
    switch (action.type) {
        case MinisterActionEnum.SET_MINISTER:
            return {...state, isLoading: action.payload, error: ''}
        case MinisterActionEnum.SET_MINISTER_SUCCESS:
            return {...state, isLoading: false, error: '', data: action.payload}
        case MinisterActionEnum.SET_MINISTER_ERROR:
            return {...state, isLoading: false, error: action.payload, data: []}
        default:
            return state;
    }
}