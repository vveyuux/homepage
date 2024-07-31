import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import preLoaderReducer from "./slices/preLoaderSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        preLoader: preLoaderReducer,
    },
});

const rootReducer = combineReducers({
    theme: themeReducer,
    preLoader: preLoaderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;