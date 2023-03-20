import { Input } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';
import ProductCard from '../../components/card/card';
import { myProducts } from '../../data-example';
import './style.sass';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');
  // let value = '';
  // let
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value); // Log the input value
    setSearchValue(value);
  };

  const filteredProducts = myProducts.filter((product) => product.title.includes(searchValue));

  return (
    <div className="about">
      <Input.Search
        placeholder="Search"
        value={searchValue}
        onSearch={(value) => console.log(value)}
        onChange={handleSearchChange}
      />
      {filteredProducts.length > 0 ? (
        <ProductCard products={filteredProducts} />
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
