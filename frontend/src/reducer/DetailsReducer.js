import { DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../types/detailsType";

const initialState = {
    loading:false,
    product:{},
    error:""
}

const DetailsReducer = (state=initialState,action)=>{
    switch(action.type){
        case DETAILS_LOADING:
        case DETAILS_LOADING_SUCCESS:
        case DETAILS_LOADING_FAIL:
            return{
                ...state,
                loading:action.loading,
                product:action.product,
                error:action.error
            }
        default:
            return state;
    }

};

export default DetailsReducer;