import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import TestimonialCard from '../components/testimonials/TestimonialCard';

// Sample data (in a real app, this would come from an API)
const featuredProducts = [
  {
    id: 1,
    name: 'Chocolate Heaven Cake',
    category: 'Cakes',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800'
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    category: 'Pastries',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800'
  },
  {
    id: 3,
    name: 'Blueberry Muffins',
    category: 'Muffins',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800'
  },
  {
    id: 4,
    name: 'Red Velvet Cupcakes',
    category: 'Cupcakes',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: "The best cakes I've ever tasted! Their attention to detail is amazing.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Outstanding quality and service. My wedding cake was absolutely perfect!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200'
  }
];

export default function Home() {
  return (
    <div className="pt-16"> {/* pt-16 to account for fixed navbar */}
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1920)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container-custom relative h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-serif mb-4">Delicious Moments, Crafted with Love</h1>
            <p className="text-xl mb-8">Discover our handcrafted cakes and pastries, made fresh daily with the finest ingredients.</p>
            <Link to="/products" className="btn-primary text-lg px-8 py-3">
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif text-center mb-12">Our Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif mb-4">Special Offer</h2>
          <p className="text-xl mb-8">Get 20% off on all birthday cakes this week!</p>
          <Link to="/products" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif text-center mb-12">Follow Us on Instagram</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square">
                <img
                  src={`https://images.unsplash.com/photo-${i + 1}?auto=format&fit=crop&w=300`}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
