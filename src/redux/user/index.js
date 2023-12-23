import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: localStorage.getItem("token") || ""
};

// Storing User details and Token
export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdate: (state, action) => {
      console.log(action.payload);
      if (action.payload?.data) {
        let u = action.payload?.data;
        state.user = u;
      }
      if (action.payload?.data.token) {
        let t = action.payload?.data.token;
        state.token = t;
        localStorage.setItem("token", t);
        console.log(t);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { userUpdate } = User.actions;

export default User.reducer;
