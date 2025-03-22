"use client";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`group flex size-9 cursor-pointer transform items-center justify-center rounded-full bg-blue-6 transition-all duration-300 ease-in-out `}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
