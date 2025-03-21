"use client";

import ContentList from "@/components/ContentList";
import axios from "axios";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
const fetchPosts = async ({
  pageParam = 1,
}): Promise<{ data: Post[]; nextPage: number | null }> => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`,
    );
    return { data: res.data, nextPage: res.data.length < 10 ? null : pageParam + 1 };
  } catch {
    throw new Error("Failed to fetch posts");
  }
};

export default function ChartPage() {
  return (
    <ContentList
      queryKey={["chart"]}
      fetchFunction={fetchPosts}
      renderItem={(item) => (
        <div key={item.id} className="bg-white rounded-lg flex gap-4 w-full shadow-card">
          <Image
            src={"/default_image.jpg"}
            alt={"순위 이미지"}
            width={1280}
            height={850}
            className="max-w-[100px] md:max-w-[200px] w-full rounded-lg"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold line-clamp-1 overflow-hidden text-ellipsis">
              {item.title}
            </h3>
            <p className="line-clamp-2 overflow-hidden text-ellipsis">{item.body}</p>
          </div>
        </div>
      )}
    />
  );
}
