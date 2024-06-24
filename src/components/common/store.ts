import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '@/components/tasks/slice';

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})

export type AppStore = typeof store
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch