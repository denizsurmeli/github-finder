import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const Navbar = (props) => {
        return (
            <div className="navbar bg-primary">
                <h1>
                    <Link to='/' className={props.icon}/>
                </h1>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>   
                </ul>

            </div>
        )
}

Navbar.defaultProps={
    title:"Github Finder",
    icon:"fab fa-github"
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
export default Navbar
