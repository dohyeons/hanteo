import { redirect } from "next/navigation";

export default function Home() {
  // / 경로로 접근 시 /chart로 리다이렉트
  redirect("/chart");
}
