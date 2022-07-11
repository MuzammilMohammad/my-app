import React from 'react';
import { BrowserRouter as Switch, Route, Routes,Router } from "react-router-dom";
import { HomePage } from '../Home/home';
import LoginPage from '../login/login';
import  RegisterPage  from '../signUp/signup';
import {SuccessPage} from "../Home/signup_success"

function PrivateRoute() {
    return (
      
              <Routes>
          <Route path='/' element={<LoginPage/>} exact />
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/signup-success' element={<SuccessPage/>}/>
          {/* <Redirect from="*" to={'/'} /> */}
          </Routes>
        
    );
}

export { PrivateRoute };