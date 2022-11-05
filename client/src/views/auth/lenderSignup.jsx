import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'

class LenderSignup extends React.Component {
  render () {
    return (
    <div className="App">
      <Header back={true} />
        <form>
          <table>
            <tr><td>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
            </td></tr>
            <tr><td>
              <label for="bank">Bank IBAN:</label>
              <input type="text" id="bank" name="bank" />
            </td></tr>
            <tr><td>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" />
            </td></tr>
            <tr><td>
            <Link to="/lender/home">
              <input type="submit" value="Sign up!"></input>
            </Link>
            </td></tr>
          </table>
        </form>
    </div>
    )
  }
}

export default LenderSignup