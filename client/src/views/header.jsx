import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="Nav">
                { this.props.logout &&
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
                }
                { this.props.back &&
                    <Link to="/">
                        <button>Back</button>
                    </Link>
                }
                { this.props.user &&
                    <p>Logged in as {this.props.user}</p>
                }
            </div>
        )
    }
}

export default Header
