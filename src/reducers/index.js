import updateLanguage from './language';

const reducer = (state, action) => {

	return{
		language: updateLanguage(state, action)
	};

};
export default reducer;