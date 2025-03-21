import DragScrollContainer from "@/components/DragScrollContainer";
import Link from "next/link";

// Define navigation items in an array for better scalability
const NAV_ITEMS = [
  { label: "차트", path: "/chart" },
  { label: "Whook", path: "/whook" },
  { label: "이벤트", path: "/events" },
  { label: "뉴스", path: "/news" },
  { label: "스토어", path: "/store" },
  { label: "충전소", path: "/charging" },
];

export default function Header() {
  return (
    <header className="fixed z-50 top-0 left-0 flex items-center px-2 right-0 bg-header-pink h-9">
      <DragScrollContainer>
        <ul className="w-full min-w-[450px] gap-4 max-w-[1200px] h-full flex mx-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </DragScrollContainer>
    </header>
  );
}
