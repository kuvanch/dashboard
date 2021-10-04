import {AuthActionCreators} from "./auth/actionCreators";
import { BlogActionCreators } from "./blog/actionCreator";

export const allActionCreators = {
    ...AuthActionCreators,
    ...BlogActionCreators
}