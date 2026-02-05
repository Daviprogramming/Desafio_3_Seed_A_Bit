"use client";

import { getProducts, Product } from "@/services/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data as any);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Destaques SmartPink</h2>

      {isLoading ? (
        <div className={styles.loading}>Carregando vitrine...</div>
      ) : (
        <ul className={styles.grid}>
          {products.map((product) => (
            <li key={product.id} className={styles.card}>
              {}
              <div className={styles.imageContainer}>
                {product.thumbnail && (
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, 250px"
                  />
                )}
              </div>

              {}
              <div className={styles.content}>
                <span className={styles.category}>
                  {product.category || "Tech"}
                </span>
                <h3 className={styles.productTitle}>{product.title}</h3>

                <div className={styles.priceRow}>
                  <span className={styles.price}>R$ {product.price}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
