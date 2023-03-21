import { Input } from 'antd';
import { useState } from 'react';
import ProductCard from '../../components/card/card';
import { myProducts } from '../../assets/data/data-example';
import './style.sass';

export default function Main() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredProducts = myProducts.filter((product) => product.title.includes(searchValue));

  return (
    <div className="about">
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
    </div>
  );
}
