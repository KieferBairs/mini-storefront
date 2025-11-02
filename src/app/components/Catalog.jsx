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
    
