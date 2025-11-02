'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {products.map((p) => (
        <ProductCard
          key={p.id}         // ✅ use p.id, not prod.id
          product={p}
          onAdd={() => onAdd(p)}
        />
      ))}
    </div>
  );
}
