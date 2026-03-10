"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Music, SkipForward, SkipBack } from "lucide-react";

const musicFacts = [
  {
    title: "Музика",
    description:
      "Македонската народна музика се карактеризира со богатство на мелодии кои често се создадени за ора и народни игри. Со препознатливи тонови и сложени ритмички тактови како 7/8, 9/8 или 11/16, музиката го живее народниот ритам и ја води публиката низ емоции и традиции.",
  },
  {
    title: "Инструменти",
    description:
      "Традиционалните македонски инструменти се срцето на народната музика, создадени од природни материјали и пренесувани од генерација на генерација. Дувачките инструменти како кавалот, гajдата и зурлата, ја создаваат мелодијата и ритамот на ората. Жичените инструемнти - тамбурата и ќемането, додаваат хармонија и длабочина, додека ударните инструменти, тапанот и дајрето, ја одржуваат енергијата и ритамот.",
  },
  {
    title: "Ора",
    description:
      "Постојат различни видови македонски ора, секое со свој уникатен карактер: Тешкото е бавно и свечено, Пајдушкото се игра во 5/8 такт, Лесното е едноставно и широко распространето, Копачката е динамично и ритмичко оро кое бара брзи чекори и прецизност, додека Чачак е побрзо и весело, создавајќи радост и живост во секоја веселба.",
  },
];

const musicTracks = [
  {
    title: "Македонско Девојче",
    artist: "Традиционален Фолк",
    duration: "3:03",
    src: "/audio/Makedonsko Devojce.mp3",
  },
  {
    title: "Зајди Зајди Јасно Сонце",
    artist: "Тоше Проески",
    duration: "6:31",
    src: "/audio/Zajdi Zajdi Jasno Sonce.mp3",
  },
  {
    title: "Јовано Јованке",
    artist: "Класичен Фолк",
    duration: "2:28",
    src: "/audio/Jovano Jovanke.mp3",
  },
];

