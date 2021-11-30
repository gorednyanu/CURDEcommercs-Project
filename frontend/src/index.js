import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { ProductReducre } from './reducer/productReducer';
import thunk from "redux-thunk";
import DetailsReducer from './reducer/DetailsReducer';
import {CartReducer} from './reducer/cartReducer';

const rootReducer = combineReducers({
"products": ProductReducre,
"details":DetailsReducer,
"cart": CartReducer,
});
const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
