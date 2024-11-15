import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { setLanguage } from '../../actions';
import Logo from '../../assets/logo.svg';
import Leaf from '../../assets/leaf.svg';

const Header = ({ lang, setLanguage }) => {

	return(
		<header className="height-60 color-green row justify-content-between">
			<div className="col-auto circle rounded-circle">
				<img src={Logo} alt="logo icon" />
			</div>
			<div className="col-auto logo-text">
			  D
			  <img src={Leaf} alt="leaf icon" />
			  <span className="overlap">C</span>
			  T
			  <img src={Leaf} alt="leaf icon" />
			  <span className="overlap">O</span>
			  NARY
			</div>
			<div className="col-auto lang-text">
				<button 
					className={lang==='en'?'btn btn-dark':'btn btn-outline-light'}
					onClick={()=>{setLanguage('en')}} >
					EN
				</button>
				<button 
					className={lang==='ua'?'btn btn-dark':'btn btn-outline-light'}
					onClick={()=>{setLanguage('ua')}} >
					UA
				</button>
			</div>
		</header>
	)
};

const mapStateToProps = ({ language: { lang } }) => {
	return { lang };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setLanguage: (language) => dispatch(setLanguage(language))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);