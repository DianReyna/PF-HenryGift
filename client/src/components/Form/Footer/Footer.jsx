import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="containerFooter">
                <div className="columnFooter">
                    <div className="informationFooter">
                        <p>Email: giftsupport@gift.com</p>
                        <p>dir: giftsupport@gift.com</p>
                        <p>tel: 123456789</p>
                        <p>cel: 1234567889</p>
                    </div>
                </div>
                <div className="columnFooter">
                    <div className="redes">
                        <Link  to ='https://www.facebook.com/' className='enlaces'> <FacebookIcon/> </Link>
                        <Link  to ='https://twitter.com/?lang=es' className='enlaces'> <InstagramIcon/> </Link>
                        <Link  to ='https://www.instagram.com/' className='enlaces'> <TwitterIcon/> </Link>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
