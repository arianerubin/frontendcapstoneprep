import { userApi } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const deleteApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/api/user/${userId}/delete`,
        method: "DELETE",
      }),
    }),
  }),
});

const deleteU = (state, { payload }) => {
  state.userId = payload.id;
};

const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    id: null,
    firstName: "",
    lastName: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.deleteUser.matchFulfilled, deleteU);
  },
});

export const { useDeleteUserMutation } = deleteApi;
export default deleteSlice.reducer;
