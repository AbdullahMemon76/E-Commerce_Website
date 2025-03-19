import React from "react";
import ProductGrid from '../component/ProductGrid';
import { supabase } from '../lib/supabase/client';
import Navbar from "../component/Navbar";

async function getProducts() {
    const { data, error } = await supabase.from('products').select('*');
    return data;
}

export default async function Page() {
    const products = await getProducts();
    return (
        <>
            <Navbar />
            <main className="container mx-auto p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-blue-500 text-center">All Products</h1>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <ProductGrid products={products} />
                </div>
            </main>
        </>
    );
};
