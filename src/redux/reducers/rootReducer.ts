import { combineReducers } from "redux";
import authSlice from "../slices/authSlice";  // Ensure correct import path without .ts extension

// Combine all the reducers
const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
