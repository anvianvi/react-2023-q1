import { Input } from 'antd';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/card/card';
import { myProducts } from '../../assets/data/data-example';
import './style.sass';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  useEffect(() => {
    const savedSearchValue = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };

  const filteredProducts = myProducts.filter((product) => {
    const title = product.title.toLowerCase();
    return title.includes(searchValue);
  });

  return (
    <>
      <Input.Search
        placeholder="Search"
        value={searchValue}
        onSearch={() => handleSearchChange}
        onChange={handleSearchChange}
      />
      {filteredProducts.length > 0 ? (
        <ProductCard products={filteredProducts} />
      ) : (
        <p>No products found</p>
      )}
    </>
  );
}
