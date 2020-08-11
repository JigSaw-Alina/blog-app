import React, { useState }from 'react';
import { FaBars } from 'react-icons/fa';
import Context from '../../context/Context';
import LogInRightNav from './LogInRightNav';

const HeaderLoginPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
          <section  className="container_header__login">
            <Context.Provider value={{ open, setOpen }}>
              <header className="header_login">
                <a href="#" className="logo"><img src="/images/logo.gif" />Podcast<span className="text-pramary">.</span></a>
                  <nav>
                    <ul>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#Enterprise">Enterprise Solution</a></li>
                        <li><a href="#App">Podcast App</a></li>
                    </ul>
                  </nav>
                  <div>
                    <div className={`burger__log-in ${open ? 'open' : 'close'}`} onClick={() => setOpen(!open) }><FaBars /></div>
                    <LogInRightNav />
                  </div>
              </header>
            </Context.Provider>
           </section>
        </div>
    );
}


export default HeaderLoginPage