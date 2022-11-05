import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import MainPage from './views/mainPage.jsx'
import BorrowerLogin from './views/borrowerLogin'
import BorrowerSignup from './views/borrowerSignup'
import LenderLogin from './views/lenderLogin'
import LenderSignup from './views/lenderSignup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/borrower/login" element={<BorrowerLogin />}></Route>
        <Route path="/borrower/signup" element={<BorrowerSignup />}></Route>
        <Route path="/lender/login" element={<LenderLogin />}></Route>
        <Route path="/lender/signup" element={<LenderSignup />}></Route>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
