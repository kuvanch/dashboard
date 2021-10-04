import axios from "axios";
import { AppDispatch } from "../..";
import { BlogActionEnum, SetBlogAction, SetBlogErrorAction, SetBlogSuccesAction } from "./types";



export const BlogActionCreators = {
    setBlog: (isLoading): SetBlogAction => ({type: BlogActionEnum.SET_BLOG, payload: isLoading}),
    setBlogSuccess: (data):SetBlogSuccesAction => ({type: BlogActionEnum.SET_BLOG_SUCCESS, payload: data}),
    setBlogError: (payload: string): SetBlogErrorAction => ({type: BlogActionEnum.SET_BLOG_ERROR, payload}),
    getAllBlogs: () => async (dispatch:AppDispatch) => {
        try {
            dispatch(BlogActionCreators.setBlog(true))
            await axios.get('http://164.90.163.79:3698/api/superAdmin/blog/allByPageable')
            .then(res => {
                if(res.status === 200) {
                    dispatch(BlogActionCreators.setBlogSuccess(res.data.object.object.content))
                }
            })
        } catch (error) {
            BlogActionCreators.setBlogError(error)
        }
    },
    addBlog: (form) => async (dispatch: AppDispatch) => {
        dispatch(BlogActionCreators.setBlog(true))
        try {
               await axios({
                     method: 'POST',
                     url: 'http://164.90.163.79:3698/api/attachment/upload',
                     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`},
                     data: JSON.stringify(form)
                }).then(res => {
                    if(res.status === 200) {
                        dispatch(BlogActionCreators.setBlog(false))
                    }
                })
        } catch (error) {
            BlogActionCreators.setBlogError(error)
        }
    }
}