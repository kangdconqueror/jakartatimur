import Image from "next/image";
import { ArticleCard } from "./ArticleCard";

const articles = [
  {
    title:
      "Satgas Pemberantasan Judi Online Segera Terbentuk, Presiden Ingatkan Jangan Berjudi",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title: "MAHKAMAH AGUNG MENYELENGGARAKAN FORUM TEMATIK BAKOHUMAS",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title:
      "SBReaking News SBR013T2 dan SBR013T4, Pilihan Berharga Untuk Wujudkan Cita Bersama",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title: "ITIF 2024 Hasilkan 5 MoU Investasi Senilai Rp862 Miliar",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title:
      "Di ITIF 2024 Indonesia Undang Investor Asing Tanam Modal di Sektor Parekraf",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title:
      "Indonesia-India Jajaki Investasi Ekonomi Digital di Sektor Parekraf",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title:
      "International Tourism Investment Forum 2024” Sukses Digelar di Jakarta",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
  {
    title:
      "Kemenprekraf Hadirkan Budaya Betawi dalam Welcoming Dinner ITIF 2024",
    link: "#",
    createdAt: "13-06-2024 14:26",
  },
];

export const Article = () => {
  return (
    <div className="flex flex-col justify-between h-[700px] rounded overflow-hidden">
      <Image
        src="/images/pemilu-serentak-2024-header.jpeg"
        width={345}
        height={70}
        alt=""
      />
      <div className="flex-1 max-w-full border-x-4 border-[#FF50AA] w-[345px] overflow-y-scroll">
        {articles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </div>
      <Image
        src="/images/pemilu-serentak-2024-footer.jpeg"
        width={345}
        height={40}
        alt=""
      />
    </div>
  );
};
