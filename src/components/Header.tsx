import DragScrollContainer from "@/components/DragScrollContainer";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 flex items-center  px-2 right-0 bg-header-pink h-9">
      <DragScrollContainer>
        <ul className="w-full min-w-[450px] gap-4 max-w-[1200px] h-full flex mx-auto">
          <li>차트</li>
          <li>Whook</li>
          <li>이벤트</li>
          <li>뉴스</li>
          <li>스토어</li>
          <li>충전소</li>
        </ul>
      </DragScrollContainer>
    </header>
  );
}
