'use client';
import axios from "axios";
import { useState } from "react";


export default function AddBlogPagePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data);
  }

  const addBlog = async () => {
    try {
      await axios.post("/api/blog", {
        title,
        body: content,
        categoryId: category,
      });
      alert("Blog added successfully");
    }
    catch (error) {
      console.error(error);
      alert("Blog could not be added");
    }

  }
  return <h1>Welcome to AddBlogPagepage!</h1>;
}