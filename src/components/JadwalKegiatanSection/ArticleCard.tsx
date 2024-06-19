import Image from "next/image";

interface ArticleCardProps {
  title: string;
  link: string;
  createdAt: string;
}

export const ArticleCard = ({ title, link, createdAt }: ArticleCardProps) => {
  return (
    <a
      href={link}
      className="flex items-center gap-2 border-b-2 border-dotted border-[#FF50AA] px-2 py-2"
    >
      <Image
        src="/images/article.png"
        width={64}
        height={64}
        alt=""
        className="w-16 h-16"
      />
      <div className="flex-1 flex flex-col gap-2 p-2">
        <div className="flex justify-between items-center">
          <div className="text-[#FF50AA] text-xs">Artikel</div>
          <div className="text-[#FF50AA] text-xxs">{createdAt}</div>
        </div>
        <h4 className="text-sm text-[#171717]">{title}</h4>
      </div>
    </a>
  );
};
