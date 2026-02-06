export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getProducts(
  page: number = 1,
  limit: number = 8,
): Promise<ProductResponse> {
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Erro ao conectar com a API");
  }
  const data: ProductResponse = await response.json();
  return data;
}
export interface CreateProductDTO {
  title: string;
  description: string;
  price: number;
}

export async function postProducts(product: CreateProductDTO): Promise<void> {
  await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}
