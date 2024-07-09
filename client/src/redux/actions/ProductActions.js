import axios from 'axios';
import { GET_PRODUCTS_SUCCESS , GET_PRODUCTS_FAIL } from '../constants/ProductConstants';

import { GET_PRODUCT_DETAILS_FAIL, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_DETAILS_REQUEST} from '../constants/ProductConstants';

const URL = 'http://localhost:8000';




export const getProductDetails = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
       dispatch({type:GET_PRODUCTS_FAIL,payload: error.message});
    }
};

export const getProds=(id)=>async(dispatch)=>{
    try{
        dispatch({type:GET_PRODUCT_DETAILS_REQUEST});
        const {data}= await axios.get(`${URL}/product/${id}`);
        dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    }catch(error){
        dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: error.message });


    }
}

// const products = document.getElementsByName(username);
// const username = products.value;