import axios from "axios";
import { AppDispatch } from "../..";
import { API_BASE } from "../../../api/api";
import { MinisterActionEnum, SetMinisterAction, SetMinisterErrorAction, SetMiniterSuccessAction } from "./types";



export const MinisterActionCreators = {
    setMinister: (isLoading): SetMinisterAction => ({type: MinisterActionEnum.SET_MINISTER, payload: isLoading}),
    setMinisterSuccess: (data): SetMiniterSuccessAction => ({type: MinisterActionEnum.SET_MINISTER_SUCCESS, payload: data}),
    setMinisterError: (error): SetMinisterErrorAction => ({type: MinisterActionEnum.SET_MINISTER_ERROR, payload: error}),
    getAllMinister: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(MinisterActionCreators.setMinister(true))
            await axios.get(`${API_BASE}/api/minister`)
            .then(res => {
                if(res.status === 200) {
                    dispatch(MinisterActionCreators.setMinisterSuccess(res.data.object.content))
                }
            })
        } catch (error) {
            dispatch(MinisterActionCreators.setMinisterError(error))
        }
    },
    addMinister: (form) => async (dispatch: AppDispatch) => {
        try {
            dispatch(MinisterActionCreators.setMinister(true))
            await axios({
                method: 'post',
                url: `${API_BASE}/api/minister/saveOrEdit`,
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                data: JSON.stringify(form)
            })
            .then(res => {
                console.log(res);
                console.log(JSON.stringify(form));
                
                if(res.status === 200 && res.data.message === 'Success'){
                    dispatch(MinisterActionCreators.setMinister(false))
                }
            })
        } catch (error) {
            dispatch(MinisterActionCreators.setMinisterError(error))
        }
    },
    deleteMinister: (id: number) => async (dispatch: AppDispatch) => {
        try {
            dispatch(MinisterActionCreators.setMinister(true))
            await axios({
                method: 'DELETE',
                url: `${API_BASE}/api/minister/remove/${id}`,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                if(res.status === 200) {
                    dispatch(MinisterActionCreators.setMinister(false))
                }
            })
            
        } catch (error) {
            dispatch(MinisterActionCreators.setMinisterError(error))
        }
    }
}