import Image from "next/image";

const data = [
  {
    name: "JakGo",
    link: "https://jakarta.go.id/",
    image: "/images/jakgo.png",
  },
  {
    name: "Smart City",
    link: "https://smartcity.jakarta.go.id/",
    image: "/images/smartcity.png",
  },
  {
    name: "Satu Data",
    link: "https://satudata.jakarta.go.id/home",
    image: "/images/satudata.png",
  },
  {
    name: "Jaki",
    link: "https://jaki.jakarta.go.id/id/",
    image: "/images/jaki.png",
  },
  {
    name: "PPDI",
    link: "https://ppid.jakarta.go.id/",
    image: "/images/ppdi.png",
  },
  {
    name: "Berita Jakarta",
    link: "https://www.beritajakarta.id/",
    image: "/images/beritajakarta.png",
  },
  {
    name: "Jakarta Satu",
    link: "https://jakartasatu.jakarta.go.id/",
    image: "/images/jakartasatu.jpeg",
  },
  {
    name: "JDIH",
    link: "https://jdih.jakarta.go.id/Jakarta-Timur",
    image: "/images/jdih.jpeg",
  },
];

export const PartnerSection = () => {
  return (
    <div className="hidden md:flex justify-center py-14">
      <div className="flex-1 max-w-screen-2xl">
        <div className="grid grid-cols-8">
          {data.map((row) => (
            <a
              key={row.link}
              href={row.link}
              className="flex justify-center items-center"
            >
              <Image
                src={row.image}
                alt={row.name}
                height={60}
                width={120}
                className="w-auto h-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
