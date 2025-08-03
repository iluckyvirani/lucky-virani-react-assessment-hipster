import { useTheme } from '../context/ThemeContext'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  title: string
  image: string
  price: number
}

const ProductGrid = () => {
  const { theme } = useTheme()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ${theme === 'theme3' ? 'p-6' : 'p-4'
        }`}
    >
      {products.map(product => (
        <div
          key={product.id}
          className="rounded-lg shadow-md transition hover:scale-105 p-4 flex flex-col"
          style={{
            backgroundColor: 'var(--card-bg)',
            border: theme === 'theme3' ? '2px solid var(--accent-color)' : 'none'
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-32 object-contain mb-4 p-2"
          />
          <h3
            className="text-md font-bold mt-2 text-center"
            style={{ color: 'var(--text-color)' }}
          >
            {product.title.slice(0, 20)}...
          </h3>
          <p
            className="text-center mt-2 mb-4"
            style={{ color: 'var(--accent-color)' }}
          >
            ${product.price}
          </p>

          {/* Button Group */}
          <div className="mt-auto flex gap-2">
            <button
              className="flex-1 py-2 rounded-md font-medium transition cursor-pointer"
              style={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                border: '1px solid var(--accent-color)'
              }}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 py-2 rounded-md font-medium transition cursor-pointer"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--accent-color)',
                border: '1px solid var(--accent-color)'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid