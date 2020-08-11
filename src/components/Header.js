import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { startLogout } from '../actions/auth';
import Context from '../context/Context';
import MainNav from '../components/MainNav';
import SideBarMain from '../components/SideBarMain';


const Header = ({ startLogout }) => {
  const [open, setOpen] = useState(false)
    return (
      <div>
        <section className="header__container">
          <Context.Provider value={{ open, setOpen }}>
            <header className="main_page__header">
            <Link className="header__title" to="/dashboard">
                <h1><img className="icon_main__nav" src="/images/logo.gif"/>PODCAST<span>.</span></h1>
            </Link>
              <nav>
                <MainNav />
              </nav>
                <button className="sign__out" onClick={startLogout}><span><FaSignOutAlt /></span>Sign out</button>
              <div className="sign__out_container">
                <div className={`burger__main ${open ? 'open' : 'close'}`} onClick={() => setOpen(!open) }><FaBars /></div>
                <SideBarMain />
              </div>  
            </header>
          </Context.Provider>
        </section>
      </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)