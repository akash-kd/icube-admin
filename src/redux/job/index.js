import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

// Storing User details and Token
export const Job = createSlice({
    name: "job",
    initialState,
    reducers: {
        addToList: (state, action) => {
            const jobsToAdd = action.payload.data;


            if (Array.isArray(jobsToAdd)) {
                const uniqueJobsToAdd = jobsToAdd.filter(job => !state.list.some(existingJob => existingJob._id === job._id));
                return {
                    ...state,
                    list: [...state.list, ...uniqueJobsToAdd],
                };
            } else if (typeof jobsToAdd === 'object' && jobsToAdd !== null) {
                if (!state.list.some(job => job._id === jobsToAdd._id)) {

                    return {
                        ...state,
                        list: [...state.list, jobsToAdd],
                    };
                }

            }

        },
        removeFromList: (state, action) => {
            let id = action.payload;
            console.log(action.payload);
            const newList = state.list.filter((obj) => obj._id !== id);

            return {
                ...state,
                list: newList,
            };


        },
        updateList: (state, action) => {
            let updatedJob = action.payload.data;
            console.log('reducer');
            console.log(updatedJob);

            const newList = state.list.map((obj) =>
                obj._id === updatedJob._id ? updatedJob : obj
            );

            return {
                ...state,
                list: newList,
            };

        },

        setList: (state, action) => {
            let newList = action.payload.data;

            return {
                ...state,
                list: newList
            }
        }


    },
});

// Action creators are generated for each case reducer function
export const { addToList, removeFromList, updateList, setList } = Job.actions;

export default Job.reducer;
