import { useSelector } from 'react-redux'

export const ProductsList = () => {
	const products = useSelector((state) => state.products)

	const dispProducts = products.map((product) => (
		<div key={product.id}>
			<h3>{product.name}</h3>
			<p>{product.desc.substring(0, 100)}</p>
			<p>Price: {product.price}</p>
			<p>Amount: {product.amount}</p>
		</div>
	))

	return (
		<div>
			<h2>Products</h2>
			{dispProducts}
		</div>
	)
}