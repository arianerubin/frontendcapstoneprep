import { api } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const deleteApi = api.injectEndpoints({
  endpoints: (builder) => ({
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/api/user/${userId}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Delete"],
    }),
  }),
});

const deleteU = (state, { payload }) => {
  state.userId = payload.id;
};

const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(deleteApi.endpoints.deleteUser.matchFulfilled, deleteU);
  },
});

export const { useDeleteUserMutation } = deleteApi;
export default deleteSlice.reducer;
