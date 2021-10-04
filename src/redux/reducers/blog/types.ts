import { INewsData } from "../../../interfaces";

export interface BlogState {
    data: INewsData[];
    isLoading: boolean;
    error: string;
}

export enum BlogActionEnum {
    SET_BLOG = "SET_BLOG",
    SET_BLOG_ERROR = "SET_BLOG_ERROR",
    SET_BLOG_SUCCESS = "SET_BLOG_SUCCESS",
}

export interface SetBlogAction {
    type: BlogActionEnum.SET_BLOG;
    payload: boolean
}
export interface SetBlogErrorAction {
    type: BlogActionEnum.SET_BLOG_ERROR;
    payload: string;
}
export interface SetBlogSuccesAction {
    type: BlogActionEnum.SET_BLOG_SUCCESS;
    payload?: any;
}

export type BlogAction =
        SetBlogAction |
        SetBlogErrorAction |
        SetBlogSuccesAction