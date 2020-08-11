import React from 'react';
import { FaBars, FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import { connect } from 'react-redux';
import { startLogin, startLoginFB }  from '../actions/auth';
import HeaderLoginPage from './Login_components/HeaderLoginPage';
import Features from './Login_components/Features';
import Enterprise from './Login_components/Enterprise';
import Footer from './Login_components/Footer';



const LoginPage = ({ startLogin, startLoginFB }) => (
  <div className="site-wrap ">
    <HeaderLoginPage />
     <section className="container__main" id="App">
      <img src="/images/bg.jpg" />
      <div className="content">
        <h1>Your podcast's</h1>
        <h2>The easiest way to make a podcast.</h2>
        <h3>Sign in to Your Account</h3>
        <div className="login_btn">
          <div className="btnBx">
            <button className="login_btn_google" onClick={startLogin}><span><FaGoogle /></span>Google</button>
          </div>
          <div className="btnBx">
            <button className="login_btn_facebook"  onClick={startLoginFB}><span><FaFacebookSquare /></span>Facebook</button>
          </div>
        </div>
      </div>
    </section>
    <Enterprise />
    <Features />
    <Footer />
  </div>
);

const mapDisptachToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFB: () => dispatch(startLoginFB())
})


export default connect(undefined, mapDisptachToProps)(LoginPage);

   