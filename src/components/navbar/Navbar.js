import React from 'react';
import profile from '../../assets/profile.png';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <i className='bx bx-menu' ></i>
                <form action="#">
                </form>
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
            </nav>
        );
    }
}

export default Navbar;