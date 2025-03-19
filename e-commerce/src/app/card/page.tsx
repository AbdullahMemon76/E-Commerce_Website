"use client";
import { useCartStore } from "../../store/cartStore";
import Navbar from "../component/Navbar";

// Define the CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: number;
}

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item: CartItem) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center w-[400px] mx-auto">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 w-[400px] mx-auto block"
            >
              Clear Cart
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
