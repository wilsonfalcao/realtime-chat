import {combineReducers} from "redux";

//Import reducers
import {MessageRedux} from "./messageredux";
import {UseRedux} from "./useredux";


export const rootReducer = combineReducers({
    UseRedux,
    MessageRedux,
});