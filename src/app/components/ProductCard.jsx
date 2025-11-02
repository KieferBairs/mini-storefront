'use client';

export default function ProductCard({ product, onAdd }) {
    const disabled = product.stock === 0;

    return (
        <div className="border rounded p-3">
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-gray-600">{product.category}</div>
            <div className="mt-2">${product.price.toFixed(2)}</div>
            <div className="mt-1 text-sm">
                {disabled ? <span className="text-red-500">Out of Stock</span> : `In Stock: ${product.stock}`}
            </div>
            <button
                className="mt-3 px-3 py-1 border rounded disabled:opacity-50"
                disabled={disabled}
                onClick={() => onAdd(product)}
            >
                Add to Cart
            </button>
        </div>
    );
}