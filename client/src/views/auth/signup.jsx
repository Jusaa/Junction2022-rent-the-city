import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu'

class Signup extends React.Component {
  
  constructor(props) {
    super(props);
  }

  setBorrower = () => {
    this.props.state.role = 'borrower'
  };
  setLender = () => {
    this.props.state.role = 'lender'
  };
  setUser = (e) => {
    this.props.state.user = e.target.value
  };

  render () {
    return (
    <div>
      <Menu back={true} />
        <form className="App">
          <table>
            <tr><td>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" onChange={this.setUser}/>
            </td></tr>
            <tr><td>
              <label htmlFor="bank">Bank IBAN:</label>
              <input type="text" id="bank" name="bank" />
            </td></tr>
            <tr><td>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
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
            {this.props.state.role == 'borrower' &&
              <Link to="/borrower/home">
                <input type="submit" value="Sign up"></input>
              </Link>
            }
            {this.props.state.role == 'lender' &&
              <Link to="/lender/home">
                <input type="submit" value="Sign up!"></input>
              </Link>
            }
            </td></tr>
          </table>
        </form>
    </div>
    )
  }
}

export default Signup