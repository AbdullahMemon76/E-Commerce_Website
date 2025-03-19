"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "../lib/supabase/client";
import Image from "next/image";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.from("products").insert([product]);

    if (error) {
      console.error("Error adding product:", error.message);
    } else {
      console.log("Product added successfully:", data);
      setProduct({ name: "", description: "", price: "", image_url: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 rounded bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 rounded bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-3 rounded bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
          <input
            type="text"
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 rounded bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
          
          {product.image_url && (
            <div className="relative w-full h-40">
              <Image src={product.image_url} alt="Product Preview" fill objectFit="cover" className="rounded-lg shadow-md" />
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105">
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
