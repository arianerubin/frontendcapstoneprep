import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

// get all users
const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllUser: builder.query({
      query: () => ({
        url: "/api/users/all_users", //added all_users to url
        method: "GET",
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.fetchAllUser.matchFulfilled);
  },
});

export const { useFetchAllUsersQuery } = userApi;
export default userSlice.reducer;
