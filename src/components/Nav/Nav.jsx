import React, {useState} from 'react'
import {Link} from 'react-router-dom';


export default function Nav() {
    const navStyle ={
        color: 'white'

    };
    return(
        <nav>
        <h3>Logo</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to= '/Demo'>
                <li>Demo</li>
            </Link>
            <Link style={navStyle} to='/Gallery'>
                <li>Gallery</li>
            </Link>
            <Link style={navStyle} to= '/Demo'>
                <li>Demo</li>
            </Link>

        </ul>
        </nav>

    )
}