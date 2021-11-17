import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Rating from "./Rating";
function Products(props) {
    return (
        <React.Fragment>
            <div className="row center">
                {props.Products.map((prod) => (
                    <div className="card" key={prod._id}>
                        <Link to={`/details/${prod._id}`} className="link">
                            <img src={prod.image} alt="" className="medium" />
                        </Link>
                        <div className="card-body">
                            <h2>{prod.name}</h2>
                            <Rating rating={prod.rating}></Rating>
                            <h3> numReviews : {prod.numReviews}</h3>
                            <div className="price">
                                Price ${prod.cost}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </React.Fragment>

    )
}
export default Products;