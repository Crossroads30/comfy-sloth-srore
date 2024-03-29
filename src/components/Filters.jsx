import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
	const {
		updateFilters,
		clearFilters,
		all_products,
		filters: {
			text,
			category,
			company,
			color,
			min_price,
			price,
			max_price,
			shipping,
		},
	} = useFilterContext()

	const categories = getUniqueValues(all_products, 'category')
	const companies = getUniqueValues(all_products, 'company')
	const colors = getUniqueValues(all_products, 'colors')

	return (
		<Wrapper>
			<div className='content'>
				<form onSubmit={e => e.preventDefault()}>
					{/* search input */}
					<div className='form-control'>
						<input
							type='text'
							name='text'
							placeholder='search'
							className='search-input'
							value={text}
							onChange={updateFilters}
						/>
					</div>
					{/* end search input */}
					{/* categories */}
					<div className='form-control'>
						<h5>catigory</h5>
						<div>
							{categories.map((cat, index) => {
								return (
									<button
										key={index}
										onClick={updateFilters}
										name='category'
										type='button'
										className={`${
											category === cat.toLowerCase() ? 'active' : null
										}`}
									>
										{cat}
									</button>
								)
							})}
						</div>
					</div>
					{/* end of categories */}
					{/* companies */}
					<div className='form-control'>
						<h5>company</h5>
						<select
							name='company'
							className='company'
							value={company}
							onChange={updateFilters}
						>
							{companies.map((com, index) => {
								return (
									<option key={index} value={com}>
										{com}
									</option>
								)
							})}
						</select>
					</div>
					{/* end of companies */}
					{/* colors */}
					<div className='form-control'>
						<h5>colors</h5>
						<div className='colors'>
							{colors.map((col, index) => {
								// for 'all' btn there is different return:
								if (col === 'all') {
									return (
										<button
											key={index}
											type='button'
											name='color'
											onClick={updateFilters}
											data-color='all'
											className={`${
												color === 'all' ? 'all-btn active' : 'all-btn'
											}`}
										>
											all
										</button>
									)
								}
								return (
									<button
										type='button'
										key={index}
										name='color'
										style={{ background: col }}
										className={`${
											color === col ? 'color-btn active' : 'color-btn'
										}`}
										data-color={col}
										onClick={updateFilters}
									>
										{color === col ? <FaCheck /> : null}
									</button>
								)
							})}
						</div>
					</div>
					{/* end of colors */}
					{/* price */}
					<div className='form-control'>
						<h5>price</h5>
						<p className='price'>{formatPrice(price)}</p>
						<input
							type='range'
							name='price'
							onChange={updateFilters}
							min={min_price}
							max={max_price}
							value={price} // value from this input by default is STRING!!!
						/>
					</div>
					{/* end of price */}
					{/* shipping */}
					<div className='form-control shipping'>
						<label htmlFor='shipping'>free shipping</label>
						<input
							type='checkbox'
							name='shipping'
							id='shipping'
							onChange={updateFilters}
              checked={shipping}
						/>
					</div>
					{/* end of shipping */}
				</form>
        <button type="button" className='clear-btn' onClick={clearFilters}>clear filters</button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}

	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
	.active {
		border-color: var(--clr-grey-5);
	}
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.3;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
	.price {
		margin-bottom: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.rem;
		font-size: 1rem;
		max-width: 130px;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`

export default Filters
