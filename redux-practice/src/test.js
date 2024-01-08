import {createSlice} from "@reduxjs/toolkit"

const fontSlice = createSlice({
    name:"button",
    initialState:{
        showFont:false,
    },
    reducers:{
        toggleFont:(state)=>{
            state.showFont = !state.showFont;
        }
    }
})

export const {toggleFont} = fontSlice.actions;

export default fontSlice.reducer;