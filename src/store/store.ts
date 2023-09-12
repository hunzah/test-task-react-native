import {configureStore} from '@reduxjs/toolkit'

import {baseApi} from './base-api'
import appReducer from "./appReducer";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        camera: appReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

