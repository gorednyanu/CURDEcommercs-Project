import React, { useEffect } from 'react';
import './Homescreen.css';
import LoadingBox from "../component/LodingBox";
import MessageBox from '../component/MessageBox';
import Products from '../component/Products';
import { useDispatch, useSelector } from 'react-redux';
import * as action from "../actions/productActions";
function HomeScreen() {
  const result = useSelector(state => state.products);
  const {loading,products,error} = result;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(action.listProducts());
  },[dispatch]);
  return (
    <React.Fragment>
      {! loading ? (<LoadingBox></LoadingBox>): error === "Network Error"? (<MessageBox variant="danger">{error}</MessageBox>):(
        <Products Products={products}></Products>
      )}
      </React.Fragment>
  );
}
export default HomeScreen;