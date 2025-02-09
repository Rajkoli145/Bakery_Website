import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const filters = {
  categories: [
    { value: 'cakes', label: 'Cakes' },
    { value: 'cupcakes', label: 'Cupcakes' },
    { value: 'pastries', label: 'Pastries' },
    { value: 'cookies', label: 'Cookies' },
    { value: 'breads', label: 'Breads' },
  ],
  dietary: [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten Free' },
    { value: 'sugar-free', label: 'Sugar Free' },
  ],
  price: [
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 to $50' },
    { value: '50-100', label: '$50 to $100' },
    { value: '100+', label: 'Over $100' },
  ],
};

export default function ProductFilters({ selectedFilters, onFilterChange }) {
  return (
    <div className="w-full">
      {Object.entries(filters).map(([filterType, options]) => (
        <Disclosure as="div" key={filterType} className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900 capitalize">
                    {filterType}
                  </span>
                  <span className="ml-6 flex items-center">
                    <ChevronDownIcon
                      className={`h-5 w-5 ${open ? '-rotate-180' : 'rotate-0'} transition-transform`}
                    />
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-4">
                  {options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={option.value}
                        name={`${filterType}[]`}
                        value={option.value}
                        type="checkbox"
                        checked={selectedFilters[filterType]?.includes(option.value)}
                        onChange={(e) => {
                          const value = e.target.value;
                          const isChecked = e.target.checked;
                          onFilterChange(filterType, value, isChecked);
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label
                        htmlFor={option.value}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
