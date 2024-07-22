"use client";

import DeletePostBtn from "./DeletePostBtn";

const PostCard = ({ posts }) => {

  return (
    <div>
      {posts.map((post) => (
        <div
          className=" border-2 border-[#00000096] px-8 py-6 my-4"
          key={post.id}
        >
          <h2 className=" text-[22px] font-semibold text-center">
            {post.title}
          </h2>
          <p className="text-center text-[18px]">{post.content}</p>
          <p className=" text-[14px] text-[#808080] text-center">
            Post by{" "}
            <span className=" font-bold text-[#000000]">
              {post.author?.name}{" "}
            </span>
          </p>
          <DeletePostBtn postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostCard;
