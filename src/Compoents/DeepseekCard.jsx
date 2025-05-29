import React from 'react'

const products = [
  {
    id: 1,
    title: "Premium Leather Shoes",
    price: "$500",
    originalPrice: "$715",
    discount: "30% OFF",
    description: "Premium leather shoes designed for style and durability. Handcrafted with precision using finest materials.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    title: "Running Sneakers",
    price: "$300",
    originalPrice: "$450",
    discount: "25% OFF",
    description: "Lightweight running sneakers with cushioning for maximum comfort during workouts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
  }
];

 const DeepSeekCard = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {products.map((product) => (
        <div 
          key={product.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          {/* Image Section */}
          <div className="relative h-64 bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              {product.discount}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 bg-black text-yellow-400">
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-black text-white">{product.price}</span>
              <del className="text-gray-400">{product.originalPrice}</del>
            </div>

            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Action Button */}
            <button className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeepSeekCard
