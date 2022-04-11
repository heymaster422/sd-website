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
                            <a target="_blank" href="https://www.facebook.com/calstatenorthridge"><img src="facebook.png" alt="Facebook" /></a>
                            <a target="_blank" href="https://twitter.com/csunorthridge"><img src="twitter.png" alt="Twitter" /></a>
                            <a target="_blank" href="https://www.instagram.com/csun_edu/?hl=en"><img src="instagram.png" alt="Instagram" /></a>
                            <a target="_blank" href="https://www.linkedin.com/school/california-state-university-northridge/"><img src="linkedin.png" alt="LinkedIn" /></a>
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