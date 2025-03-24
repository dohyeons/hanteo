import Image from "next/image";

type BannerItemProps = {
  link: string;
  imageUrl: string;
  id: number;
  title: string;
  duration: string;
};

export default function BannerItem({ link, imageUrl, id, title, duration }: BannerItemProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="shadow-[0_1px_10px_rgba(0,0,0,0.1)] mb-3 border border-gray-200 w-full rounded-lg flex flex-col gap-4 overflow-hidden cursor-pointer">
        {/* 배너 이미지 */}
        <Image
          src={imageUrl}
          alt={`Banner ${id}`}
          width={1280}
          height={850}
          className="w-full aspect-[3/1.2] object-cover"
        />
        {/* 카드의 컨텐츠 부분 */}
        <div className="flex flex-col gap-2 px-2 py-1">
          <div className="flex justify-between">
            <div>
              <span className="font-bold max-w-[180px] truncate block">{title}</span>
            </div>
            {/* 배너 텍스트 및 투표 버튼 */}
            <button className="font-bold text-sm cursor-pointer hover:border-pink-300 hover:text-pink-300 text-pink-400 border border-pink-400 rounded-full px-2">
              투표하기
            </button>
          </div>
          <div className="ml-auto">
            <span className="text-xs">{duration}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
