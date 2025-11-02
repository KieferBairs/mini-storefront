// src/app/page.js
import Catalog from "./components/Catalog";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
       <h1 className="text-2xl font-semibold mb-4">Mini Storefront</h1>
         <Catalog />
     </main>
      );
    }
  