import { useUserContext } from "../context/user_context"
import { useEffect } from 'react'

const Alert = () => {
	const { showAlert, alert } = useUserContext()
	useEffect(() => {
		const timeout = setTimeout(() => {
			showAlert()
		}, 3000)
		return () => clearTimeout(timeout)
	}, [alert])
	return <p className='alert'>{alert.msg}</p>
}

export default Alert
