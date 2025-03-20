export default function Header() {
  return (
    <header className="fixed top-0 left-0  px-2 right-0 bg-header-pink h-9">
      <ul className="w-full min-w-[640px] gap-4 max-w-[1200px] h-full items-center flex mx-auto">
        <li>차트</li>
        <li>Whook</li>
        <li>이벤트</li>
        <li>뉴스</li>
        <li>스토어</li>
        <li>충전소</li>
      </ul>
    </header>
  );
}
