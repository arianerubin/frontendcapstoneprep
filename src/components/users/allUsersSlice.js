
import { createSlice } from @reduxjs/toolkit;
import { api } from "../../app/api";

// get all users
const UserApi = api.injectEndpoints({
    endpoints: (builder) => ({
      fetchUser: builder.query({
        query: (id) => ({
          url: "/app/api/",
          method: "GET",
        }),
      }),


// update the user
      updateUser: builder.mutation({
        query: ({ userId, firstName, lastName, password  }) => ({
          url: `/api/user/${userId}`,
          method: "PATCH",
          body: { firstName, lastName, password},
        }),
      }),
   


    // delete the user

    deleteUser: builder.mutation({
      query: ({ userId, firstName, lastName, email, password  }) => ({
        url: `/api/user/${userId}`,
        method: "DELETE",
        body: { firstName, lastName, password},
      }),
    }),
  }),

});