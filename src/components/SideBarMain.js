import React, { useContext } from 'react'
import { FaSignOutAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Context from '../context/Context';

const SideBarMain = ({ startLogout }) => {
    const { open } = useContext(Context)
    return (
        <div className={`right__main_nav ${open ? 'open' : 'close'}`}>
        <button className="sign__out__rightNav" onClick={startLogout}><span><FaSignOutAlt /></span>Sign out</button>
        <h1 className="log_right__nav"><img className="icon_main_right__nav" src="/images/logo.gif"/>PODCAST<span>.</span></h1>
        <nav>
            <ul>
              <li><a className="active">Home</a></li>
              <li><a href="#post">Post</a></li>
              <li><a href="#guests">Featured Guests</a></li>
              <li><a href="#subscribe">Subscribe</a></li>
            </ul>
        </nav>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(SideBarMain)

// 
// 