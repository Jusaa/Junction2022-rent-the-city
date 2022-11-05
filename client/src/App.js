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
import BorrowerHome from './views/borrowerHome'
import LenderHome from './views/lenderHome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 'Guest', role: 'borrower' };
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login state={this.state}/>}></Route>
          <Route path="/signup" element={<Signup state={this.state}/>}></Route>
          <Route path="/borrower/home" element={<BorrowerHome state={this.state}/>}></Route>
          <Route path="/lender/home" element={<LenderHome state={this.state}/>}></Route>
          <Route path="/" element={<MainPage state={this.state}/>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
