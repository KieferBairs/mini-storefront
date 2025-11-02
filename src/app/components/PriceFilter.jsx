'use client';

export default function PriceFilter({ value, onChange }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Max Price</label>
            <input
                type="number"
                min="0"
                className="border rounded px-2 py-1 w-36"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="e.g. 200"
            />
        </div>
    );
}