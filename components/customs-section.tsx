"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Coins,
  Drama,
  Egg,
  Heart,
  Star,
  Sun,
  Waves,
  Wine,
} from "lucide-react";

const traditions = [
  {
    icon: Coins,
    title: "Бадник",
    period: "6 Јануари",
    image: "/images/badnik.jpg",
    description:
      "Бадник е значаен традиционален ден, денот пред роденденот на Исус Христос, исполнет со симболика и семејна сплотеност. Се одбележува со посна вечера и кршење на бадниковата погача со паричка, каде што оној што ќе ја најде се смета дека ќе има среќа и успех во годината. Внесувањето на бадниковото дрво во домот симболизира топлина, заштита и благосостојба.",
  },
  {
    icon: Wine,
    title: "Божиќ",
    period: "7 Јануари",
    image: "/images/bozik.jpg",
    description:
      "Божиќ е еден од најголемите христијански празници и го симболизира раѓањето на Исус Христос. Се празнува во кругот на семејството со свечена трпеза, радост и меѓусебни честитки. Обичај е домовите да се красат со божиќни декорации и да се кити елка чие, значење се поврзува со симбол на вечен живот и вечна надеж.",
  },
  {
    icon: Waves,
    title: "Водици",
    period: "19 Јануари",
    image: "/images/vodici.jpg",
    description:
      "Водици или Богојавление е денот во кој Св. Јован Крстител го крстил Исус Христос во реката Јордан. На овој ден се осветуваат водите, а крстот се фрла во река или езеро, по што верниците скокаат по него. Овој свет ритуал го симболизира влегувањето на синот божји во реката Јордан. Празникот симболизира духовно прочистување, вера и благослов.",
  },
  {
    icon: Egg,
    title: "Велигден",
    period: "Април - Мај",
    image: "/images/veligden.jpg",
    description:
      "Велигден го симболизира воскресението на Исус Христос и победата на животот над смртта. За верниците, периодот пред празникот претставува покајание, прошка, измирување, молитва, пост и учење. Се одбележува со бојадисување и кршење на велигденски јајца, најчесто во црвена боја како симбол на живот и радост. Празникот се слави со семејни собирања, свечена трпеза и меѓусебни честитки „Христос воскресе“.",
  },
  {
    icon: Heart,
    title: "Галичка свадба",
    period: "12 Јули",
    image: "/images/galicka.jpg",
    description:
      "Галичката свадба е позната македонска традиционална манифестација што се одржува во селото Галичник и ја прикажува автентичната македонска свадба. Секоја година се бира еден пар, кој гордо станува дел од оваа прочуена свадба. Таа е исполнета со народни носии, обичаи, песни и ора кои се изведуваат според старите правила. Преку Галичката свадба се чува и прикажува богатото културно наследство на Македонија.",
  },
  {
    icon: Drama,
    title: "Вевчански карневал",
    period: "13 Јануари",
    image: "/images/karneval.jpg",
    description:
      "Вевчанскиот карневал е традиционален македонски празник што се одржува секоја година во Вевчани и е познат по шарените маски, оригиналните костими и хумористичните изведби. Карневалот е форма на народна забава и сатирична критика, при што учесниците се обидуваат да ги претстават актуелните настани и општествени теми на забавен начин.",
  },
];

export function CustomsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="customs"
      ref={sectionRef}
      className="relative min-h-screen bg-background py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/customs-traditions.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-wide text-foreground md:text-5xl lg:text-6xl text-center">
                Обичаи <br /> и <br />
                Традиции
              </h2>
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed text-justify">
              Македонските обичаи претставуваат важен дел од народната традиција
              и култура и се длабоко поврзани со празнувањето на големите
              христијански празници. Преку нив се изразуваат верувањата,
              вредностите и начинот на живот на луѓето. Тие вклучуваат различни
              ритуали, семејни собирања и симболични дејства што се пренесуваат
              од генерација на генерација. Обичаите имаат голема улога во
              зачувувањето на традицијата, верата и културниот идентитет на
              народот.
            </p>
          </div>
        </div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center h-[515px] overflow-hidden">
          {traditions.map((tradition, index) => {
            const offset =
              (index - currentIndex + traditions.length) % traditions.length;

            let position = offset;
            if (position > traditions.length / 2) {
              position -= traditions.length;
            }

            return (
              <div
                key={tradition.title}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `
            translateX(${position * 260}px)
            scale(${position === 0 ? 1 : 0.8})
          `,
                  opacity: position === 0 ? 1 : 0.4,
                  zIndex: position === 0 ? 10 : 5,
                }}
              >
                <div className="w-95 h-[500px] rounded-xl overflow-hidden border border-border bg-card shadow-xl">
                  {/* IMAGE */}
                  <div className="relative h-52 w-full">
                    <Image
                      src={tradition.image}
                      alt={tradition.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <tradition.icon className="w-5 h-5 text-primary relative left-75" />
                    <h3 className="text-xl font-bold text-primary mb-2 relative bottom-6">
                      {tradition.title}
                    </h3>

                    <p className="text-xs text-primary mb-3 relative bottom-6">
                      {tradition.period}
                    </p>

                    <p className="text-sm text-foreground/70 leading-relaxed text-justify relative bottom-4">
                      {tradition.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? traditions.length - 1 : prev - 1,
              )
            }
            className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === traditions.length - 1 ? 0 : prev + 1,
              )
            }
            className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
