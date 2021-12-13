/* Front */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
/* React redux + store */
import { Provider } from 'react-redux'
import store from './redux/store'
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Main from "./components/Main";
// import Nav from "./components/Nav"
import Home from './components/Home'
// import Create from "./components/Create";
import CardDetail from "./components/home/CardDetail";


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/home/:id' element={<CardDetail/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/create' element={<Main/>}/> */}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);