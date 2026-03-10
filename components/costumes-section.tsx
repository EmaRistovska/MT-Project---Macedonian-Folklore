"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-foreground transition-colors duration-300 hover:text-primary hover:bg-primary/10 px-1 rounded">
      {children}
    </span>
  );
}

const costumeDetails = [
  {
    label: "Женски носии:",
    value:
      "Женската носија најчесто се состои од долга кошула која е богато украсена со вез, здолниште или фустан, престилка, појас и елек или друга горна облека. Носијата се надополнува со традиционални обувки, најчесто опинци. Посебно значење имаат рачно изработените украси, како марами, накит и украси за глава. Везот најчесто се поставува на ракавите, градниот дел и долниот раб на кошулата, каде што најсилно доаѓа до израз декоративната вредност.",
  },
  {
    label: "Машки носии:",
    value:
      "Машката носија обично се состои од кошула, елек, појас и панталони изработени од волнен материјал. Исто така и кај машката носија традиционалните обувки се опинци, а како покривка за глава се носеле различни видови шапки, меѓу кои и фес. Во зависност од климатските услови и регионот, се носеле и гуни, јакни или мантили.",
  },
  {
    label: "Вез",
    value:
      "Везот претставува еден од најкарактеристичните елементи на македонската носија. Се користат црвени, златни, црни и други обоени конци, а мотивите најчесто се геометриски, растителни или симболични. Овие орнаменти не служеле само како украс, туку често имале и заштитно или симболично значење. Секој регион има свои препознатливи дезени и техники на везење.",
  },
  {
    label: "Материјали",
    value:
      "Материјалите што се користеле за изработка на носиите најчесто биле природни, како волна, лен и памук, а поретко и свила. Ткаенините биле домашно ткаени и украсувани со вплетени  орнаменти или рачен вез специфичен за одредена област.",
  },
  {
    label: "Додатоци",
    value:
      "Значаен дел од носијата претставуваат и додатоците, како сребрен накит, монети, монистра, украсни појаси и украси за глава. Овие елементи често го означувале брачниот статус или општествената положба на личноста.",
  },
  {
    label: "Регионални разлики",
    value:
      "Македонските народни носии се разликуваат во зависност од регионот, бидејќи секоја област развила свој стил, карактеристични бои и мотиви. Меѓу позначајните региони се Скопска Блатија, Скопска Црна Гора, Овче Поле и Велешко, Прилепско-Битолско Поле, Горна и Долна Преспа, Мариово, Струшко-Дримкол и Галичник. Токму овие регионални разлики ја прават македонската носија богата, разновидна и препознатлива.",
  },
];

const regions = [
  {
    name: "Скопска Блатија",
    description:
      "Женската носија од Скопска Блатија се одликува со изразита полихромност и богати везени и вткаени орнаменти. Основата е бела кошула со геометриски и вегетабилни мотиви, надополнета со саја, ќурдија, скутина и појас, а празничните и невестинските носии се особено богати со метален и монистрен накит. Карактеристични се сложените украси за глава, фесот со монети и масивниот коцел, кои ѝ даваат свечен и впечатлив изглед.",
    description1:
      "Машката носија во лето се состои од платнена кошула и гаќи со широк волнен појас, а за празници се носела кошулата ајта и долниште тоска, налик на фустанела. Во зима се дополнувала со елек, чакшири, долама и кожув или гуња. Посебна особеност е начинот на покривање на главата и носењето перчин, што ја прави оваа носија препознатлива за регионот.",
    image: "/images/SkopskaBlatija.jpg",
    position: { x: 40, y: 35 },
  },
  {
    name: "Охридски народни носии",
    description1:
      "Машката охридска носија припаѓа на западниот тип и се карактеризира со бели клашнени облеки украсени со црни гајтански апликации. Основни делови се бела кошула со дискретен вез, фустан со клинови до колена, црвен волнен појас и бечви, а како горна облека се носеле кундале, ќурдија и подоцна џамадан. Носијата се дополнувала со црвен фес, волнени чорапи со дизги и кожни опинци.",
    description:
      "Женската охридска носија се состои од бела платнена кошула, срмен клашеник и скутина, со богата комбинација на појаси, џуници и разновидни горни облеки како џубе и гунче. Посебно впечатлив е сокајот – сложена и богато украсена покривка за глава со гајтани, реси и накит. Носијата се надополнува со бела марама и орнаментирани волнени чорапи, кои ја истакнуваат свеченоста и регионалната традиција.",
    image: "/images/Ohrid2.jpg",
    position: { x: 28, y: 70 },
  },
  {
    name: "Долен Полог",
    description:
      "Женската носија се одликува со долга бела кошула богато украсена со црн релјефен вез и срмени детали, над која се носат две скутини опашани една врз друга. Горните облеки се разликуваат според возраста и намената, а невестинската носија е особено богата со појаси, накит и украсни додатоци. Карактеристична е и белата покривка за глава, по која жените од Долни Полог биле познати како „белокрпки“.",
    description1:
      "Машката носија се состои од бела платнена кошула, гаќи и волнени чашири, кои првично биле бели, а подоцна и во потемни бои, украсени со гајтани. Како горна облека се носеле елек, џамадан, минтан и гуњиче, зависно од годишното време и пригодата. Носијата се дополнувала со широк волнен појас, волнени чорапи, кожни опинци и традиционална шапка или шубара.",
    image: "/images/DolenPolog1.png",
    position: { x: 63, y: 29 },
  },
  {
    name: "Галичник",
    description:
      "Женската галичка носија се состои од бела платнена кошула со симетрични флорални и геометриски везови на ракавите и околу деколтето. Над неа се носи темен волнен сукман украсен со црвени и златни апликации, дополнет со појас и везена престилка која симболизира домаќинство и благосостојба. Носијата се заокружува со бела или црвена марама и богат сребрен или златен накит.",
    description1:
      "Машката носија е поедноставна, но впечатлива, бидејќи ја истакнува гордоста и достоинството на мажите. Се состои од бела платнена кошула со долги ракави и дискретни украси околу јаката, црни или темносини волнени чекшире со украсни шевови и елек од дебела ткаенина со златен или сребрен вез. Носијата се надополнува со широк црвен појас и традиционална капа на главата.",
    image: "/images/Galicnik1.jpg",
    position: { x: 24, y: 48 },
  },
  {
    name: "Овчеполски народни носии",
    description:
      "Женската носија се карактеризира со бели платнени кошули украсени со разнобојни пругасти шарки (кенари) и тантели, со елек со ѕвонест крој и декоративни везови. Околу половината се носат појас ѕуница и скутина со геометриски орнаменти, а невестинската носија е особено богата со повеќеслојни ракави, накит и везови. Карактеристични се и украсите за глава со свилени марами и платнени крпи, како и чорапи и опинци.",
    description1:
      "Машката носија се состои од платнена кошула и гаќи од кенарлија, волнен пругаст појас и скутина со геометриски мотиви. Карактеристични се кошулата тоска и летната облека фистан, а носијата се дополнува со елек од алаџа и украсни ткаени крпи. Во зимски услови, особено кај сточарите, се носеле кунтеш и кожув, како и гуна, чакшири и тозлуци, што обезбедувале заштита од студ и влага.",
    image: "/images/OvcePole2.png",
    position: { x: 54, y: 38 },
  },
  {
    name: "Велешки народни носии",
    description:
      "Женската носија се состоела од бела кошула со везови, клашнена ќурдија, волнен појас „ѕунуца“ и шарен елек „алаџа“. Преку кошулата се носела црвена фута, а на главата шамии во разни бои. На почетокот на 20 век традиционалната носија постепено била заменета со фустани, здолништа и блузи.",
    description1:
      "Машката носија во велешко се состоела од бела платнена кошула и гаќи, елек од клашна или шарено платно „алаџа“, и клашнен копоран или антерија. На нозете се носеле шалвари или бечви од шајак, со волнени калци и опинци. На главата се носела бела крпа, фес или шубара, во зависност од периодот.",
    image: "/images/Veles1.png",
    position: { x: 48, y: 42 },
  },
  {
    name: "Радовишки народни носии",
    description:
      "Женската носија во Радовишки Шоплук се развила како посебна варијанта поради географската издвоеност. Таа се состои од бела кошула со богато везени ракави (полско везмо), врз која се носи фустан од шарена волнена ткаенина, наречен антерија или интерија. Носијата се дополнува со волнен појас, скутина, џубе, накит од монистра и свилена шамија – штипски каврак.",
    description1:
      "Машката носија се состои од бела платнена кошула и бели гаќи, над кои се носат потури од шајак. Горниот дел го надополнуваат безракавно елече и црвен волнен појас, а кај сточарите и долама од волнено-козинена ткаенина. Како обувки се носат опинци, а на главата каскета, украсена со китка од метални монети кај младоженците.",
    image: "/images/Radovis.jpg",
    position: { x: 65, y: 50 },
  },
  {
    name: "Мавровска народна носија",
    description:
      "Женската носија се одликува со носење на две скутини – предна и задна, што претставува стар словенски елемент во традиционалната облека. Се карактеризира со богати везови, срмени украси, клашнени и кадифени облеки како долама и џамадан, како и раскошен накит од монети и монистра. Невестинската носија е особено впечатлива, со повеќеслојни појаси, украсени шамии, фес со монети и специфично обување со калчини, чулки и тозлуци.",
    description1:
      "Машката носија се надоврзува на мијачката традиција и се состои од бела кошула, клашнен минтан со срмени везови и џамадан со богата орнаментика. Околу половината се носел свилен појас „пош“, а на нозете бечви со гајтани, чорапи и опинци. Носијата ја надополнувала плитка клашнена капа, а нејзината употреба постепено се намалила поради печалбарството.",
    image: "/images/Mavrovo.jpg",
    position: { x: 26, y: 41 },
  },
];

export function CostumesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRegion, setActiveRegion] = useState(0);
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedRegion, setDisplayedRegion] = useState(activeRegion);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="costumes"
      ref={sectionRef}
      className="relative min-h-screen bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Традиционална Носија
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Традиционалната македонска носија претставува значаен дел од
            народната култура и фолклорното наследство. Таа е симбол на
            идентитетот, историјата и естетските вредности на народот, а воедно
            ја одразува и социјалната припадност, возраста и регионот од кој
            потекнува носителот.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT COLUMN - DETAILS */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6 max-w-[450px]">
              {costumeDetails.map((detail, i) => (
                <div key={i}>
                  <p className="text-sm uppercase tracking-wider text-primary font-bold">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-foreground/70 text-justify">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`flex flex-col gap-16 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* 3D MODEL */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-primary/20">
                <iframe
                  title="Traditional Slavic (Macedonian) clothes"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src="https://sketchfab.com/models/b8b6040666424a33a2eafbe62052038a/embed?autospin=1&autostart=1&preload=1&transparent=1"
                  className="w-full h-[1000px]"
                />
              </div>

              <h4 className="text-center mt-4 text-foreground/80 italic">
                3D модел на традиционална македонска носија
              </h4>
            </div>
          </div>
        </div>
        {/* MAP SECTION */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-start">
          {/* MAP - LEFT */}
          <div className="relative rounded-lg overflow-visible">
            <Image
              src="/images/mapaMkd2.png"
              alt="Map of Macedonia"
              width={900}
              height={1100}
              className="object-contain pointer-events-none"
            />

            {/* Markers */}
            {regions.map((region, i) => {
              const isActive = i === activeRegion;

              return (
                <div
                  key={region.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${region.position.x}%`,
                    top: `${region.position.y}%`,
                    zIndex: isActive ? 30 : 20,
                  }}
                  onMouseEnter={() => setHoveredRegion(i)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => {
                    if (i === activeRegion || isAnimating) return;

                    setDirection(i > activeRegion ? "left" : "right");
                    setIsAnimating(true);

                    setTimeout(() => {
                      setDisplayedRegion(i);
                      setActiveRegion(i);
                      setIsAnimating(false);
                    }, 500);
                  }}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300
            ${
              isActive
                ? "border-primary bg-primary animate-pulse scale-110"
                : "border-primary/50 bg-primary/30 hover:scale-110"
            }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                </div>
              );
            })}

            {/* Hover Popup */}
            {hoveredRegion !== null && (
              <div
                className="absolute z-50 w-56 rounded-xl border-2 border-primary bg-card shadow-2xl overflow-hidden"
                style={{
                  left: `${regions[hoveredRegion].position.x}%`,
                  top: `${regions[hoveredRegion].position.y - 5}%`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={regions[hoveredRegion].image}
                    alt={regions[hoveredRegion].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-2 text-center text-xs font-semibold text-primary bg-background">
                  {regions[hoveredRegion].name}
                </div>
              </div>
            )}
          </div>

          {/* DETAILS - RIGHT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl border border-primary shadow-xl bg-primary/5"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {regions[activeRegion].name}
              </h3>

              <p className="text-sm text-foreground/70 text-justify leading-relaxed">
                {regions[activeRegion].description}
                <br />
                <br />
                {regions[activeRegion].description1}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
