import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stepsReducer from './reducers/stepsSlice';
import chatReducer from './reducers/chatSlice';
import loginReducer from './reducers/loginSlice';
const rootReducer = combineReducers({
    step: stepsReducer,
    chat: chatReducer,
    login: loginReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat();
        }, 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']