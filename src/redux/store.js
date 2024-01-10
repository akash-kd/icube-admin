import { configureStore } from "@reduxjs/toolkit";

//import navigationReducer from "./navigation";
// import toasterReducer from "./toaster";
import userReducer from "./user";
import jobReducer from "./job";

const store = configureStore({
  reducer: {
    //  sideNav: navigationReducer,
    // toaster: toasterReducer,
    user: userReducer,
    job: jobReducer
  },
});

export default store;
