export async function GET(){

    // Creating 12 Items With 4 Categories
    const products = [
        { id: "p1", name: "Laptop", price: 999.99, category: "Electronics", stock: 12 },
        { id: "p2", name: "Smartphone", price: 699.99, category: "Electronics", stock: 25 },
        { id: "p3", name: "Headphones", price: 199.99, category: "Electronics", stock: 30 },
        { id: "p4", name: "T-Shirt", price: 19.99, category: "Clothing", stock: 50 },
        { id: "p5", name: "Jeans", price: 49.99, category: "Clothing", stock: 40 },
        { id: "p6", name: "Jacket", price: 89.99, category: "Clothing", stock: 20 },
        { id: "p7", name: "Novel Book", price: 14.99, category: "Books", stock: 60 },
        { id: "p8", name: "Science Fiction Book", price: 24.99, category: "Books", stock: 35 },
        { id: "p9", name: "Cookbook", price: 29.99, category: "Books", stock: 45 },
        { id: "p10", name: "Blender", price: 59.99, category: "Home Appliances", stock: 15 },
        { id: "p11", name: "Microwave", price: 79.99, category: "Home Appliances", stock: 10 },
        { id: "p12", name: "Toaster", price: 39.99, category: "Home Appliances", stock: 25 },
    ];
  return Response.json(products);
}