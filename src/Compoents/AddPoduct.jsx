"use client";

import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    img1: null,
    img2: null,
    img3: null,
    title: '',
    desc: '',
    price: '',
    discountPercent: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted product:", formData);

    // Example: prepare form data for upload
    const uploadData = new FormData();
    uploadData.append('img1', formData.img1);
    uploadData.append('img2', formData.img2);
    uploadData.append('img3', formData.img3);
    uploadData.append('title', formData.title);
    uploadData.append('desc', formData.desc);
    uploadData.append('price', formData.price);
    uploadData.append('discountPercent', formData.discountPercent);

    // Example API call:
    // fetch('/api/upload-product', {
    //   method: 'POST',
    //   body: uploadData,
    // });

    alert("Product data logged to console!");
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center py-[20px]">
      <p className="text-black text-[25px] font-bold mb-[15px] mt-[30px] underline  ">
        ADD PRODUCT
      </p>

      <div className="bg-white text-gray-600 flex flex-col items-center gap-[12px] p-[20px] rounded-[5px] w-[300px]">
        <input
          type="file"
          name="img1"
          accept="image/*"
          onChange={handleFileChange}
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full file:cursor-pointer"
        />
        <input
          type="file"
          name="img2"
          accept="image/*"
          onChange={handleFileChange}
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full file:cursor-pointer"
        />
        <input
          type="file"
          name="img3"
          accept="image/*"
          onChange={handleFileChange}
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full file:cursor-pointer"
        />

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Product Title"
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full outline-none"
        />
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleInputChange}
          placeholder="Add Description of at least 120 words"
          rows="3"
          className="text-[14px] border-[2px] border-gray-600 rounded-[5px] p-[10px] w-full outline-none resize-none"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full outline-none"
        />
        <input
          type="number"
          name="discountPercent"
          value={formData.discountPercent}
          onChange={handleInputChange}
          placeholder="Discount (%)"
          className="text-[14px] border border-gray-600 rounded-[5px] p-[10px] w-full outline-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-black text-white mt-[20px] px-[15px] py-[8px] rounded-[3px] font-bold hover:bg-gray-100 hover:text-black"
      >
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
