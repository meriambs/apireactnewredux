import { configureStore } from '@reduxjs/toolkit'
import userListSlice from "./userListSlice";
export default configureStore({
  reducer: {users:userListSlice},
  
})