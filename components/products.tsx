"use client";
import React, { useEffect, useState } from "react";
import useProductsService from "@/utils/ProductService";
import { IProduct } from "@/interface/product.interface";

interface IProps {
  products: IProduct[];
}

const Products: React.FC<IProps> = (props) => {
  const { loading, error, getAllProducts } = useProductsService();
  const [products, setProducts] = useState<IProduct[]>(props.products);

  const loadProducts = async () => {
    const res = await getAllProducts();
    if (Array.isArray(res)) {
      setProducts(res);
    }
  };

  useEffect(() => {
    void loadProducts();
  }, []);

  console.log("products:", products);

  if (error) {
    return <div>ERROR</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
