import React from 'react'
import { Link } from 'react-router-dom'

class UserInfo extends React.Component {
  
  constructor(props) {
    super(props);
  }

  setLender = () => {
    this.props.setRole('lender')
  };
  setBorrower = () => {
    this.props.setRole('borrower')
  };
  setUsername = (e) => {
    this.props.setUsername(e.target.value) 
  };
  getUser = () => {
    return this.props.getUser();
  }

  render () {
    return (
    <div className="App">
        <form className="page-wrapper">
          <span className="page-header header1">User Information</span>
          <div className="role-selection">
          <div className="container"> Lender
              <input type="radio" id="lender" name="role" onChange={this.setLender}/>
              {/*<span className="checkmark"></span>*/}
            </div>
            <div className="container"> Borrower
              <input type="radio" id="borrower" name="role" defaultChecked onChange={this.setBorrower}/>
              {/*<span className="checkmark"></span>*/}
            </div>
        </div>
          <input className="form-box" type="text" id="name" name="name" placeholder="Name" onChange={this.setName}/>
          <input className="form-box" type="text" id="surname" name="surname" placeholder="Surname"/>
          <input className="form-box" type="text" id="address" name="address" placeholder="Street Address"/>
          {this.getUser().role == 'lender' &&
            <input className="form-box" type="text" id="iban" name="iban" placeholder="IBAN"/>
          }
          {this.getUser().role == 'borrower' &&
            <Link to="/borrower/home">
              <input className="action-btn button-xl" type="submit" value="Sign Up">
              </input>
            </Link>
          }
        </form>
    </div>
    )
  }
}

export default UserInfo