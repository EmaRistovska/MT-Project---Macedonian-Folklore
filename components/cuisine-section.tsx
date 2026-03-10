"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Wine, FlipHorizontal, Play } from "lucide-react";
import { link } from "fs";
import { Star, MapPin } from "lucide-react";

const dishes = [
  {
    name: "Тавче гравче",
    image: "/images/gravce.jpg",
    description:
      "Тавче гравче е едно од најпознатите и најомилените традиционални македонски јадења. Овој специјалитет се сервира во македонски земјени чинии и е чест гостин на семејни трпези и празнични собири, симболизирајќи домашен вкус и македонско гостопримство. Тоа е јадење кое ја претставува едноставноста и топлината на македонската кујна, омилено за секоја трпеза",
    ingredients: [
      "500гр. грав",
      "1 главица кромид",
      "зачини - сол, бибер, црвен пипер, вегета, нане (по желба)",
      "ловоров лист",
      "50мл. масло",
      "200мл. вода",
      "суви пиперки (по желба)",
    ],
    steps: [
      "Гравот најпрво треба да го ставите во длабок сад, да го измиете и оставете да отстои една ноќ.",
      "Следниот ден сменете ја водата, ставете го на шпорет и варете го додека не омекне, но внимавајте зрната да останат цели.",
      "Откако ќе го сварите гравот, исцедете ја водата, но не целосно.",
      "Во тава ставете го маслото, па додајте го ситно исечканиот кромид и пржете додека не омекне кромидот.",
      "Во тавата додајте го ловоровиот лист, црвениот пипер, сол, бибер, и други зачини по желба.",
      "Сите состојки убаво промешајте ги да се соединат.",
      "На крајот истурете го гравот и убаво измешајте, па префрлете сè во тава за печење.",
      "Најдобро е гравот да го готвите во земјен сад, за да има убав шмек.",
      "Врз гравот ставете суви пиперки исчистени од семки.",
      "Се пече во загреана рерна на 185°C околу 30 до 45 минути.",
      "Кога на горниот слој ќе се формира кора, гравот е готов.",
    ],
    link: "https://www.youtube.com/watch?v=a97zJuKL1Rw",
  },
  {
    name: "Aјвар",
    image: "/images/ajvar.jpg",
    description:
      "Ајварот е традиционален македонски намаз од печени црвени пиперки со богат, благо пикантен вкус. Пинџурот е сличен намаз од пиперки, модар патлиџан и домати, со поинтензивен вкус и различна текстура. И ајварот и пинџурот се важен дел од македонската кујна и традиционално се приготвуваат во есен, како дел од традиционалното зачувување на храната за зимата.",
    ingredients: [
      "црвени пиперки",
      "модри патлиџани",
      "оцет",
      "сол и шеќер",
      "масло",
    ],
    steps: [
      "Пиперките и модрите патлиџани за тоа време се мијат и се бршат со крпа.",
      "Постепено се печат во плех обложен со хартија за печење.",
      "Откако ќе се испечат се ставаат се прекриваат со најлон за да омекнат и полесно да се лупат",
      "Испечените пиперки и модри патлиџани се лупат, се чистат од семе и се оставаат во цедалка за да се процедат.",
      "Се мелат со машинка за мелење и се собираат во длабок сад.",
      "Во длабоко тенџере се става 200 ml масло за јадење да се загрее и потоа се додаваат сомелените пиперки и патлиџани.",
      "Ајварот се вари околу 1 час и 20 минути на тивок оган.",
      "Кога ајварот ќе почне да врие, односно да прска, се додава оцет, шеќер и сол.",
      "Ајварот се меша и се враќа да се вари уште 10-тина минути со постојано мешање.",
      "Измиените тегли се ставаат да се загреат 10-тина минути во рерна на 100 степени.",
      "Потоа топлиот ајвар се става во топли тегли, теглите се затвораат и се враќаат во рерната која е исклучена и се оставаат таму додека не се оладат.",
    ],
    link: "https://www.youtube.com/watch?v=yTcGhjW5LLo",
  },
  {
    name: "Сарма",
    image: "/images/sarma.jpg",
    description:
      "Сармата е традиционално македонско јадење, составено од листови зелка или лозови листови, полнети со мешавина од меленo месо, ориз и зачини. Ова јадење е неизоставен дел од семејните трпези, посебно за време на празници и слави.",
    ingredients: [
      "2кг. листови од кисела зелка",
      "800гр. јунешко мелено месо",
      "200гр. свинско мелено месо",
      "400гр. ориз",
      "1 главица кромид",
      "100мл. масло",
      "сол, црвен пипер и зачини по желба",
      "250мл. расолница",
    ],
    steps: [
      "Кромидот исечкајте го на ситни коцки и пржете го со малку сол додека да зацрвени.",
      "Додајте ги меленото месо и оризот. Малку пржете, па додајте ги сите зачини.",
      "Свиткајте ги сармите и наредете ги во длабоко тенџере на чие дно сте ставиле листови зелка.",
      "Прелијте ги со жешка вода и 250мл. расолница.",
      "Врз сармите ставете листови од кисела зелка, покријте го тенџерето со капак и ставете да се пече во загреана рерна најмалку 2 и пол часа",
      "Kога ќе омекне зелката, сармата е готова.",
    ],
    link: "https://www.youtube.com/watch?v=GxykyOG0BMs",
  },
  {
    name: "Зелник",
    image: "/images/zelnik.jpg",
    description:
      "Зелникот е омилено традиционално македонско јадење од тенко расучено тесто, полнето со различни состојки како зелка, спанаќ, сирење или месо. Се служи топол и е дел од секојдневната трпеза, како и од празничните и семејни собири, претставувајќи вкусна и домашна традиција.",
    ingredients: [
      "600гр. брашно",
      "300мл. масло",
      "300мл. вода",
      "10гр. квасец",
      "сол, шеќер",
      "1кг. кисела зелка",
    ],
    steps: [
      "Киселата зелка убаво се пржи со 20 мл масло и малку бибер.",
      "Во подлабок сад се истура 500 г од брашното, се прави длабнатина и од страните се ставаат шеќерот и солта. Посебно во 10 мл млака вода се раствора квасецот и се додава во брашното.",
      "Се замесува тесто со постепено додавање на млака вода.",
      "Потоа работната маса се попрскува со брашно и тестото се дели на 5 дела. За долната кора потребни се 4 топчиња, а за горната едно.",
      "Топчињата се расукуваат во јајцевидна форма, се мачкаат со масло и се редат едно врз друго. Од нив се расукува една кора. Со сукалото кората се става полека во подмачканата тепсија, а краевите на кората треба да останат надвор од тепсијата.",
      "Врз кората се нанесува филот од пржена зелка.",
      "Последната кора се расукува многу тенко и се става врз зелникот. Краевите што висат надвор од тепсијата се превиткуваат за да се затворат горната и долната кора.",
      "Зелникот се попрскува со масло и се пече на 180 степени, 40 минути.",
    ],
    link: "https://www.youtube.com/watch?v=ah4jZQSVkKs",
  },
  {
    name: "Полнети пиперки",
    image: "/images/polnetiPiperki.jpg",
    description:
      "Полнетите пиперки се традиционално македонско јадење составено од пиперки полнети со мешавина од ориз, месо и зачини кои имаат сочен и ароматичен вкус, а често се сервираат со доматен сос. Ова јадење е омилено на семејни трпези и празнични ручеци и ја претставува богатата традиција на македонската кујна.",

    ingredients: [
      "500гр. мелено месо",
      "200гр. ориз",
      "пиперки",
      "2 - 3 домати",
      "1 главица кромид",
      "црвен пипер и зачини по желба",
      "доматно пире",
    ],
    steps: [
      "Најпрво измијте ги и исечете ги пиперките, отстранувајќи ги семките и ставете ги на страна.",
      "Кромидот исечете го на ситни коцки.",
      "Меленото месо и исечканиот кромид ставете ги да се пржат со малку масло.",
      "Откако малку ќе се запржат, додајте еден домат исечкан на коцки и продолжете со пржењето со повремено мешање додека испари течноста од доматот.",
      "Потоа додајте го црвениот пипер и останатите зачини, додајте го оризот и измешајте ја смесата.",
      "Наполнете ги пиперките со добиената смеса и наредете ги во тава за печење, полиени со вода.",
      "Последната кора се расукува многу тенко и се става врз зелникот. Краевите што висат надвор од тепсијата се превиткуваат за да се затворат горната и долната кора.",
      "Пиперките ги печеме на температура од 200 степени додека не заруменат.",
    ],
    link: "https://www.youtube.com/watch?v=6kQyGdOxmPw",
  },
  {
    name: "Охридска пастрмка",
    image: "/images/pastrmka.jpg",
    description:
      "Охридската пастрмка е еден од најпознатите специјалитети од Охридското Езеро, ценета по својата свежина и деликатен вкус. Овој оброк е традиционален дел од охридската кујна и се служи на семејни ручеци, како и во локални ресторани за туристи, претставувајќи вкусен пример за македонската гастрономска култура.",
    ingredients: [
      "пастрмка",
      "масло",
      "лук",
      "домат и црвена пиперка",
      "свеж магдонос и лимон",
      "зачини - сол, бибер, црвен пипер, вегета - по желба",
    ],
    steps: [
      "Пастрмките исчистете ги, измијте ги и исушете ги, а потоа исечете ги со остар нож од под главата до перката и попрскајте ги со лимонов сок.",
      "На врело масло пропржете исечкан лук и кога малку ќе омекне, додајте ја исечканата пиперка, излупените и исечканите домати. Посолете и пржете на тивок оган додека водата не испари. На крај, додајте исечкан магдонос, црвен пипер и бибер.",
      "Пастрмките ставете ги во загреана намастена тава и пржете ги на двете страни. Кога ќе бидат готови, извадете им ја коската, посолете ги, забиберете ги, додајте вегета, лимонов сок и наполнете ги со претходно подготвената смеса од лук и домати.",
      "Така подготвените пастрмки, ставете ги во загреана рерна уште малку да се испечат, а потоа послужете ги со свежа салата или прилог по желба. Може малку да ги набрашните пред да ги ставите да се печат, за да не се распаднат.",
    ],
    link: "https://www.youtube.com/watch?v=wdMWJZG7LzM",
  },
];

