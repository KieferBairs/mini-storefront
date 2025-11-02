'use client';

import {useEffect, useMemo, useState} from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('All');
    const [maxPrice, setMaxPrice] = useState("");
    const [cart, setCart] = useState({});
    const [status, setStatus] = useState("loading");

    // Fetch products from the API
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setStatus("success");
            })
            .catch(() => setStatus("error"));
    }, []);

    // Stock Simulation Effect
    useEffect(() => {
        const id = setInterval(() => {
            set Products((prev) => 
                prev.map((p) => 
                    Math.random() < 0.2 && p.stock > 0
                        ? { ...p, stock: p.stock - 1 }
                        : p
                )
            );
        }, 5000);
        return () => clearInterval(id);
    }, []);

    // Filter
    const filtered = products.filter((p) => {
        const catOk = category === 'All' || p.category === category;
        const price0K = !maxPrice || p.price <= Number(maxPrice);
        return catOk && price0K;
    });

    // Cart Logic
    const addToCart = (prod) => {
        if (prod.stock === 0) return;
        setCart((prev) => {
            const exists =prev.find((i) => i.id === prod.id);
            return exists 
                ? prev.map((i) =>
                    i.id === prod.id ? { ...i, qty: i.qty + 1 } : i
                )
                : [...prev, { id: prod.id, qty: 1 }];
        });
        setProducts((prev) =>
            prev.map((p) =>
                p.id === prod.id ? { ...p, stock: p.stock - 1 } : p
            )
        );
    };
        }            

