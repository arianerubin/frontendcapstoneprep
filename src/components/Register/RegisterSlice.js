import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../app/api";

const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/users/register",
        method: "POST",
        body: credentials,
      }),
      invalidateTags: ["Users"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem("token", payload.token); //if page is refreshed, we stay logged in
};

const registerSlice = createSlice({
  name: "register",
  initialState: {
    users: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export default registerSlice.reducer;

export const { useRegisterMutation } = registerApi;
