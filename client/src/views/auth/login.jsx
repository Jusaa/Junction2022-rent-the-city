import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../menu'

class Login extends React.Component {
  render () {
    return (
    <div>
      <Menu back={true} />
        <form className="App">
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
            <Link to="/borrower/home">
              <input type="submit" value="Log in!"></input>
            </Link>
            </td></tr>
          </table>
        </form>
    </div>
    )
  }
}

export default Login
