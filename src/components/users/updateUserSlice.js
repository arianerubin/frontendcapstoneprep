import { userApi } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const updateApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ userId, firstName, lastName, password }) => ({
        url: `/api/user/${userId}/change`, //added change to the url
        method: "PATCH",
        body: { firstName, lastName, password },
      }),
    }),
  }),
});

const updateSlice = createSlice({
    name: "users",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder.addMatcher(userApi.endpoints.updateUser.matchFulfilled);
    },
  });
  


export const { useFetchUpdateUserQuery } = updateApi;
export default updateSlice.reducer;