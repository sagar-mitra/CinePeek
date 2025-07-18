import { createSlice } from "@reduxjs/toolkit";

const cinePeekSlice = createSlice({
    name: "cinepeek",
    initialState: {
        bannerData: [],
    },
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        }
    }
})

export const {setBannerData} = cinePeekSlice.actions;
export default cinePeekSlice.reducer;