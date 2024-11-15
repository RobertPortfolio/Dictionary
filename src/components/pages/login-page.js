import React from 'react';
import LoginForm from '../login-form';
import Plant from '../../assets/plant.svg';

const LoginPage = () => {
	return(
		<>
			<LoginForm />
			<img 
				src={Plant} 
				alt="plant" 
				className="position-fixed bottom-0 end-0"
				style={{width: '350px', height: 'auto'}} />
		</>
	)
};

export default LoginPage;