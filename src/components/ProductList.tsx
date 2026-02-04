"use client";
import { getProducts, GetProductsDTO, Product } from "@/services/api";
import { useEffect, useState } from "react";
export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProducts().then((products) => setProducts(products));
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <span>
          {products.map((p) => (
            <li>
              {p.title} - {p.price}
            </li>
          ))}
        </span>
      )}
    </div>
  );
}
