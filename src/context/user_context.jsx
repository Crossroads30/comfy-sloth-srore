import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
	const { loginWithRedirect, logout, user } = useAuth0()

	const [myUser, setMyUser] = useState(null)
	const [authenticated, setAuthenticated] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
	})

	useEffect(() => {
		if (loginEmail === 'comfyTest@email.com' && loginPassword === '12345') {
			setAuthenticated(true)
		}
		setAlert(true)
		showAlert(true, 'Wrong email or password!')
	}, [loginEmail, loginPassword])

	const handelSubmit = e => {
		e.preventDefault()
		console.log('submit')
		setLoginEmail(email)
		setLoginPassword(password)
		setEmail('')
		setPassword('')
	}

	const showAlert = (show = false, msg = '') => {
		setAlert({show,msg})
	}

	// for Auth0
	// useEffect(() => {
	// 		setMyUser(user)
	// }, [user])

	const loginUser = () => {
		setAuthenticated(true)
	}
	const logoutUser = () => {
		setAuthenticated(false)
	}

	useEffect(() => {
		if (authenticated) {
			setMyUser(true)
		} else {
			setMyUser(false)
		}
	}, [authenticated])

	return (
		<UserContext.Provider
			value={{
				loginWithRedirect,
				logout,
				myUser,
				loginUser,
				logoutUser,
				authenticated,
				email,
				password,
				setEmail,
				setPassword,
				handelSubmit,
				setAlert,
				alert,
				showAlert,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
// make sure use
export const useUserContext = () => {
	return useContext(UserContext)
}
