import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
		<Router>
			<Navbar />
			<Sidebar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route element={<PrivateRoute />}>
					<Route path='/checkout' element={<Checkout />} />
				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
