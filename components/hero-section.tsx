"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover brightness-80"
          poster="/images/hero-macedonia.jpg"
        >
          <source src="videos/mtVideo1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-background">
            Таму каде што традицијата живее
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-wide text-background md:text-7xl lg:text-8xl">
            <span className="block text-balance">
              Македонски Културен Атлас
            </span>
          </h1>
          <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-background to-transparent" />
          <p className="mx-auto max-w-2xl text-lg font-light text-background md:text-xl">
            Приказна раскажана преку култура, фолклор, обичаи и храна
          </p>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-32 right-8 flex items-center gap-2 rounded-full border border-background px-4 py-2 text-xs uppercase tracking-wider text-background transition-all hover:border-primary hover:text-primary"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">
            {isMuted ? "Enable Sound" : "Mute"}
          </span>
        </button>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-700 duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#folklore"
            className="flex flex-col items-center gap-2 text-background hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Истражи</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </div>
    </section>
  );
}
