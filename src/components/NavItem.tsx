"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ label, path }: { label: string; path: string }) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`text-sm font-bold transition-colors duration-200 ${pathname === path ? "text-white" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
}
