import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import authSlice from './services/authSlice'
import { contactApi } from './api/contactApi'

export const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        authSlice : authSlice,
        [contactApi.reducerPath] : contactApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,contactApi.middleware),
})