const foodPlaces = [
  {
    name: "Етно ресторан “Куќа на Мијаците“",
    city: "Ростуше, Маврово",
    image: "/images/mijaci.jpg",
    rating: 4.7,
    map: "https://maps.app.goo.gl/8Gt3KA1jPDgLKEqq7",
  },
  {
    name: "Етно ресторан “Дедо Димо",
    city: "с. Куратица, Охрид",
    image: "/images/dedoDimo.png",
    rating: 4.7,
    map: "https://maps.app.goo.gl/wJiNP1YJjavh6Tx46",
  },
  {
    name: "Ресторан Кутмичевица",
    city: "Вевчани",
    image: "/images/kutmicevica.png",
    rating: 4.6,
    map: "https://maps.app.goo.gl/8pn3ydPNYdN1UAZE6",
  },
  {
    name: "Гостилница Дукат",
    city: "Скопје",
    image: "/images/dukat.jpg",
    rating: 4.6,
    map: "https://maps.app.goo.gl/6EfbVgimUQ66LDkk8",
  },
  {
    name: "Ресторан Кајче",
    city: "Охрид",
    image: "/images/kajce.webp",
    rating: 4.5,
    map: "https://maps.app.goo.gl/UHi2WLkhxpQGpyAY8",
  },
  {
    name: "Ресторан - вила Осоговска куќа",
    city: "Пониква, Кочани",
    image: "/images/osogovskaKukja.png",
    rating: 4.5,
    map: "https://maps.app.goo.gl/y7qhVeo7F4CbXhVt7",
  },
  {
    name: "Винарија Шато Сопот ",
    city: "Велес",
    image: "/images/sopot.jpg",
    rating: 4.5,
    map: "https://maps.app.goo.gl/q9QnoVWxmsEejQso6",
  },
  {
    name: "Етно Село Долија",
    city: "Кучково",
    image: "/images/etnoSelo.jpg",
    rating: 4.4,
    map: "https://maps.app.goo.gl/eC7Xo85mJcMBA5xh6",
  },
];

