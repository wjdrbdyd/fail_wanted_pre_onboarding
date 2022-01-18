import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';
import carouselData from "./dummy/carouselData.js";
import categoriesData from './dummy/categoriesData.js';
let overlayView = false;
let categories = categoriesData;
let slideData = carouselData;

function reducer(state = slideData, action) {
  return state;
}
function categoriesReducer(state=categories, action){
  return state;
}
function overlayReducer(state = overlayView, action) {
  if(action.type === 'mouseHover') {
    state = true;
    return state;
  } else if(action.type === 'mouseOut'){
    state = false;
    return state;
  } else if(action.type === 'mouseClick'){
    return !state;
  } else if(action.type === 'overlayOffClick'){
    return false;
  }
  return state;
}
let store = createStore(combineReducers({reducer, overlayReducer, categoriesReducer}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
