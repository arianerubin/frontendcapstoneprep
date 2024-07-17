import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllUser: builder.query({
      query: () => ({
        url: "/api/user/all_users", //added all_users to url
        method: "GET",
      }),
    }),
  }),
});

const userSlice = createSlice({
  name: "users",
  initialState: {}
  ,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(usersApi.endpoints.fetchAllUser.matchFulfilled);
  },
});

export const { useFetchAllUserQuery } = usersApi;
export default userSlice.reducer;
