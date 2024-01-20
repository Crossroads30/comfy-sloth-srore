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
		domain='dev-pu8wyk-g.us.ayth0.com'
		clientId='7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu'
		redirec_uri={window.location.origin}
		cacheLocation='localstorage'
	>
		<ProductsProvider>
			<FilterProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</FilterProvider>
		</ProductsProvider>
	</Auth0Provider>
)
