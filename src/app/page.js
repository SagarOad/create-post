import PostCard from "@/components/PostCard";
import prisma from "../../lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-[32px] font-bold mb-6">Feed</div>
      <PostCard posts={posts} />
    </main>
  );
}
