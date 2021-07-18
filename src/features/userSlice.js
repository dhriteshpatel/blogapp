import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name:"user",
    initialState:{
        isSignedIn: false,
        userData: null,
        searchIntput: "tech",
        blogData: null
    },
    reducers: {
        setSignedIn: (state, action) =>{
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) =>{
            state.userData = action.payload
        },
        setSearchInput: (state, action) => {
            state.searchIntput = action.payload
        },
        setBlogData: (state, action) =>{
            state.blogData = action.payload
        }
    }
});

export const { setSignedIn, setUserData, setSearchInput, setBlogData } = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUSerData = (state) => state.user.userData;
export const selectSearchInput = (state) => state.user.searchIntput;
export const selectBlogData = (state) => state.user.isSignedIn;

export default userSlice.reducer;