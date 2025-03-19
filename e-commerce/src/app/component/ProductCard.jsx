'use client';
import { useCartStore } from '../../store/cartStore';

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow w-80 sm:w-96 mx-auto">
      <img 
        src={product.image_url} 
        alt={product.name} 
        className="w-full h-52 object-cover mb-4 rounded-lg shadow-md"
      />
      <h3 className="text-xl font-semibold text-white">{product.name}</h3>
      <p className="text-gray-300 font-medium">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg hover:from-gray-600 hover:to-gray-800 transition duration-300 w-full shadow-md"
      >
        Add to Cart
      </button>
    </div>
  );
}
