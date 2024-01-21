import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import AuthProvider from 'react-auth-kit/AuthProvider'
import { Auth0Provider } from '@auth0/auth0-react'
// import createStore from 'react-auth-kit/createStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

// const store = createStore({
// 	authName: '_auth',
// 	authType: 'cookie',
// 	cookieDomain: window.location.hostname,
// 	cookieSecure: window.location.protocol === 'https:',
// })

root.render(
	<Auth0Provider
		// domain={process.env.REACT_APP_AUTH_DOMAIN}
		// clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
		redirec_uri={window.location.origin}
		cacheLocation='localstorage'
	>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>
)
