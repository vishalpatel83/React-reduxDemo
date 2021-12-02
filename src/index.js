import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducer';
import {Provider} from 'react-redux';
import Newapp from './Newapp';
  // // action
  // const petIncrement=()=>{
  //   return{
  //       type:'PET_INCRESED'
  //   }
  // }
  // const petDecrement=()=>{
  //   return{
  //        type:"PET_DECREASED"
  //   }
  // }
  // // reducer
  
  // let store=createStore(petCounter);
  // store.subscribe(()=>console.log(store.getState()))
  // //  dispatch the action the reducer
  // store.dispatch(petIncrement())
  
  let store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Newapp/>
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

