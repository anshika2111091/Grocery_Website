import React, { useEffect, useState } from 'react';
import { dummyProducts } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import ItemCard from '../components/ItemCard';

const Product = () => {
  const [item, setItem] = useState([]);
  const location = useLocation();
  const subPath = location.pathname.replace('/products/', '');

  useEffect(() => {
    const filteredItems = dummyProducts.filter((item) =>
      item.category.toLowerCase().includes(subPath.toLowerCase())
    );
    setItem(filteredItems);
    console.log(filteredItems);
  }, [subPath]);

  return (
    <>
      <div className="xl:w-[80vw] w-[95vw] mx-auto my-10">
        {/* Heading */}
        {item.length > 0 && (
          <div className="flex flex-col mb-16 relative">
            <p className="text-2xl md:text-2xl font-medium whitespace-nowrap text-gray-700">
              {item[0].category}
            </p>
            <span className="bg-[#4fbf8b] h-0.5 rounded-full absolute bottom-0 w-[70px]"></span>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {item.map((product, index) => (
            <ItemCard key={index} item={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
