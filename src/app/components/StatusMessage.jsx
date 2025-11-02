'use client';

export default function StatusMessage({ type, text }) {
    const style =
        type === 'error' ? 'border-red-300 text-red-700':
        type === 'loading' ? 'border-blue-300 text-blue-700' :
        'border-gray-300 text-green-700';
    return (
        <div className={`border rounded p-3 text-sm ${style}`}>
            {text}
        </div>
    );
}