import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
	const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
		useAuth0()

	const [myUser, setMyUser] = useState(null)
	const [authenticated, setAuthenticated] = useState(false)

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		setMyUser(user)
	// 	}
	//   else {
	//     setMyUser(false)
	//   }
	// }, [isAuthenticated])

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
