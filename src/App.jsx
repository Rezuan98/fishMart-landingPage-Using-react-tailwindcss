import React, { useState } from 'react'; // Import useState
import { Fish, Truck, Package, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

// Product data structure using PropTypes instead of TypeScript
const products = [
  {
    id: 1,
    name: "Fresh Salmon",
    price: 24.99,
    description: "Premium Atlantic salmon, fresh and rich in omega-3"
  },
  {
    id: 2,
    name: "Tuna Steak",
    price: 29.99,
    description: "Sushi-grade yellowfin tuna steaks"
  },
  {
    id: 3,
    name: "Sea Bass",
    price: 19.99,
    description: "Wild-caught Mediterranean sea bass"
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderFormVisible, setOrderFormVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8" />
              <span className="text-2xl font-bold">OceanFresh</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-300">Home</a>
              <a href="#services" className="hover:text-blue-300">Services</a>
              <a href="#products" className="hover:text-blue-300">Products</a>
              <a href="#faq" className="hover:text-blue-300">FAQ</a>
            </nav>
            <button className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1200/600"
            alt="Ocean background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Fresh From The Ocean To Your Table</h1>
            <p className="text-xl mb-8">Experience the finest selection of fresh seafood, delivered with care and sustainability in mind.</p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Explore Our Catch
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Truck className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Same Day Delivery</h3>
              <p className="text-gray-600">Fresh seafood delivered to your doorstep within hours of catch.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Package className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Packaging</h3>
              <p className="text-gray-600">Vacuum-sealed packaging to maintain freshness and quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Fish className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-gray-600">Carefully selected fresh catch from sustainable sources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Fresh Catch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={`/api/placeholder/600/400`} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setOrderFormVisible(true);
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      {orderFormVisible && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Order {selectedProduct.name}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <input 
                  type="number" 
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border rounded-lg p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Delivery Address</label>
                <textarea className="w-full border rounded-lg p-2" rows={3}></textarea>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  Total: ${(selectedProduct.price * quantity).toFixed(2)}
                </span>
                <div className="space-x-2">
                  <button 
                    onClick={() => setOrderFormVisible(false)}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-6 w-6" />
                <span className="text-xl font-bold">OceanFresh</span>
              </div>
              <p className="text-blue-200">Bringing the ocean's finest to your table, sustainably and responsibly.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
                <li><a href="#products" className="text-blue-200 hover:text-white">Products</a></li>
                <li><a href="#faq" className="text-blue-200 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@oceanfresh.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Harbor Drive, Seaside, CA</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 8am - 6pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">&copy; 2024 OceanFresh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;