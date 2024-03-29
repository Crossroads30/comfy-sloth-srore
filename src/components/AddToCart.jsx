import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
	const { addToCart } = useCartContext()
	const { id, stock, colors } = product

	const [mainColor, setMainColor] = useState(colors[0])
	const [amount, setAmount] = useState(1)

	const increaseAmount = () => {
		setAmount(prevAmount => {
			let tempAmount = prevAmount + 1
			if (tempAmount > stock) {
				tempAmount = stock
			}
			return tempAmount // we should return a value of amount to cart component!!!
		})
		// if (amount < stock) {
		// 	setAmount(prevAmount => prevAmount + 1)
		// } // that is wrong, course we should return a value of amount to cart component, not just increase & decrease!!!
	}

	const decreaseAmount = () => {
		setAmount(prevAmount => {
			let tempAmount = prevAmount - 1
			if (tempAmount < 1) {
				tempAmount = 1
			}
			return tempAmount // we should return a value of amount to cart component!!!
		})
		// if (amount > 1) {
		// 	setAmount(prevAmount => prevAmount - 1)
		// } // that is wrong, course we should return a value of amount to cart component, not just increase & decrease!!!
	}

	return (
		<Wrapper>
			<div className='colors'>
				<span> colors : </span>
				<div>
					{colors.map((color, index) => {
						return (
							<button
								key={index}
								className={
									mainColor === color ? 'color-btn active' : 'color-btn'
								}
								style={{ backgroundColor: `${color}` }}
								onClick={() => {
									setMainColor(colors[index])
								}}
							>
								{mainColor === color && <FaCheck />}
							</button>
						)
					})}
				</div>
			</div>
			<div className='btn-container'>
				<AmountButtons
					amount={amount}
					increaseAmount={increaseAmount}
					decreaseAmount={decreaseAmount}
				/>
				<Link
					to='/cart'
					className='btn'
					onClick={() => addToCart(id, mainColor, amount, product)}
				>
					add to cart
				</Link>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 2rem;
	.colors {
		display: grid;
		grid-template-columns: 125px 1fr;
		align-items: center;
		margin-bottom: 1rem;
		span {
			text-transform: capitalize;
			font-weight: 700;
		}
		div {
			display: flex;
		}
	}
	.color-btn {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.4;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.75rem;
			color: var(--clr-white);
		}
	}
	.active {
		opacity: 1;
	}
	.btn-container {
		margin-top: 2rem;
	}

	.btn {
		margin-top: 1rem;
		width: 140px;
	}
`
export default AddToCart
