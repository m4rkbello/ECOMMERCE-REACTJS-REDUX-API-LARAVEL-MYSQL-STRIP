import { SAVE_CATEGORIES } from "../constant/Category"
import { SAVE_CATEGORY } from "../constant/Category";


export const setCategories = (payload) => {
    return{
        type: SAVE_CATEGORIES,
        payload
    };
}

export const setCurrentCategory = (payload) => {
    return{
        type: SAVE_CATEGORY,
        payload
    }
}