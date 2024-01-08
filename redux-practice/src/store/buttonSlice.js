import {createSlice} from "@reduxjs/toolkit"

const buttonSlice = createSlice({
  name:"button",
  initialState:{
    showButton:true,
  },
  reducers:{
    toggleButton:(state)=>{
      state.showButton = !state.showButton;
    },
  },
});

export const {toggleButton} = buttonSlice.actions;
export default buttonSlice.reducer;