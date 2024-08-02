import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
      theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 'light'
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        toggleTheme: (state, actions: PayloadAction<string>) => {
            state.theme = actions.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
