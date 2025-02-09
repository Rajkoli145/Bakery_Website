import { useState } from 'react';
import { FunnelIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/20/solid';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';

// Sample products data (in a real app, this would come from an API)
const products = [
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
  },
  // Add more products as needed
];

const sortOptions = [
  { name: 'Most Popular', value: 'popular' },
  { name: 'Newest', value: 'newest' },
  { name: 'Price: Low to High', value: 'price-asc' },
  { name: 'Price: High to Low', value: 'price-desc' },
];

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    dietary: [],
    price: [],
  });
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const handleFilterChange = (filterType, value, isChecked) => {
    setSelectedFilters((prev) => {
      const currentFilters = [...(prev[filterType] || [])];
      if (isChecked) {
        currentFilters.push(value);
      } else {
        const index = currentFilters.indexOf(value);
        if (index > -1) {
          currentFilters.splice(index, 1);
        }
      }
      return {
        ...prev,
        [filterType]: currentFilters,
      };
    });
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Add filtering logic based on selectedFilters
    return true; // For now, return all products
  });

  // Sort products based on sortBy value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white pt-16">
      <div className="container-custom py-16">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-serif">Our Products</h1>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-4 flex">
              <button
                type="button"
                className={`p-2 ${viewMode === 'grid' ? 'text-primary-600' : 'text-gray-400'}`}
                onClick={() => setViewMode('grid')}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button
                type="button"
                className={`p-2 ${viewMode === 'list' ? 'text-primary-600' : 'text-gray-400'}`}
                onClick={() => setViewMode('list')}
              >
                <ListBulletIcon className="h-5 w-5" />
              </button>
            </div>

            <button
              type="button"
              className="ml-4 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 pt-6">
          {/* Filters */}
          <div className="hidden lg:block">
            <ProductFilters
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
