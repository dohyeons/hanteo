"use client";

import ContentCard from "@/components/ContentCard";
import ContentList from "@/components/ContentList";
import axios from "axios";

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

export default function Page() {
  return (
    <ContentList
      queryKey={["charging"]}
      fetchFunction={fetchPosts}
      renderItem={(item) => <ContentCard key={item.id} title={item.title} body={item.body} />}
    />
  );
}
