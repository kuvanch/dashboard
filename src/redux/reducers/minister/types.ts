import { IMinisterData } from "../../../interfaces";


export enum MinisterActionEnum {
    SET_MINISTER = 'SET_MINISTER',
    SET_MINISTER_SUCCESS = 'SET_MINISTER_SUCCESS',
    SET_MINISTER_ERROR = 'SET_MINISTER_ERROR'
}

export interface MinisterState {
    data: IMinisterData[];
    isLoading: boolean;
    error: string;
}

export interface SetMinisterAction {
    type: MinisterActionEnum.SET_MINISTER;
    payload: boolean;
}

export interface SetMiniterSuccessAction {
    type: MinisterActionEnum.SET_MINISTER_SUCCESS;
    payload: IMinisterData[];
}

export interface SetMinisterErrorAction {
    type: MinisterActionEnum.SET_MINISTER_ERROR;
    payload: string;
}

export type MinisterAction = 
        SetMinisterAction | 
        SetMiniterSuccessAction |
        SetMinisterErrorAction