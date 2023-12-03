import { SAVE_CATEGORIES } from "../constant/Category";

const initialState = {
    categories: []

};

const Category = (state = initialState, action) => {
    switch (action.type){
        case SAVE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
            default:
            return state;
    }
}

export default Category;