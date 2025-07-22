import { createSlice } from "@reduxjs/toolkit";

const cinePeekSlice = createSlice({
    name: "cinepeek",
    initialState: {
        bannerData: [],
        movieInfo: []
    },
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        },
        setMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        },
    }
})

export const {setBannerData, setMovieInfo} = cinePeekSlice.actions;
export default cinePeekSlice.reducer;