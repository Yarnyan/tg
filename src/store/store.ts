import { privacyApi } from './api/Privacy';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stepsReducer from './reducers/stepsSlice';
import chatReducer from './reducers/chatSlice';
import loginReducer from './reducers/loginSlice';
import profileReducer from "./reducers/profileSlice";
import { authApi } from "./api/Auth";
import { chatApi } from './api/Chat';
import { userApi } from './api/User';
const rootReducer = combineReducers({
    step: stepsReducer,
    chat: chatReducer,
    login: loginReducer,
    profile: profileReducer,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    [privacyApi.reducerPath]: privacyApi.reducer,
    [userApi.reducerPath]: userApi.reducer,  
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(authApi.middleware, chatApi.middleware, privacyApi.middleware, userApi.middleware);
        }, 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']