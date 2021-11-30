import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';





function App() {

  const result = useSelector(state=>state.cart);
  const cartItems = result.cartItems;

  const dispatch = useDispatch();



  return (
    <React.Fragment>
      <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <NavLink to="/" className="brand" exact={true} strict>रुबाब कलेक्शन</NavLink>
            </div>
            <div>
              <NavLink to="/cart" exact={true} strict><i className="fa fa-shopping-cart"></i>
                {cartItems.length>0 &&(
                  <span className="badge">{cartItems.length}</span>
                )}
              </NavLink>
              <NavLink to="/signin" exact={true} strict><i className="fa fa-user-circle"></i></NavLink>
            </div>
          </header>
          <main>
              <Route path='/' component={HomeScreen} exact={true} strict></Route>
              <Route path="/details/:id" component={DetailsScreen} exact={true} strict></Route>
              <Route path= "/cart/:id?" component={CartScreen} exact={true} strict ></Route>
          </main>
          <footer className="row center">
            copyright@ashokit.in
          </footer>
        </div>
      </Router>
    </React.Fragment>





  );
}

export default App;
