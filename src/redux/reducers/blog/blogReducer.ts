import { INewsData } from "../../../interfaces"
import { BlogAction, BlogActionEnum, BlogState } from "./types"

const initialState:BlogState = {
    error: '',
    isLoading: false,
    data: [] as INewsData[]
}

export default function blogReducer(state = initialState, action: BlogAction): BlogState {
    switch (action.type) {
        case BlogActionEnum.SET_BLOG:
            return {...state, isLoading: true}
        case BlogActionEnum.SET_BLOG_SUCCESS:
            return {...state, data: action.payload, isLoading: false}
        case BlogActionEnum.SET_BLOG_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state;
    }
}