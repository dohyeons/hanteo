"use client";

import ContentCard from "@/components/ContentCard";
import ContentList from "@/components/ContentList";
import fetchPosts from "@/lib/\bapi/fetchPosts";

export default function WhookPage() {
  return (
    <ContentList
      queryKey={["whook"]}
      fetchFunction={fetchPosts}
      renderItem={(item) => <ContentCard key={item.id} title={item.title} body={item.body} />}
    />
  );
}
