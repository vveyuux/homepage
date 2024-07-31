import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    loaded: false,
};

export const preLoaderSlice = createSlice({
    name: "preLoader",
    initialState: initialState,
    reducers: {
        changeLoadedStatus: (state, actions: PayloadAction<boolean>) => {
            state.loaded = actions.payload;
        },
    },
});

export const { changeLoadedStatus } = preLoaderSlice.actions;
export default preLoaderSlice.reducer;
