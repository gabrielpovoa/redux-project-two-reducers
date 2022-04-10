import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light'
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export default slice.reducer
export const { setThemeStatus } = slice.actions