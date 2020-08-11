import React, { useContext } from 'react'
import Context from '../../context/Context';

const LogInRightNav = () => {
    const { open } = useContext(Context)
    return (
        <div>
            <div className={`right_nav ${open ? 'open' : 'close' }`}>
            <a href="#" className="logo_side__bar"><img src="/images/logo.gif" />Podcast<span className="text-pramary__side-bar">.</span></a>
              <nav>
                <ul>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Enterprise">Enterprise Solution</a></li>
                    <li><a href="#App">Podcast App</a></li>
                </ul>
              </nav>
            </div>
        </div>
    );
    
}
export default LogInRightNav
