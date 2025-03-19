import Link from 'next/link';

export default async function Home() {
  return (
    <div className="bg-white text-black">
      <nav className="flex justify-between items-center p-5 bg-black shadow-md backdrop-blur-lg bg-opacity-70">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">My Store</Link>
          <div className="flex gap-4">
            <Link href="/register"
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition backdrop-blur-lg bg-opacity-70"
            >
              Register
            </Link>
            <Link href="/login"
              className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition backdrop-blur-lg bg-opacity-70"
            >
              LogIn
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?black,white,shopping')" }}
      >
        <div className="relative z-10 text-center text-black bg-white bg-opacity-40 p-6 rounded-lg backdrop-blur-md">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop the Latest Trends</h1>
          <p className="text-lg md:text-xl mb-6">Discover exclusive deals and premium collections.</p>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-70">
            Shop Now
          </button>
        </div>
      </div>
      {/* Description */}
      <section className="p-10 text-center bg-gray-100">
        <h3 className="text-3xl font-semibold text-black">Why Shop With Us?</h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">We provide high-quality products with fast delivery and 24/7 customer support. Shop with confidence and get the best deals on your favorite products.</p>
      </section>
      {/* Footer */}
      <footer className="p-6 bg-black text-center shadow-md backdrop-blur-lg bg-opacity-70">
        <p className="text-white">&copy; 2024 ShopEase. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="text-white hover:text-gray-400">Facebook</a>
          <a href="#" className="text-white hover:text-gray-400">Twitter</a>
          <a href="#" className="text-white hover:text-gray-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