export function CuisineSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [wineFlipped, setWineFlipped] = useState(false);
  const [selectedDish, setSelectedDish] = useState<number | null>(null);

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
      id="cuisine"
      ref={sectionRef}
      className="relative min-h-screen bg-card py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Македонска традиционална кујна
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Македонската традиционална кујна претставува важен дел од културното
            наследство на народот и ја одразува неговата историја и начин на
            живот. Создадена низ векови, таа се пренесува од генерација на
            генерација, со посебен акцент на домашното приготвување на храната.
            Таа е начин за собирање на семејството, прослави и изразување на
            гостопримството. Со секое јадење се одржуваат традициите и се
            пренесуваат културните вредности на македонскиот народ.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Image */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="sticky top-32">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/macedonian-food.jpg"
                  alt="Македонска трпеза"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">
                    Македонска трпеза
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 rounded-xl border border-border bg-background p-6 shadow-xl">
                <blockquote className="text-lg italic text-foreground/80 text-center">
                  "На македонската трпеза, секој залак е приказна."
                </blockquote>
                <p className="mt-4 text-sm text-primary">
                  — Македонска поговорка
                </p>
              </div>
            </div>
          </div>

          {/* Flashcards */}
          <div
            className={`lg:col-span-7 transition-all duration-1000${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {dishes.map((dish, index) => (
                <div
                  key={dish.name}
                  className="perspective h-72 cursor-pointer"
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 preserve-3d ${
                      flippedIndex === index ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-border bg-background">
                      <div className="relative h-full w-full">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4">
                          <h3 className="text-white text-lg font-bold">
                            {dish.name}
                          </h3>

                          {/* Tap to Flip Indicator */}
                          {flippedIndex !== index && (
                            <div className="flex items-center gap-2 text-white/90 text-xs self-end bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                              <FlipHorizontal className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-primary bg-background p-6 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-primary mb-3 text-center">
                        {dish.name}
                      </h3>

                      <p className="text-sm text-foreground/80 text-justify leading-relaxed">
                        {dish.description}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDish(index);
                        }}
                        className="mt-4 bg-primary text-white text-xs px-4 py-2 rounded-full hover:bg-primary/80 transition"
                      >
                        Види рецепт
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Wine Section */}
            <div
              className="mt-10 perspective cursor-pointer"
              onClick={() => setWineFlipped(!wineFlipped)}
            >
              <div
                className={`relative h-80 w-full transition-transform duration-700 preserve-3d shadow-xl ${
                  wineFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT – TEXT */}
                <div className="absolute inset-0 backface-hidden rounded-xl border border-primary/30 bg-primary/5 p-8">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 shrink-0">
                      <Wine className="h-8 w-8 text-primary" />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-3">
                          Вино и ракија
                        </h4>

                        <p className="text-foreground/70 leading-relaxed text-justify text-sm">
                          Во Македонија, виното и ракијата се неразделен дел од
                          традиционалната култура и гостопримство. Виното се
                          произведува од локални сорти грозје и се користи како
                          пијалок за секојдневни оброци и празнични пригоди.
                          Македонија е дом на винската област Тиквеш, една од
                          најстарите во Европа, каде домашните сорти Вранец и
                          Смедеревка даваат вина кои се одгледуваат повеќе од
                          4.000 години, правејќи го македонското вино вистински
                          вкус на историјата. Ракјата, како силен алкохолен
                          пијалок, често се приготвува дома и се служи при
                          посебни прилики, прослави и семејни собирања,
                          симболизирајќи топлина, заедништво и добредојде.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-primary text-xs mt-4">
                        <FlipHorizontal className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK – TWO IMAGES */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-primary grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src="/images/vino.jpg"
                      alt="Македонско вино"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/rakija.jpg"
                      alt="Македонска ракија"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Overlay title */}
                  <div className="absolute p-4 text-end">
                    <h4 className="text-white font-bold">
                      Македонско вино и ракија
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOD RECOMMENDATIONS */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Каде да ја пробате македонската традиционална храна?
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              За вистински вкус на традицијата, посетете ги овие локали каде што
              старите рецепти оживуваат, а пријатната домашна атмосфера ве
              пречекува како свој гостин.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {foodPlaces.map((place, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-border bg-background shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h4 className="font-bold">{place.name}</h4>
                    <p className="text-xs opacity-80">{place.city}</p>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-semibold text-foreground">
                        {place.rating}
                      </span>
                    </div>

                    <a
                      href={place.map}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      <MapPin size={16} />
                      Види мапа
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedDish !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-background max-w-lg w-full rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 text-sm text-primary"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              {dishes[selectedDish].name} – Рецепт
            </h3>

            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
              {dishes[selectedDish].ingredients && (
                <div>
                  <h4 className="font-semibold mb-2">Состојки:</h4>
                  <ul className="list-disc list-inside text-sm text-foreground/80">
                    {dishes[selectedDish].ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}

              {dishes[selectedDish].steps && (
                <div>
                  <h4 className="font-semibold mb-2">Подготовка:</h4>
                  <ol className="list-decimal list-inside text-sm text-justify text-foreground/80 space-y-1">
                    {dishes[selectedDish].steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {dishes[selectedDish].link && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(dishes[selectedDish].link, "_blank");
                    }}
                    className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white text-sm px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:scale-105"
                  >
                    <Play className="w-4 h-4" />
                    YouTube рецепт
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
