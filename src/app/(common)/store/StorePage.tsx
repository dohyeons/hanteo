"use client";

import ContentCard from "@/components/ContentCard";
import ContentList from "@/components/ContentList";
import fetchPosts from "@/lib/\bapi/fetchPosts";

export default function StorePage() {
  return (
    <ContentList
      queryKey={["store"]}
      fetchFunction={fetchPosts}
      renderItem={(item) => <ContentCard key={item.id} title={item.title} body={item.body} />}
    />
  );
}
