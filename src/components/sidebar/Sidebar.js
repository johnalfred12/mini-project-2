import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends React.Component {
    setActive() {
        return "active";
    }

    render() {
        return (
            <section id="sidebar">
                <Link to="/" className="brand">
                    <h2 className="text">Pegasus</h2>
                </Link>
                <ul className="side-menu top">
                    <li className>
                        <Link to="/">
                            <i className='bx bxs-dashboard' ></i>
                            <span className="text">Dashboard</span>
                        </Link>
                    </li>
                    <li className>
                        <Link to="/product">
                            <i className='bx bxs-shopping-bag-alt' ></i>
                            <span className="text">Products</span>
                        </Link>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Sidebar;