import ContentHeader from "@/app/(common)/_components/ContentHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex flex-col gap-2">
      <ContentHeader />
      <div className="flex flex-col gap-4 w-full">{children}</div>
    </div>
  );
}
