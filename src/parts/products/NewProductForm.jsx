import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { productAdded } from './productsSlice'

export const NewProductForm = () => {
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [price, setPrice] = useState(0)
	const [amount, setAmount] = useState(0)

	const dispatch = useDispatch()

	const onNameChanged = (e) => setName(e.target.value)
	const onDescChanged = (e) => setDesc(e.target.value)
	const onPriceChanged = (e) => setPrice(e.target.value)
	const onAmountChanged = (e) => setAmount(e.target.value)

	const onSaveProductClick = () => {
		if (name && desc && price && amount) {
			dispatch(
				productAdded({
					id: nanoid(),
					name,
					desc,
					price,
					amount,
				})
			)

			setName('')
			setDesc('')
			setPrice(0)
			setAmount(0)
		}
	}

	return (
		<div>
			<h2>Add a New Product</h2>
			<form>
				<p>
					<label htmlFor="productName">Name:</label>
					<input
						id="productName"
						name="productName"
						value={name}
						onChange={onNameChanged}
					/>
				</p>
				<p>
					<label htmlFor="productDesc">Description:</label>
					<textarea
						id="productDesc"
						name="productDesc"
						value={desc}
						onChange={onDescChanged}
					/>
				</p>
				<p>
					<label htmlFor="productPrice">Price:</label>
					<input
						id="productPrice"
						name="productPrice"
						value={price}
						onChange={onPriceChanged}
					/>
				</p>
				<p>
					<label htmlFor="productAmount">Amount:</label>
					<input
						id="productAmount"
						name="productAmount"
						value={amount}
						onChange={onAmountChanged}
					/>
				</p>
				<button type="button" onClick={onSaveProductClick}>
					save
				</button>
			</form>
		</div>
	)
}