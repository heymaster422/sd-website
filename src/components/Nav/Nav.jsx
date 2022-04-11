import React, {useState} from 'react'
import {Link} from 'react-router-dom';


export default function Nav() {
    const navStyle ={
        color: 'white'

    };
    return(
        <nav>
        <Link style={navStyle} to= '/'><h1>DC</h1>
        </Link>
        <ul className='nav-links'>
            <Link style={navStyle} to= '/Demo'>
                <li>Demo</li>
            </Link>
            <Link style={navStyle} to='/Gallery'>
                <li>Gallery</li>
            </Link>
            <Link style={navStyle} to= '/Team'>
                <li>Team</li>
            </Link>
            <a href="https://www.csun.edu/~xjiang/SeniorDesign/"><li>Course Page</li></a>

        </ul>
        </nav>

    )
}