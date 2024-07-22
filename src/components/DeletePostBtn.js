"use client";

import { useRouter } from "next/navigation";

export default function DeletePostBtn({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
      console.log("Delete btn working");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className=" flex justify-center items-center">
      <button
        className=" bg-red-400 py-2 px-4 text-[14px] mt-4"
        onClick={handleClick}
      >
        Delete Post
      </button>
    </div>
  );
}
