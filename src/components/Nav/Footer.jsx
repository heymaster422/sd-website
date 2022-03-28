import React, {useState} from 'react'

export default function Footer() {

    return(
        <footer>
            <div className='main-footer'>
                <div className='container'>
                    <div className='row'>
                        {/* Col 1  */}
                        <div className='colOne'>
                            <ul>
                                <img src="./CSUN_Seal.png"></img>
                            </ul>
                        </div> 
                        {/* Col 2  */}
                        <div className='col'>
                            <ul className='footer-links'>
                                <li>Facebook</li>
                                <li>Twitter </li>
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                            </ul>
                        </div> 
                        {/* Col 3  */}
                        <div className='col'>
                            <ul className='footer-links'>
                                <li>(818)-677-1200</li>
                                <li>18111 Nordhoff St </li>
                                <li>Northridge, CA 91330</li>
                                <li>Copyright © California State University, Northridge</li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </footer>
    )
}