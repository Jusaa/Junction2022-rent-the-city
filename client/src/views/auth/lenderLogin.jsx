import React from 'react'
import { Link } from 'react-router-dom'

class LenderLogin extends React.Component {
  render () {
    return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
        <form>
          <table>
            <tr><td>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
            </td></tr>
            <tr><td>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" />
            </td></tr>
            <tr><td>
            <Link to="/lender/home">
              <input type="submit" value="Log in!"></input>
            </Link>
            </td></tr>
          </table>
        </form>
    </div>
    )
  }
}

export default LenderLogin