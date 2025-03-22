import Image from "next/image";

type ContentCardProps = {
  title: string;
  body: string;
};
export default function ContentCard({ title, body }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg flex gap-4 w-full shadow-card">
      <Image
        src={"/default_image.jpg"}
        alt={"순위 이미지"}
        width={1280}
        height={850}
        className="max-w-[100px] md:max-w-[200px] w-full rounded-lg"
      />
      <div className="flex flex-col p-2">
        <h3 className="text-lg font-bold line-clamp-1 overflow-hidden text-ellipsis">{title}</h3>
        <p className="line-clamp-2 overflow-hidden text-ellipsis">{body}</p>
      </div>
    </div>
  );
}
