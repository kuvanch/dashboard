import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import { IAuthData, IUser } from "../../../interfaces";
import {decodeToken} from 'react-jwt';
export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (authData:IAuthData) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            await axios({
                url: `http://164.90.163.79:3698/api/users/login`,
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify(authData)
            }).then( res => {
                if(res.status === 200) {
                    dispatch(AuthActionCreators.setIsLoading(false));
                    dispatch(AuthActionCreators.setIsAuth(true));
                    localStorage.setItem('token',res.data.object.token)
                    const token: any = decodeToken(res.data.object.token)
                    localStorage.setItem('role',token.role[0].roleName)
                }
            })
        }catch(err) {
            dispatch(AuthActionCreators.setIsLoading(false));
            dispatch(AuthActionCreators.setError('Telefon yoki parolda xatolik'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}