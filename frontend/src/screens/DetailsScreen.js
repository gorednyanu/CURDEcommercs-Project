import React, { useEffect } from "react";
import "./DetailsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DetailsAction from "../actions/detailsAction";
import LoadingBox from "../component/LodingBox";
import MessageBox from "../component/MessageBox";
import Rating from "../component/Rating";

function DetailsScreen(props){
    const id = props.match.params.id;
    const result = useSelector(state=>state.details);
    const {loading, product, error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(DetailsAction(id))
    },[dispatch]);

    return(
        <React.Fragment>
            {!loading?<LoadingBox></LoadingBox>:error === "Network Error"?<MessageBox variant= "danger">{error}</MessageBox>:(<div>
                <NavLink to="/" exact={true} strict><i className="fa fa-home" style={{color:"gray"}}></i></NavLink>
                <div className="row top">
                    <div className="col-2">
                        <img src={product.image} className="large" alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating}></Rating>
                                <h3>numReviews : {product.numReviews}</h3>
                            </li>
                            <li>
                                cost $ :{product.cost}
                            </li>
                            <li>
                                {product.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card Body">
                            
                        </div>
                    </div>
                </div>
                </div>
            )}
        </React.Fragment>
    )
};
export default DetailsScreen;