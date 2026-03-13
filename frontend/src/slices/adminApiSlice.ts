import { apiSlice } from './apiSlice';

const ADMIN_URL = '/admin';

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    adminLogin: builder.mutation({
      query: (body) => ({
        url: `${ADMIN_URL}/login`,
        method: 'POST',
        body,
      }),
    }),

    adminRegister: builder.mutation({
      query: (body) => ({
        url: `${ADMIN_URL}/register`,
        method: 'POST',
        body,
      }),
    }),

    adminLogout: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}/logout`,
        method: 'POST',
      }),
    }),

    getUserMessages: builder.query({
      query: () => ({
        url: `${ADMIN_URL}/messages`,
        method: 'GET',
      }),
    }),

    getOneMessage: builder.query({
      query: (id) => ({
        url: `${ADMIN_URL}/messages/${id}`,
        method: 'GET',
      }),
    }),

    markMessageAsRead: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/messages/${id}/read`,
        method: 'PUT',
      }),
    }),

    deleteUserMessage: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/messages/${id}`,
        method: 'DELETE',
      }),
    }),

    uploadProject: builder.mutation({
      query: (formData) => ({
        url: `${ADMIN_URL}/upload`,
        method: 'POST',
        body: formData,
      }),
    }),

    getAdminProjects: builder.query({
      query: () => ({
        url: `${ADMIN_URL}/project`,
        method: 'GET',
      }),
    }),

    editProject: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${ADMIN_URL}/project/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),

    deleteProject: builder.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/project/${id}`,
        method: 'DELETE',
      }),
    }),

  }),
});

export const {
  useAdminLoginMutation,
  useAdminRegisterMutation,
  useAdminLogoutMutation,
  useGetUserMessagesQuery,
  useGetOneMessageQuery,
  useMarkMessageAsReadMutation,
  useDeleteUserMessageMutation,
  useUploadProjectMutation,
  useGetAdminProjectsQuery,
  useEditProjectMutation,
  useDeleteProjectMutation,
} = adminApiSlice;