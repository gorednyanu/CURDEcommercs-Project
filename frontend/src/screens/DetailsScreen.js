import React, { useEffect, useState } from "react";
import "./DetailsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DetailsAction from "../actions/detailsAction";
import LoadingBox from "../component/LodingBox";
import MessageBox from "../component/MessageBox";
import Rating from "../component/Rating";

function DetailsScreen(props) {
    const [qty, setQty] = useState(1);
    const id = props.match.params.id;
    const result = useSelector(state => state.details);
    const { loading, product, error } = result;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DetailsAction(id))
    }, [dispatch]);

    const addToCartHandler = ()=>{
        props.history.push(`/cart/${id}?qty=${qty}`);
    }

    return (
        <React.Fragment>
            {!loading ? <LoadingBox></LoadingBox> : error === "Network Error" ? <MessageBox variant="danger">{error}</MessageBox> : (<div>
                <NavLink to="/" exact={true} strict><i className="fa fa-home" style={{ color: "gray"}}></i></NavLink>
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
                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
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
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div> Name</div>
                                        <div>{product.name}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div> Price </div>
                                        <div className="price">$ {product.cost}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div> Status</div>
                                        <div>{product.countInStock > 0 ? (<div className="success">
                                            In Stock
                                        </div>) : (<div className="danger">
                                            Out Of Stock
                                        </div>)}</div>
                                    </div>
                                </li>
                                {product.countInStock>0 && (<>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                                                {[...Array(product.countInStock).keys()].map((x)=>(
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                                    </li>
                                 </>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </React.Fragment>
    )
};
export default DetailsScreen;