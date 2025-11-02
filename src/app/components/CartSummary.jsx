'use client';

export default function CartSummary({
  cart,
  products,
  onDecrement,   // (productId) => void
  onReset,       // () => void
}) {
  // compute item count + total
  let itemCount = 0;
  let total = 0;
  for (const line of cart) {
    const p = products.find(pp => pp.id === line.id);
    if (p) {
      itemCount += line.qty;
      total += p.price * line.qty;
    }
  }

  return (
    <div className="border rounded p-3">
      <h2 className="font-medium mb-2">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-sm text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-2">
          {cart.map(line => {
            const p = products.find(pp => pp.id === line.id);
            if (!p) return null;
            return (
              <div key={line.id} className="flex items-center justify-between">
                <div className="text-sm">
                  {p.name} × {line.qty} <span className="text-gray-500">(${p.price.toFixed(2)} ea)</span>
                </div>
                <button
                  className="px-2 py-0.5 border rounded text-sm"
                  onClick={() => onDecrement(line.id)}
                  aria-label={`Decrement ${p.name}`}
                >
                  −
                </button>
              </div>
            );
          })}

          <div className="flex justify-between pt-2 border-t text-sm">
            <div>Items: <strong>{itemCount}</strong></div>
            <div>Total: <strong>${total.toFixed(2)}</strong></div>
          </div>

          <button className="mt-2 px-3 py-1 border rounded text-sm" onClick={onReset}>
            Reset Cart
          </button>
        </div>
      )}
    </div>
  );
}



                    