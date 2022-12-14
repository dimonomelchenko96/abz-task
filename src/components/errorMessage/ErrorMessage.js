import img from './error.gif'

import './errorMessage.scss'

const ErrorMessage = () => {
	return (
		<div className='error'>
			<h2 className='error__title'>Something went wrong. Please refresh page or try again</h2>
			<img className='error__img' src={img} alt="error" />
		</div>
	)
}

export default ErrorMessage;