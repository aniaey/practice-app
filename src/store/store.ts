import {configureStore} from "@reduxjs/toolkit";
import ItemSlice from "./itemSlice.ts"
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        items: ItemSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();