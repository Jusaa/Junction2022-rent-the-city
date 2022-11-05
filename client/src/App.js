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
    this.state = { user: { name: '', role: 'borrower' }};
    this.setUsername = this.setUsername.bind(this)
    this.setRole = this.setRole.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  setUsername(name) {
    this.setState({ user: { name, role: this.state.user.role }})
  }
  setRole(role) {
    this.setState({ user: { name: this.state.user.name, role }})
  }
  getUser() {
    return this.state.user
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUsername={this.setUsername} setRole={this.setRole} getUser={this.getUser}/>}></Route>
          <Route path="/signup" element={<Signup setUsername={this.setUsername} setRole={this.setRole} getUser={this.getUser}/>}></Route>
          <Route path="/borrower/home" element={<BorrowerHome getUser={this.getUser}/>}></Route>
          <Route path="/lender/home" element={<LenderHome getUser={this.getUser}/>}></Route>
          <Route path="/" element={<MainPage getUser={this.getUser}/>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
