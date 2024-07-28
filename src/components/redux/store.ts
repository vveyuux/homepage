import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

const rootReducer = combineReducers({
    theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
