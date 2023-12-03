import { combineReducers } from "redux";

import Category from "./Category";

const reducers = combineReducers({
    category: Category,
});

export default reducers;