import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../../app/api";

const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/user/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["User"],
    }),
  }),
});

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
  window.sessionStorage.setItem("token", payload.token);
};

const loginSlice = createSlice({
  name: "login",
  initialState: { token: null, isLoggedIn: false },
  extraReducers: (builder) => {
    builder.addMatcher(loginApi.endpoints.login.matchFulfilled, storeToken);
  },
});

export default loginSlice.reducer;
export const { useLoginMutation } = loginApi;
export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
