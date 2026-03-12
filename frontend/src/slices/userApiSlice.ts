import { apiSlice } from "./apiSlice";

const APP_URL = '/users';

export const appApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userMessage: builder.mutation({
            query: (body) => ({
                url: `${APP_URL}/message`,
                method: 'POST',
                body: body,
            })
        }),
        getProjects: builder.query({
            query: () => ({
                url: `${APP_URL}/projects`,
                method: 'GET',
            })
        })
    })
}); 

export const {useUserMessageMutation, useGetProjectsQuery} = appApiSlice;