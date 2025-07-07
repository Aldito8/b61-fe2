import { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'product1', price: 10000, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
  { id: 2, name: 'product2', price: 11000, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
  { id: 3, name: 'product3', price: 12000, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
  { id: 4, name: 'product4', price: 13000, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' },
  { id: 5, name: 'product5', price: 14000, image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' }
];

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  function toogleCart(isAdded: boolean) {
    setCartCount(count => isAdded ? count + 1 : count - 1)
  }

  return (
    <div>
      <div className='product-card'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onToggle={toogleCart}
          />
        ))}
      </div>
      <p>Cart: {cartCount} item(s)</p>
    </div>
  );
};

export default App;
