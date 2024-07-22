"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),  
      });

      router.push("/")

    } catch (error) {
      console.log(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <button className=" bg-teal-500 text-white px-4 py-1 mb-4 ">
          <Link className=" text-[14px]" href="/">
            View Feed
          </Link>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Create a Post</h2>

        <form
          onSubmit={handleSubmit}
          className=" border-2 border-[#a7a7a7] p-8"
        >
          <div className="mb-4">
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="content"
              name="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the content"
              rows="3"
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
