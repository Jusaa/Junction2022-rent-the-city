import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './views/mainPage.jsx'
import BorrowerLogin from './views/auth/borrowerLogin'
import BorrowerSignup from './views/auth/borrowerSignup'
import BorrowerHome from './views/borrowerHome'
import LenderLogin from './views/auth/lenderLogin'
import LenderSignup from './views/auth/lenderSignup'
import LenderHome from './views/lenderHome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/borrower/login" element={<BorrowerLogin />}></Route>
        <Route path="/borrower/signup" element={<BorrowerSignup />}></Route>
        <Route path="/borrower/home" element={<BorrowerHome />}></Route>
        <Route path="/lender/login" element={<LenderLogin />}></Route>
        <Route path="/lender/signup" element={<LenderSignup />}></Route>
        <Route path="/lender/home" element={<LenderHome user="test"/>}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
