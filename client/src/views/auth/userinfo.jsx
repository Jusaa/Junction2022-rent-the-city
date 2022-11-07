import React from 'react'
import { Link } from 'react-router-dom'

const UserInfo = (props) => {

    const setRole = (e) => {
      props.setRole(e.target.id);
    }
    const setUsername = (e) => {
      props.setUsername(e.target.value);
    }

    return (
    <div className="App">
        <form className="page-wrapper">
          <span className="page-header header1">User Information</span>
          <div className="role-selection">
          <div className="container"> Lender
              <input type="radio" id="lender" name="role" onChange={setRole}/>
              {/*<span className="checkmark"></span>*/}
            </div>
            <div className="container"> Borrower
              <input type="radio" id="borrower" name="role" defaultChecked onChange={setRole}/>
              {/*<span className="checkmark"></span>*/}
            </div>
        </div>
          <input className="form-box" type="text" id="name" name="name" placeholder="Name" onChange={setUsername}/>
          <input className="form-box" type="text" id="surname" name="surname" placeholder="Surname"/>
          <input className="form-box" type="text" id="address" name="address" placeholder="Street Address"/>
          {props.getUser.role == 'lender' &&
            <input className="form-box" type="text" id="iban" name="iban" placeholder="IBAN"/>
          }
          {props.getUser.role == 'borrower' &&
            <Link to="/borrower/home">
              <input className="action-btn button-xl" type="submit" value="Sign Up">
              </input>
            </Link>
          }
        </form>
    </div>
    )
}

export default UserInfo