import styled from 'styled-components'

const LoginPage = () => {
	return (
		<Wrapper className='page-100 section'>
			<div className='login'>
				<h3>Please login</h3>
				<form className='form-control'>
					<input type='email' name='' placeholder=' Email' />
					<input type='password' name='' placeholder=' Password' />
					<button className='btn' type='submit'>
						login
					</button>
				</form>
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
		border-radius: 5px;
		padding: 10px;
	}
	h3 {
		font-size: 1.2rem;
		text-transform: none;
		margin-bottom: 0.5rem;
	}
	.form-control {
		display: flex;
		flex-direction: column;
		max-width: 300px;
		input {
			padding: 0.5rem;
			background: var(--clr-grey-10);
			border-radius: var(--radius);
			border-color: transparent;
			letter-spacing: var(--spacing);
      margin-bottom: 1.5rem;
		}
	}
`

export default LoginPage
