import {AuthActionCreators} from "./auth/actionCreators";
import { BlogActionCreators } from "./blog/actionCreator";
import { MinisterActionCreators } from "./minister/actionCreator";

export const allActionCreators = {
    ...AuthActionCreators,
    ...BlogActionCreators,
    ...MinisterActionCreators
}