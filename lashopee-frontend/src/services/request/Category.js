import fetch from '../../axiosConfig/axios';

const CategoryRequest = {};
const category = 'categories';

CategoryRequest.getAllCategories = (params) =>{
    return fetch({
        url: category,
        method: "get",
        params: params
    }); 
};




export default CategoryRequest;

