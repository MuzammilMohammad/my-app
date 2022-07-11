import LoginData from "../login/model/reducer";
import { combineReducers } from "redux";
import SignUpData from "../signUp/model/reducer";
import DocumentData from "../Home/model/reducer"

 const rootReducer = combineReducers({LoginData,SignUpData,DocumentData});

 export default rootReducer;