import axiosInstance from "@/lib/axiosInstance";
import { Post } from "@/types";

const fetchPosts = async ({
  pageParam = 1,
}): Promise<{ data: Post[]; nextPage: number | null }> => {
  try {
    const res = await axiosInstance.get(`posts?_page=${pageParam}&_limit=10`);
    return { data: res.data, nextPage: res.data.length < 10 ? null : pageParam + 1 };
  } catch {
    throw new Error("Failed to fetch posts");
  }
};

export default fetchPosts;
