import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth/authReducer";
import blogReducer from "./reducers/blog/blogReducer";
import { ministerReducer } from "./reducers/minister/ministerReducer";



const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    minister: ministerReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch