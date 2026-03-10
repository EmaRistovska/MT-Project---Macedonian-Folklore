"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* Highlight component */
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-foreground transition-colors duration-300 hover:text-primary hover:bg-primary/10 px-1 rounded">
      {children}
    </span>
  );
}

/* Data */
const folkloreFacts: { title: string; description: React.ReactNode }[] = [
  {
    title: "Ракотворби",
    description: (
      <>
        Една од највидливите форми на фолклорот се {" "}
        <Highlight>ракотворбите</Highlight> - народна уметност која претставува материјален израз
        на традицијата и креативноста на народот. Во нив се вткаени
        умешноста, симболиката и духот на заедницата преку{" "}
        <Highlight>
          ткаенини, везови, дрворезби, грнчарија и народни носии.
        </Highlight>{" "}
        Посебно место имаат македонските ракотворби како филигранот, ткаените килими, 
        охридските бисери и традиционалните везови кои се препознатлив дел од културното наследство.
      </>
    ),
  },
  {
    title: "Усна - преносна традиција",
    description: (
      <>
        Посебно место во фолклорот завзема
        <Highlight>усната традиција</Highlight>, каде што{" "}
        <Highlight>зборот</Highlight> е главниот чувар на минатото. Преку
        народни приказни, легенди, преданија, песни, гатанки и поговорки, луѓето ја
        пренесуваат својата <Highlight>мудрост, верувања и поуки</Highlight>,
        создавајќи мост меѓу стварното и митското, меѓу вистината и фантазијата. 
        Преку усната традиција се зачувуваат вредностите, искуствата и поуките што народот ги собирал низ вековите.
      </>
    ),
  },
  {
    title: "Традиции и обичаи",
    description: (
      <>
        Фолклорот живее и во <Highlight>обичаите</Highlight> и{" "}
        <Highlight>традициите</Highlight>
        што ги следат важните моменти од животот на народот. Свадбите, славите, фестивалите
        и народните средби не се само настани, туку{" "}
        <Highlight>живи традиции</Highlight> во кои се изразуваат вредностите,
        верувањата и колективниот дух на заедницата. Преку нив, традицијата
        постојано се обновува и продолжува да живее.
      </>
    ),
  },
];

export function FolkloreSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showItems, setShowItems] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      folkloreFacts.forEach((_, i) => {
        setTimeout(() => setShowItems((prev) => prev + 1), i * 600); // 600ms delay
      });
    }
  }, [isVisible]);

  return (
    <section
      id="folklore"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-24"
    >
      <div className="absolute inset-0 opacity-15">
      <Image
        src="/images/folklorSlika.jpg"
        alt="Folklore Background"
        fill
        priority
        className="object-cover"
      />
      </div>

      {/* Dark Overlay */}

      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Фолклор
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/70">
            Фолклорот претставува духовно и културно богатство на еден народ. Тој опфаќа сè што
            создал народот и потекнува од два збора - <Highlight>"folk"</Highlight>, што значи народ и <Highlight>"lore"</Highlight>, што значи творештво. 
            Фолклорот е живо богатство во кое се испреплетуваат традицијата, обичаите,
            верувањата и народната мудрост. Се пренесува од генерација на
            генерација и претставува важен дел од националниот идентитет. Преку
            народни песни, легенди, приказни, обичаи и ора, фолклорот ја чува
            историјата и го раскажува животот на македонскиот народ низ времето.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16">
          {/* CARDS */}
          <div className="grid gap-8 md:grid-cols-3 rounded-xl">
            {folkloreFacts.map((fact, index) => {
              const visible = showItems > index;

              return (
                <div
                  key={fact.title}
                  className={`
                    group relative rounded-2xl p-8
                    bg-background/80 shadow-xl
                    border border-white/20
                    transition-all duration-700
                    hover:border-primary hover:shadow-lg
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                >
                  <h3 className="mb-4 text-xl font-bold text-foreground text-center group-hover:text-primary transition-colors">
                    {fact.title}
                  </h3>

                  <p className="text-foreground/60 leading-relaxed text-justify">
                    {fact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
