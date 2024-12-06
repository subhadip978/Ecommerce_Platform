import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const userAPI = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/v1/user',
		// withCredentials: true,
	}),
	tagTypes: ["users"],
	endpoints: (builder) => ({
		signup: builder.mutation({
			query: (users) => ({
				url: "new",
				method: "POST",
				body: users,

			}),
			invalidatesTags: ["users"],
		}),

		login: builder.mutation({
			query: (user) => ({
				url: 'signin',
				method: 'POST',
				body: user,
			}),
			// invalidatesTags: ["users"],
		}),
		allUsers: builder.query({
			query: (id) => `all?id=${id}`,
			providesTags: ["users"],
		  }),
	})


})

export const { useSignupMutation, useLoginMutation } = userAPI;


