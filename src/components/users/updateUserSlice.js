import { api } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const updateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/user/${id}/change`, //added change to the url
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Update"],
    }),
  }),
});

const updateU = (state, { payload }) => {
  state.userId = payload.id;
};

const updateSlice = createSlice({
  name: "users",
  initialState: {
    value: {},
  },
  reducers: {
    setUserToBeEdited: (state, action) => {
      state.value = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(api.endpoints.updateUser.matchFulfilled, updateU);
  // },
});

export const { useUpdateUserMutation } = updateApi;
export default updateSlice.reducer;
export const { setUserToBeEdited } = updateSlice.actions;
