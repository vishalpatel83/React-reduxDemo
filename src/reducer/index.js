import petCounter from "./preCounter";
import petFavourite from "./petFavourite";
import { combineReducers } from "redux";

const reducers=combineReducers({
    petCounter,
    petFavourite
})
export default reducers;