import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerReducer from "../components/Register/RegisterSlice";
import loginReducer from "../components/Login/LoginSlice";
import allUsersReducer from "../components/users/allUsersSlice";
import deleteUserReducer from "../components/users/deleteSlice";
import updateUserReducer from "../components/users/updateUserSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerReducer,
    login: loginReducer,
    allUsers: allUsersReducer,
    deleteUsers: deleteUserReducer,
    user: updateUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
