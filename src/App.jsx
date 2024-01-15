import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
	About,
	Cart,
	Checkout,
	Error,
	Home,
	Products,
	SingleProduct,
	PrivateRoute,
} from './pages'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Sidebar />
			<Footer />
		</BrowserRouter>
	)
}

export default App
