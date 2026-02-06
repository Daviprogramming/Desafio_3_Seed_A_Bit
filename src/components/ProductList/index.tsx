"use client";

import { getProducts, Product } from "@/services/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Pagination } from "@/hooks/Pagination";

export function ProductList() {
  const { currentPage, changePage } = Pagination();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts(currentPage, 8);
        setProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        console.error("Erro ao carregar produtos: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Destaques SmartPink</h2>

      {isLoading ? (
        <div className={styles.loading}>Carregando vitrine...</div>
      ) : (
        <>
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
          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {" "}
              Anterior
            </button>
            <span className={styles.pageInfo}>Página {currentPage}</span>
            <button
              className={styles.pageButton}
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage * 8 >= total}
            >
              Próxima
            </button>
          </div>
        </>
      )}
    </div>
  );
}
