import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "./navigation";
// import toasterReducer from "./toaster";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    sideNav: navigationReducer,
    // toaster: toasterReducer,
    user: userReducer,
  },
});

export default store;
