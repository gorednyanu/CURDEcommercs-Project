import axios from 'axios';
import { LIST_PRODUCTS, LIST_PRODUCTS_FAIL, LIST_PRODUCTS_SUCCESS } from '../types/productTypes';

export const listProducts = () =>{
    return async (dispatch)=>{
        dispatch({type:LIST_PRODUCTS,loading:false,products:[],error:""});
        try{
            const {data} = await axios.get(`http://localhost:8080/api/products`);
            dispatch({type:LIST_PRODUCTS_SUCCESS,
                        loading:true,
                        products:data,
                        error:""}) 
        }catch(err){
            dispatch({type:LIST_PRODUCTS_FAIL,
                        loading:true,
                        products:[],
                        error:err.message})
        }
    }
};