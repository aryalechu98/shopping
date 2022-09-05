import { createSlice } from "@reduxjs/toolkit";

const drawerSlice=createSlice({
    name:'drawer',
    initialState:{
        open: false,
    },
    reducers:{
        setOpen(state){
            state.open=!state.open;
        }
    }

})
export const drawerActions=drawerSlice.actions;
export default drawerSlice;