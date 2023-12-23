import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

// Storing User details and Token
export const User = createSlice({
    name: "job",
    initialState,
    reducers: {
        addToList: (state, action) => {
            let job = action.payload.data;
            state.list.push(job);
        },
        removeFromList: (state, action) => {
            let details = action.payload.data;

            state.list.filter((obj) => obj.id != details.id);
        },

    },
});

// Action creators are generated for each case reducer function
export const { userUpdate } = User.actions;

export default User.reducer;
