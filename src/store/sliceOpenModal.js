import {createSlice} from "@reduxjs/toolkit";

const sliceOpenModal = createSlice({
  name: 'openModal',
  initialState: false,
  reducers:{
    showModal(state, action){
      console.log(state, action)
    }
  }
})

export const {showModal} = sliceOpenModal.actions;
export default sliceOpenModal.reducer;