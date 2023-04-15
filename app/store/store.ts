import { configureStore } from "@reduxjs/toolkit";
import registerModalSlice from "./registerModal/registerModalSlice";
import loginModalSlice from "./loginModal/loginModalSlice";

export const store = configureStore({
  reducer: { registerModal: registerModalSlice, loginModal: loginModalSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
