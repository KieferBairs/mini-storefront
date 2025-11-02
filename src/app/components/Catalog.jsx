'use client';

import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
  const [status, setStatus] = useState("loading");     // loading | ready | error
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);                // [{ id, qty }]
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  // fetch once
  useEffect(() => {
    fetch("/api/products")
      .then(r => r.json())
      .then(data => { setProducts(data); setStatus("ready"); })
      .catch(() => setStatus("error"));
  }, []);

  // stock simulation + cleanup
  useEffect(() => {
    if (status !== "ready") return;
    const tid = setInterval(() => {
      setProducts(prev =>
        prev.map(p =>
          Math.random() < 0.2 && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
        )
      );
    }, 5000);
    return () => clearInterval(tid);
  }, [status]);

  // derived filters
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filtered = products.filter(p => {
    const catOk = category === "All" || p.category === category;
    const priceOk = !maxPrice || p.price <= Number(maxPrice);
    return catOk && priceOk;
  });

  // cart ops
  const addToCart = (prod) => {
    if (prod.stock === 0) return;
    setCart(prev => {
      const found = prev.find(i => i.id === prod.id);
      return found
        ? prev.map(i => i.id === prod.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { id: prod.id, qty: 1 }];
    });
    setProducts(prev => prev.map(p => p.id === prod.id ? { ...p, stock: p.stock - 1 } : p));
  };

  const decrementFromCart = (prodId) => {
    setCart(prev => {
      const line = prev.find(i => i.id === prodId);
      if (!line) return prev;
      if (line.qty === 1) return prev.filter(i => i.id !== prodId);
      return prev.map(i => i.id === prodId ? { ...i, qty: i.qty - 1 } : i);
    });
    setProducts(prev => prev.map(p => p.id === prodId ? { ...p, stock: p.stock + 1 } : p));
  };

  const resetCart = () => {
    // restore stock from cart
    setProducts(prev => {
      const next = prev.map(p => {
        const line = cart.find(i => i.id === p.id);
        return line ? { ...p, stock: p.stock + line.qty } : p;
      });
      return next;
    });
    setCart([]);
  };

  // status UI
  if (status === "loading") return <StatusMessage type="loading" text="Loading products..." />;
  if (status === "error")   return <StatusMessage type="error" text="Failed to load products." />;

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <CategoryFilter value={category} options={categories} onChange={setCategory} />
        <PriceFilter value={maxPrice} onChange={setMaxPrice} />
      </div>

      {filtered.length === 0 ? (
        <StatusMessage type="empty" text="No products match your filters." />
      ) : (
        <ProductList products={filtered} onAdd={addToCart} />
      )}

      <CartSummary
        cart={cart}
        products={products}
        onDecrement={decrementFromCart}
        onReset={resetCart}
      />
    </div>
  );
}
