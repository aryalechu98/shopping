import {createSlice} from '@reduxjs/toolkit'

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLoginClicked:false,
        isLogin:false,
        inputs:{
            name:'',
            email:'',
            password:''
        },
        
    },
    reducers:{
        setIsLoginClicked(state){
            state.isLogin=!state.isLoginClicked;

        },
        setIsLoging(state){
            state.isLogin=!state.isLogin;
            
        },
        setInputs(state,action){
            const data=action.payload;
            state.inputs={...state.inputs,
            name:data.name,
            email:data.email,
            password:data.password,
            }
          
        },
        onSubmit(state,action){
            
            console.log(state.inputs)
        }
        
    }
})
export const authActions=authSlice.actions;
export default authSlice;