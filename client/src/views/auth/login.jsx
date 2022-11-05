import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu'

class Login extends React.Component {
  
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
    <div>
      <Menu back={true} />
        <form className="App">
          <table>
            <tr><td>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={this.setUsername}/>
            </td></tr>
            <tr><td>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </td></tr>
            <tr><td>
            <div>
              <input type="radio" id="borrower" name="role" defaultChecked onChange={this.setBorrower}/>
              <label htmlFor="lender">Borrower</label>
            </div>
            <div>
              <input type="radio" id="lender" name="role" onChange={this.setLender}/>
              <label htmlFor="lender">Lender</label>
            </div>
            </td></tr>
            <tr><td>
            {this.getUser().role == 'borrower' &&
              <Link to="/borrower/home">
                <input type="submit" value="Log in!"></input>
              </Link>
            }
            {this.getUser().role == 'lender' &&
              <Link to="/lender/home">
                <input type="submit" value="Log in!"></input>
              </Link>
            }
            </td></tr>
          </table>
        </form>
    </div>
    )
  }
}

export default Login
