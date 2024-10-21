"use client"
import { useEffect, useState } from "react";

const useAllProducts = (page, limit, searchValue, category) => {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/products?page=${page}&limit=${limit}&search=${searchValue}&category=${category}`
        );
        const data = await response.json();
        setProducts(data?.data?.result);

        setProductsCount(data?.data?.total);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [page, limit, reload, searchValue, category]);

  return {
    products,
    reload,
    setLoading,
    setReload,
    productsCount,
    loading,
  };
};

export default useAllProducts;
