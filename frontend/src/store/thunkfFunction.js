import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios.js";

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (body, thunkAPI)=>{
        try{
            const response = await axiosInstance.post(
                '/users/register',
                body
            )
            return response.data;
        } catch (error){
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (body, thunkAPI)=>{
        try{
            const response = await axiosInstance.post(
                '/users/login',
                body
            )
            return response.data;
        } catch (error){
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)