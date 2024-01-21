import styled from 'styled-components'
import { useUserContext } from '../context/user_context'
import { Navigate } from 'react-router-dom'
import Alert from '../components/Alert'

const LoginPage = () => {
	const {
		email,
		password,
		setEmail,
		setPassword,
		handelSubmit,
		authenticated,
		alert,
		showAlert,
	} = useUserContext()


	if (authenticated) {
		return <Navigate to='/' />
	}
	return (
		<Wrapper className='page-100 section'>
			<div className='login'>
				{alert.show && <Alert showAlert={showAlert} />}
				<h3>Enter your login</h3>
				<form onSubmit={handelSubmit} className='form-control'>
					<input
						value={email}
						type='email'
						name='email'
						placeholder=' Email'
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						value={password}
						type='password'
						name='password'
						placeholder=' Password'
						onChange={e => setPassword(e.target.value)}
					/>
					<button className='btn' type='submit'>
						login
					</button>
				</form>
				<p>
					Test email : <span>comfyTest@email.com</span>{' '}
				</p>
				<p>
					Test password : <span>12345</span>{' '}
				</p>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	background: var(--clr-primary-10);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	text-align: center;

	.login {
	}
	h3 {
		font-size: 1.2rem;
		text-transform: none;
		margin-bottom: 0.5rem;
		color: var(--clr-primary-5);
	}
	.form-control {
		display: flex;
		flex-direction: column;
		max-width: 300px;
		margin-bottom: 1rem;
		input {
			padding: 0.5rem;
			background: var(--clr-grey-10);
			border-radius: var(--radius);
			border-color: transparent;
			letter-spacing: var(--spacing);
			margin-bottom: 1.5rem;
		}
	}
	p {
		color: var(--clr-primary-5);
		span {
			color: green;
		}
	}
	.alert {
		color: red;
	}
`

export default LoginPage
