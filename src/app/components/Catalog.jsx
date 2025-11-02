'use client';

import {useEffect, useMemo, useState} from "react";
import ProductList from "./ProductList";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function Catalog() {

    //Status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //Filters
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState("");

    
