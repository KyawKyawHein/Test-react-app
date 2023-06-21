import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery : fetchBaseQuery({baseUrl:' https://contact-app.mmsdev.site/api/v1'}),
    tagTypes : ['auth'],
    endpoints : (builder) => ({
        Register :builder.mutation({
            query : (user) => ({
                url : "/register",
                method : "POST",
                body : user
            }),
            invalidatesTags: ["auth"]
        }),
        Login : builder.mutation({
            query : (user) => ({
                url : "/login",
                method : "POST",
                body : user
            }),
            invalidatesTags: ['auth']
        })
    })
})

export const { useRegisterMutation,useLoginMutation }  = authApi