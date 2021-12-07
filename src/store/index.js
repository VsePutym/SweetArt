import {configureStore} from "@reduxjs/toolkit";
import sliceOpenModal from "./sliceOpenModal";

export default configureStore({
  reducer: {
      openModal: sliceOpenModal
  }
})