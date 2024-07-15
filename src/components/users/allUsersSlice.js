import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

// get all users
const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => ({
        url: "/api/users/all_users", //added all_users to url
        method: "GET",
      }),
    }),
    // update the user
    updateUser: builder.mutation({
      query: ({ userId, firstName, lastName, password }) => ({
        url: `/api/user/${userId}/change`, //added change to the url
        method: "PATCH",
        body: { firstName, lastName, password },
      }),
    }),
    // delete the user
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/api/user/${userId}/delete`, //added the delete on the url
        method: "DELETE",
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.fetchUser.matchFulfilled);
    builder.addMatcher(userApi.endpoints.updateUser.matchFulfilled);
    builder.addMatcher(userApi.endpoints.deleteUser.matchFulfilled);
  },
});

export const { fetchUser, updateUser, deleteUser } = userApi;
export default userSlice.reducer;
