import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
	// const { loginWithRedirect, logout, user } = useAuth0()

	// const [myUser, setMyUser] = useState(null)
	const [authenticated, setAuthenticated] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [submit, setSubmit] = useState(false)
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
	})

	useEffect(() => {
		if (
			submit &&
			loginEmail === 'comfyTest@email.com' &&
			loginPassword === '12345'
		) {
			setAuthenticated(true)
			setSubmit(false)
		}
		if (
			(submit &&
				loginEmail !== 'comfyTest@email.com' &&
				loginPassword !== '12345') ||
			(submit && loginEmail !== 'comfyTest@email.com') ||
			(submit && loginPassword !== '12345')
		) {
			showAlert(true, 'Wrong email or password!')
			setSubmit(false)
		}

		if (
			(submit && !loginEmail && !loginPassword) ||
			(submit && !loginEmail) ||
			(submit && !loginPassword)
		) {
			showAlert(true, "Email or password can't be empty!")
			setSubmit(false)
		}
	}, [submit])

	const handelSubmit = e => {
		e.preventDefault()
		setLoginEmail(email)
		setLoginPassword(password)
		setEmail('')
		setPassword('')
		setSubmit(true)
	}

	const showAlert = (show = false, msg = '') => {
		setAlert({ show, msg })
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

	// useEffect(() => {
	// 	if (authenticated) {
	// 		setMyUser(true)
	// 	} else {
	// 		setMyUser(false)
	// 	}
	// }, [authenticated])

	return (
		<UserContext.Provider
			value={{
				// loginWithRedirect,
				// logout,
				// myUser,
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
