import React from "react";
import './LoadingBox.css';

function LoadingBox(){
    return(
        <React.Fragment>
            <div className="loading">
            <i className="fa fa-spinner fa-spin"></i>Loading...
            </div>
        </React.Fragment>

    )
};
export default LoadingBox;