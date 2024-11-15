import React from 'react';
import { connect } from 'react-redux';
import './login-form.css';

const LoginForm = ({lang}) => {
	return (
		<div className="login-form d-flex justify-content-center">
			<form className="form-custom">
			  <div className="mb-3 mx-5 mt-3">
			    <label 
			    	htmlFor="exampleInputEmail1" 
			    	className="form-label label-text m-0">
			    	{lang==='en'?'Email:':'Пошта:'}
			    </label>
			    <input 
			    	type="email" 
			    	className="form-control input-text input-custom rounded-4" 
			    	id="exampleInputEmail1"
			    	placeholder={lang==='en'?'Your email':'Ваша пошта'} />
			  </div>
			  <div className="mb-5 mx-5">
			    <label 
			    	htmlFor="exampleInputPassword1" 
			    	className="form-label label-text m-0">
			    	{lang==='en'?'Password:':'Пароль:'}
			    </label>
			    <input 
			    	type="password" 
			    	className="form-control input-text input-custom rounded-4" 
			    	id="exampleInputPassword1"
			    	placeholder={lang==='en'?'Your password':'Ваш пароль'} />
			  </div>
			  <div className="d-flex justify-content-center">
				  <button 
				  		type="submit" 
				  		className="btn btn-info button-custom button-text rounded-4 d-flex justify-content-center align-items-center">
				  		{lang==='en'?'Login':'Вхід'}
				  </button>
			  </div>
			</form>
		</div>
	)
};

const mapStateToProps = ({ language: {lang}}) => {
	return { lang }; 
}

export default connect(mapStateToProps, null)(LoginForm);