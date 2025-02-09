import { useState } from 'react';
import BlogCard from '../components/blog/BlogCard';

// Sample blog posts data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: 1,
    title: 'The Art of Perfect Macarons',
    excerpt: 'Master the technique of creating beautiful and delicious French macarons with our comprehensive guide.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800',
    date: 'Feb 1, 2025',
    readTime: 8,
    author: 'Chef Sarah',
    tags: ['Recipes', 'Techniques', 'French Pastries']
  },
  {
    id: 2,
    title: '5 Essential Tips for Baking the Perfect Bread',
    excerpt: 'Learn the secrets to achieving that perfect crusty exterior and soft, chewy interior in your homemade bread.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800',
    date: 'Jan 28, 2025',
    readTime: 6,
    author: 'Chef Michael',
    tags: ['Bread', 'Tips', 'Baking']
  },
  {
    id: 3,
    title: 'Decorating Cakes Like a Pro',
    excerpt: 'From basic techniques to advanced designs, discover how to take your cake decorating skills to the next level.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800',
    date: 'Jan 25, 2025',
    readTime: 10,
    author: 'Chef Emily',
    tags: ['Cakes', 'Decoration', 'Techniques']
  },
  {
    id: 4,
    title: 'Gluten-Free Baking: A Complete Guide',
    excerpt: 'Everything you need to know about gluten-free flours, substitutes, and techniques for delicious baked goods.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1586014963517-35d3380c9aa3?auto=format&fit=crop&w=800',
    date: 'Jan 22, 2025',
    readTime: 7,
    author: 'Chef David',
    tags: ['Gluten-Free', 'Health', 'Tips']
  }
];

const categories = [
  'All',
  'Recipes',
  'Techniques',
  'Tips',
  'Health',
  'Seasonal',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.tags.includes(selectedCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 py-16 pt-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Baking Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover recipes, baking tips, and techniques from our expert bakers.
            From classic pastries to modern treats, we've got something for everyone.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No articles found matching your criteria.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest recipes and baking tips delivered straight to your inbox!
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
