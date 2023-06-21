import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    user: null,
    token : null,
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        addUser : (state,{payload})=>{
            state.user = payload.user
            state.token = payload.token
            Cookies.set("user",JSON.stringify(payload.user))
            Cookies.set('token',payload.token)
        },
        logOutUser : (state) => {
            state.user = null
            state.token = null
            Cookies.remove("user")
            Cookies.remove("token")
        }
    }
})

export const { addUser,logOutUser } = authSlice.actions
export default authSlice.reducer