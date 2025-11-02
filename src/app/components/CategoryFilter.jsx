'use client';

export default function CategoryFilter({value, options, onChange}) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Category</label>
            <select
                className="border rounded px-2 py-1"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}