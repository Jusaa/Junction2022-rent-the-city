import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './views/mainPage.jsx'
import Login from './views/auth/login'
import Signup from './views/auth/signup'
import BorrowerHome from './views/borrowerHome'
import LenderHome from './views/lenderHome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/borrower/home" element={<BorrowerHome />}></Route>
        <Route path="/lender/home" element={<LenderHome user="test"/>}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
