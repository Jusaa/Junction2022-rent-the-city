import React from 'react'
import Menu from './menu'
import axios from 'axios'

class BorrowerHome extends React.Component {
    constructor(props) {
        super(props);
      }
    
    componentDidMount() {
        axios.get('http://localhost:8080/api/bookable-items')
            .then(res => this.setState({items: res.data}))
    }
    getUser = () => {
        return this.props.getUser();
    }
    render() {
        console.log(this.state)
        return (
            <div className="App">
                <Menu logout={true} user={this.getUser().name} className='Nav'></Menu>
                <div className="App">
                    <p>Items available to rent</p>
                    <ul>
                        {this.state && this.state.items && this.state.items.map((item) => {
                            return (
                                <li><img src={item.imageUrl} width="100" height="100" />
                                    {item.name}, {item.description}</li>
                            )}
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BorrowerHome
