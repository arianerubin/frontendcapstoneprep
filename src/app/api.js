import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bringitalltogether-3.onrender.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().register?.token || getState().login.token;
      const sessionToken = window.sessionStorage.getItem("token");
      localStorage.removeItem("token");
      if (token || sessionToken) {
        headers.set("authorization", `Bearer ${token || sessionToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
  // getAllUsers: builder.query({
  //   query: () => "users",
  //   url: "allUsers",
  //   method: "GET",
  // }),
  // updateUsers: builder.query({
  //   query: () => `/api/user/${userId}/change`,
  //   method: "PATCH",
  //   body: { firstName, lastName, password },
  // }),
});

// export const { useGetAllUsersQuery, useUpdateUsersQuery } = userApi;
