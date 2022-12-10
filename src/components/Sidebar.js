import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;