import { ProductsList } from '../parts/products/ProductsList'
import { NewProductForm } from '../parts/products/NewProductForm'

function Root() {
	return (
		<div id="main">
			<div id="menu">
				<nav>
					<a>Products</a>
					<a>Sellers</a>
				</nav>
			</div>
			<div id="main-page">
				<h2>My Products App</h2>
				<hr></hr>
				<NewProductForm />
				<ProductsList />
			</div>
		</div>
	)
}

export default Root