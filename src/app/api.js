import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "postgresql://bringittogether_db_user:s2m99LAbOONmel5HJdXmUFeBBVP2ODhI@dpg-cq9a34tds78s739b6eq0-a.virginia-postgres.render.com/bringittogether_db",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().register.token || getState().login.token;
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
});
