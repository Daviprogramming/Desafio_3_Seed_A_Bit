"use client";
import {
  getProducts,
  GetProductsDTO,
  postProducts,
  Product,
} from "@/services/api";
import { useState } from "react";
export function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await postProducts({
      title,
      description: "Descrição padrão",
      price,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>
      <label>
        Nome:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Iphone 9"
          required
        />
      </label>
      <label>
        Preço:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="ex:500"
          required
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
  );
}
