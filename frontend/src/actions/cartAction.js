import axios from "axios";
import { ADD_ITEM, REMOVE_ITEM } from '../types/cartTypes'; 

export const AddToCart =(id,qty)=>{
    return async(dispatch, getState)=>{
        try{
           const {data} = await axios.get(`http://localhost:8080/api/products/${id}`);
           dispatch({
               type: ADD_ITEM,
               data : {
                "_id": data._id,
               "name":data.name,
               "barnd":data.barnd,
               "rating":data.rating,
               "image":data.image,
               "description":data.description,
               "cost":data.cost,
               "numReviews":data.numReviews,
               "countInStock":data.countInStock,
               qty
            }
           })
           window.localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems))

        }catch(err){
            console.log(err);
        }
    }
}
export const removeItemCart = (id)=>{
    return (dispatch, getState)=>{
        dispatch({
            type:REMOVE_ITEM,
            id:id
        })
        window.localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
    }
}