import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
      }
    handleClick = e => {
        this.setState(prevState => ({
            open: !prevState.open
          }));
    };
    render() {
        if (this.state.open) {
            return (
                <div className="Nav">
                    <button onClick={this.handleClick}>Menu</button>
                    <div className="SideNav">
                        { this.props.logout &&
                            <Link className="NavItem" to="/">
                                <button>Logout</button>
                            </Link>
                        }
                        { this.props.back &&
                            <Link className="NavItem" to="/">
                                <button>Back</button>
                            </Link>
                        }
                        { this.props.user &&
                            <p className="NavItem">Logged in as {this.props.user}</p>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Nav">
                    <button onClick={this.handleClick}>Menu</button>
                </div>
            )
        }
    }
}

export default Menu
