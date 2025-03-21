import ContentHeader from "@/app/(common)/_components/ContentHeader";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex flex-col flex-1 gap-2">
      <ContentHeader />

      <div className="flex flex-1 flex-col gap-4 w-full items-center justify-center">
        <Suspense fallback={<Spinner />}>{children} </Suspense>
      </div>
    </div>
  );
}
