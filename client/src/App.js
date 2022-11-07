import './App.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import MainPage from './views/mainPage.jsx'
import Login from './views/auth/login'
import Signup from './views/auth/signup'
import UserInfo from './views/auth/userinfo'
import BorrowerHome from './views/borrowerHome'
import LenderHome from './views/lenderHome'
import BorrowableItem from './views/borrowableItem'
import OrderInfo from './views/orderInfo'

const App = () => {
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('borrower');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUsername={setName} setRole={setRole} getUser={{name, role}}/>}></Route>
        <Route path="/signup" element={<Signup setUsername={setName} setRole={setRole} getUser={{name, role}}/>}></Route>
        <Route path="/signup/userinfo" element={<UserInfo setUsername={setName} setRole={setRole} getUser={{name, role}}/>}></Route>
        <Route path="/borrower/home" element={<BorrowerHome getUser={{name, role}}/>}></Route>
        <Route path="/borrower/item/:id" element={<BorrowableItem getUser={{name, role}}/>}></Route>
        <Route path="/lender/home" element={<LenderHome getUser={{name, role}}/>}></Route>
        <Route path="/order/:id" element={<OrderInfo getUser={{name, role}}/>}></Route>
        <Route path="/" element={<MainPage getUser={{name, role}}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
