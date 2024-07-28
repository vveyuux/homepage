import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            state.toggle = !state.toggle;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