export function MusicSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hoveredInstrument, setHoveredInstrument] = useState<string | null>(
    null,
  );
  const [activeInstrument, setActiveInstrument] = useState<string | null>(null);
  const instrumentAudioRef = useRef<HTMLAudioElement | null>(null);
  const instrumentDetailRef = useRef<HTMLDivElement>(null);

  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Update progress bar
  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying && audioRef.current) {
      interval = window.setInterval(() => {
        if (audioRef.current?.duration) {
          setProgress(audioRef.current.currentTime / audioRef.current.duration);
        }
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTrack]);

  // Автоматски пушта track кога се менува
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = musicTracks[currentTrack].src;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log("Play failed:", err));
    }
  }, [currentTrack]);

  // Play / Pause
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch((err) => console.log("Play failed:", err));
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Next track
  const nextTrack = () => {
    setCurrentTrack((currentTrack + 1) % musicTracks.length);
    setProgress(0);
  };

  // Previous track
  const prevTrack = () => {
    setCurrentTrack(
      (currentTrack - 1 + musicTracks.length) % musicTracks.length,
    );
    setProgress(0);
  };

  // Track ended
  const handleEnded = () => {
    nextTrack();
  };

  // Select track from list
  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const playSound = (sound: string) => {
    if (!sound) return;
    const audio = new Audio(sound);
    audio.play();
  };

  useEffect(() => {
    instrumentAudioRef.current = new Audio();
  }, []);

  const toggleInstrumentSound = (instrument: {
    name: string;
    description: string;
    position: string;
    tooltipPosition: string;
    sound: string;
  }) => {
    if (!instrumentAudioRef.current) return;

    if (activeInstrument === instrument.name) {
      instrumentAudioRef.current.pause();
      instrumentAudioRef.current.currentTime = 0;
      setActiveInstrument(null);
      return;
    }

    instrumentAudioRef.current.pause();
    instrumentAudioRef.current.src = instrument.sound;
    instrumentAudioRef.current.currentTime = 0;
    instrumentAudioRef.current.play().catch(() => {});
    setActiveInstrument(instrument.name);

    // Scroll to description section
    setTimeout(() => {
      const element = instrumentDetailRef.current;
      if (!element) return;

      const yOffset = -400; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  const musicInstruments = [
    {
      name: "Тапан",
      description:
        "Тапанот е голем ударен инструмент кој се свири со две палки и создава длабок, силен ритам што ја води играта и песната, особено при ора и свадбени свечености. Тој има кожа затегната од двете страни на дрвена рамка, што му овозможува силен и одекнувачки звук. Во македонската традиција често се свири во комбинација со зурла, создавајќи препознатлива и енергична атмосфера.",
      position: "top-[70px] left-[200px]",
      tooltipPosition: "bottom",
      sound: "/audio/tapan.mp3",
    },
    {
      name: "Зурла",
      description:
        "Зурла или сурла е дрвен музички инструмент со две јазичиња. Се среќава и под името зурна. Најчесто се свири заедно со тапан и се користи на свадби, празници и народни собири. Таа има конусна форма и произведува многу гласен и остар звук, кој создава свечена и динамична атмосфера при изведбата на народните мелодии.",
      position: "top-[350px] left-[50px]",
      tooltipPosition: "bottom",
      sound: "/audio/zurla.mp3",
    },
    {
      name: "Тамбура",
      description:
        "Тамбурата е жичен музички инструмент кој се одликува со продорен, мелодичен и топол звук. Најчесто се користи за придружба на народни песни, но може да ја истакне и главната мелодија. Се свири со перце или со прсти, а нејзината ритмичка и хармонична функција го збогатува звукот на ансамблот. Во народните музички групи често се користат повеќе тамбури со различна големина и улога, создавајќи разновидни звукови и текстури во музиката.",
      position: "top-[280px] left-[255px]",
      tooltipPosition: "bottom",
      sound: "/audio/tambura.mp3",
    },
    {
      name: "Гајда",
      description:
        "Гајдата, или мешница, е традиционален македонски дувачки инструмент изработен од кожа и дрво. Се состои од мешина, дувало и најмалку три цевки – за мелодија, бордун и понекогаш слагарче. Карактеристичниот звук се создава со комбинирање на мелодиските и постојаните тонови, а инструментот се користи за изведба на народни ора и песни на традиционални настани.",
      position: "top-[388px] left-[260px]",
      tooltipPosition: "bottom",
      sound: "/audio/gajda.mp3",
    },
    {
      name: "Дајре",
      description:
        "Дајрето е рачен ударен инструмент со кружна форма. По должината на кружниот обрач врежани се отвори, во кои се вметнати прапорци или метални плочки. Се користи за одржување на ритамот во народните песни и игри. Се држи со една рака, а со другата се удира или тресе за да се добие звук. Често го користат жените во фолклорните ансамбли и при изведба на традиционални песни.",
      position: "top-[100px] left-[400px]",
      tooltipPosition: "bottom",
      sound: "/audio/dajre.mp3",
    },
    {
      name: "Тарабука",
      description:
        "Тарабуката е македонски народен ударен инструмент со арапско потекло, изработен од глина во форма на вазна и покриен со штавена кожа. Се состои од два дела – горен дел со затегната кожа и долна проширена цевка. Звукот се создава со удирање по кожата со наизменично користење на двете раце.",
      position: "top-[530px] left-[470px]",
      tooltipPosition: "top",
      sound: "/audio/tarabuka.mp3",
    },
  ];
  return (
    <section
      id="music"
      ref={sectionRef}
      className="relative min-h-screen bg-card py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Македонска народна музика и македонски ора
          </h2>
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
            Македонската народна музика не е само звук — таа е живописна
            приказна за минатото, огледало на народната душа и мост што ја
            поврзува традицијата со денешниот живот.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info Column */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-8">
              {musicFacts.map((fact) => (
                <div
                  key={fact.title}
                  className="group relative border-l-2 border-border pl-6 transition-all hover:border-primary"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-border bg-card transition-all group-hover:border-primary group-hover:bg-primary" />
                  <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary text-center">
                    {fact.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-justify">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Music Player */}
            <div className="mt-10 rounded-lg border border-border bg-background p-4 shadow-lg">
              {/* Current Track Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-foreground">
                    {musicTracks[currentTrack].title}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {musicTracks[currentTrack].artist}
                  </p>
                </div>
                <span className="text-sm text-foreground/40">
                  {musicTracks[currentTrack].duration}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevTrack}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/60 transition-all hover:text-primary"
                >
                  <SkipBack className="h-5 w-5" />
                </button>

                <button
                  onClick={toggleAudio}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 animate-pulse-glow"
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </button>

                <button
                  onClick={nextTrack}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/60 transition-all hover:text-primary"
                >
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>

              {/* Track List */}
              <div className="mt-6 space-y-2">
                {musicTracks.map((track, index) => (
                  <button
                    key={track.title}
                    onClick={() => selectTrack(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${currentTrack === index ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground/70 hover:text-foreground"}`}
                  >
                    <span className="text-sm">{track.title}</span>
                    <span className="text-xs opacity-60">{track.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} onEnded={handleEnded} />
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="group relative aspect-[4/5] overflow-visible rounded-lg">
              <Image
                src="/images/instrumenti.png"
                alt="Traditional Macedonian musicians playing folk instruments"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {musicInstruments.map((instrument) => (
                <div
                  key={instrument.name}
                  className={`absolute ${instrument.position}`}
                  onMouseEnter={() => setHoveredInstrument(instrument.name)}
                  onMouseLeave={() => setHoveredInstrument(null)}
                  onClick={() => toggleInstrumentSound(instrument)}
                >
                  <span
                    className=" bg-background backdrop-blur-md px-5 py-2
                    rounded-full shadow-xl shadow-black/20 text-base font-semibold
                    border border-white/40 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-primary
                    hover:text-white animate-float"
                  >
                    {instrument.name}
                  </span>
                </div>
              ))}

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white mb-2">
                  Македонски инструменти
                </p>
              </div>

              {activeInstrument && (
                <div
                  ref={instrumentDetailRef}
                  className="absolute -bottom-55 left-1/2 -translate-x-1/2 w-[102%] bg-background p-4 rounded-xl shadow-xl border border-primary text-center"
                >
                  <p className="font-bold text-primary">
                    {
                      musicInstruments.find(
                        (inst) => inst.name === activeInstrument,
                      )?.name
                    }
                  </p>
                  <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <p className="text-md text-foreground/70 mt-2 text-justify">
                    {
                      musicInstruments.find(
                        (inst) => inst.name === activeInstrument,
                      )?.description
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
