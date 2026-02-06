import { ProductList } from "@/components/ProductList/index";
import { Suspense } from "react";
export default function Products() {
  return (
    <main className="min-h-screen py-12">
      <Suspense
        fallback={
          <div className="text-center p-10">Carregando parâmetros...</div>
        }
      >
        <ProductList />
      </Suspense>
    </main>
  );
}
