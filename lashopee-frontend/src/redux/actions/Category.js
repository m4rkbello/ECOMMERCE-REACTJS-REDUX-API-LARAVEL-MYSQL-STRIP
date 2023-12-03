import { SAVE_CATEGORIES } from "../constant/Category"

export const setCategories = (payload) => {
    return{
        type: SAVE_CATEGORIES,
        payload
    };
}