import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath : "contactApi",
    baseQuery : fetchBaseQuery({baseUrl : "https://contact-app.mmsdev.site/api/v1"}),
    tagTypes : ["contact"],
    endpoints : (builder) => ({
        getContacts : builder.query({
           query : (token)=>({
                url:"/contact",
                method : "GET",
                headers : {authorization : `Bearer ${token}`}
           }),
           providesTags : ["contact"]
        }),
        createContacts : builder.mutation({
            query : ({token,contact}) =>({
                url : "/contact",
                method : "POST",
                headers : {authorization : `Bearer ${token}`},
                body : contact,
            }),
            invalidatesTags : ["contact"]
        })
    })
})

export const { useGetContactsQuery,useCreateContactsMutation } = contactApi