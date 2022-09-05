import {createSlice} from '@reduxjs/toolkit'
const productListSlice=createSlice({
    name:'productList',
    initialState:{
        sort:'',
        filter:'',
        size:'',
    },
    reducers:{
        setSort(state,action){
            state.sort=action.payload;
        },
        setFilter(state,action){
            state.filter=action.payload;
        },
        setSize(state,action){
            state.size=action.payload;
        },

    }
})
export const productListAction=productListSlice.actions;
export default productListSlice