import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <div className="Logo" {...props}>
                {/* <img src="./logo/logo.png" /> */}
                <span>Sokolov store</span>
            </div>
        </Link>
        
    );
}

export default Logo;