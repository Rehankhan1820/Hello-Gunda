"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Image from "next/image";

// Keep existing real data
const STATS = [
  { value: "480+", label: "Videos" },
  { value: "100M+", label: "Views" },
  { value: "1.4M+", label: "Subscribers" },
  { value: "24/7", label: "Content" },
];

const CONTENT_TYPES = [
  {
    number: "01",
    category: "GAMEPLAY",
    title: "Free Fire Gameplay",
    description:
      "Clutch clips, ranked pushes, no-scope endings that shouldn't work but do. Pure skill meets pure chaos.",
    link: "/youtube",
  },
  {
    number: "02",
    category: "COMEDY",
    title: "Funny Content",
    description:
      "Squad chat gold, epic fails, and moments that make you hit replay. Made for people who mute everyone else.",
    link: "/youtube",
  },
  {
    number: "03",
    category: "SHORTS",
    title: "Shorts & Reels",
    description:
      "Fast cuts, faster reactions. Built for the scroll, built to make you stay. Quick hits of pure entertainment.",
    link: "/youtube",
  },
];

// Real guild data from the project
const GUILD_DATA = {
  name: "HELLO GUNDA",
  id: "3030024523",
  region: "India",
  status: "Open Recruitment",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8]">
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT - Editorial Headline */}
              <div className="relative z-10">
                <div className="space-y-2">
                  <h1 className="text-7xl font-black leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
                    HELLO
                    <br />
                    <span className="text-[#FF5A1F]">GUNDA</span>
                  </h1>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#A7A29A]">
                    Free Fire Creator
                  </p>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#A7A29A]">
                    Gaming · Comedy · Community
                  </p>
                </div>

                <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  Free Fire gameplay, funny moments and everything that happens
                  when the squad gets online.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="https://www.youtube.com/@HelloGunda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                  >
                    WATCH ON YOUTUBE
                  </Link>
                  <Link
                    href="/guild"
                    className="inline-flex items-center justify-center border border-[#F5F1E8] px-8 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                  >
                    EXPLORE THE GUILD
                  </Link>
                </div>
              </div>

              {/* RIGHT - Editorial Image Composition */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#151515]">
                  <Image
                    src="/logo.jpg"
                    alt="HELLO GUNDA - Free Fire Creator and Gaming Community Leader"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay label */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      HELLO GUNDA
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#A7A29A]">
                      Free Fire Creator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BRAND STATEMENT ========== */}
        <section className="border-y border-[#151515] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                NOT JUST GAMEPLAY.
                <br />
                <span className="text-[#FF5A1F]">IT'S THE SQUAD.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                Every drop, every clutch, every laugh — built by the community,
                for the community.
              </p>
            </div>
          </div>
        </section>

        {/* ========== ABOUT SECTION ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* LEFT */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  About Hello Gunda
                </p>
                <h2 className="mt-4 text-5xl font-black leading-[1.1] tracking-tight md:text-6xl">
                  A CREATOR.
                  <br />
                  A COMMUNITY.
                  <br />
                  <span className="text-[#FF5A1F]">A SQUAD.</span>
                </h2>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#A7A29A]">
                  Hi, I'm Aadil from Bihar — popularly known as{" "}
                  <span className="text-[#F5F1E8]">Hello Gunda</span>. I create
                  Free Fire gameplay, funny videos and entertaining content for
                  the squad. My old Instagram account got wiped, but consider
                  this the respawn: new account, same energy, bigger goals and
                  sharper content on the way.
                </p>
                <p className="text-lg leading-relaxed text-[#A7A29A]">
                  From ranked pushes to squad chat chaos, every piece of content
                  is made with one goal: to keep the community laughing, engaged,
                  and coming back for more.
                </p>
                <Link
                  href="/journey"
                  className="inline-flex items-center text-[#FF5A1F] font-semibold transition-colors hover:text-[#E63946] group"
                >
                  MORE ABOUT THE JOURNEY
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS SECTION ========== */}
        <section className="border-y border-[#151515] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    index < STATS.length - 1
                      ? "border-b border-[#151515] pb-8 md:border-b-0 md:border-r md:pb-0"
                      : ""
                  }`}
                >
                  <div className="text-5xl font-black tracking-tight text-[#FF5A1F] md:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#A7A29A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FEATURED CONTENT ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Featured Content
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                WHAT YOU'LL FIND HERE
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {CONTENT_TYPES.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="group block border border-[#151515] bg-[#0F0F0F] p-8 transition-all hover:border-[#FF5A1F] hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-black text-[#FF5A1F] opacity-50">
                      {item.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7A29A]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-[#A7A29A] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-semibold text-[#FF5A1F] transition-colors group-hover:text-[#E63946]">
                    EXPLORE
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== VISUAL CONTENT / IMAGE MOMENT ========== */}
        <section className="px-6 pb-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Visual Stories
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                INSIDE THE WORLD OF HELLO GUNDA
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] md:aspect-[3/4]">
                <Image
                  src="/logo.jpg"
                  alt="HELLO GUNDA gaming creator portrait"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-[#151515]">
                <Image
                  src="/logo.jpg"
                  alt="HELLO GUNDA squad and community moments"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] md:aspect-[3/4]">
                <Image
                  src="/logo.jpg"
                  alt="HELLO GUNDA Free Fire content creation"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center text-[#FF5A1F] font-semibold transition-colors hover:text-[#E63946] group"
              >
                VIEW FULL GALLERY
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== YOUTUBE SECTION ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Watch
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                LATEST FROM THE CHANNEL
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Link
                  key={i}
                  href="https://www.youtube.com/@HelloGunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-[#151515] bg-[#0F0F0F] overflow-hidden transition-all hover:border-[#FF5A1F]"
                >
                  <div className="relative aspect-video bg-[#151515]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-2 border-[#FF5A1F] flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[#FF5A1F] group-hover:border-[#FF5A1F]">
                        <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-[#FF5A1F] transition-all group-hover:border-l-[#080808]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#FF5A1F]">
                      WATCH NOW
                    </p>
                    <p className="mt-1 text-sm text-[#A7A29A]">
                      New video on the channel
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/youtube"
                className="inline-flex items-center text-[#FF5A1F] font-semibold transition-colors hover:text-[#E63946] group"
              >
                WATCH ALL VIDEOS
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== GUILD PROMOTION ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  The Guild
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                  THE SQUAD IS BIGGER THAN ONE PLAYER.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#A7A29A]">
                  HELLO GUNDA isn't just a creator — it's a community. A Free
                  Fire guild where players come together, compete, and grow as
                  a squad.
                </p>

                <div className="mt-8 space-y-4 border border-[#151515] bg-[#0F0F0F] p-6">
                  <div className="flex justify-between border-b border-[#151515] pb-3">
                    <span className="text-sm uppercase tracking-[0.1em] text-[#A7A29A]">
                      Guild Name
                    </span>
                    <span className="font-semibold text-[#FF5A1F]">
                      {GUILD_DATA.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#151515] pb-3">
                    <span className="text-sm uppercase tracking-[0.1em] text-[#A7A29A]">
                      Guild ID
                    </span>
                    <span className="font-mono text-sm">
                      {GUILD_DATA.id}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#151515] pb-3">
                    <span className="text-sm uppercase tracking-[0.1em] text-[#A7A29A]">
                      Region
                    </span>
                    <span>{GUILD_DATA.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm uppercase tracking-[0.1em] text-[#A7A29A]">
                      Status
                    </span>
                    <span className="text-[#D6FF4B]">
                      {GUILD_DATA.status}
                    </span>
                  </div>
                </div>

                <Link
                  href="/guild"
                  className="mt-8 inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105 group"
                >
                  ENTER THE GUILD
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black tracking-tight text-[#FF5A1F] opacity-20">
                    HG
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#A7A29A]">
                    Squad Tag
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== COMMUNITY CTA ========== */}
        <section className="bg-[#0F0F0F] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              READY TO JOIN
              <br />
              <span className="text-[#FF5A1F]">THE SQUAD?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
              Stay connected with HELLO GUNDA for gaming, videos, giveaways and
              community content. The squad is always open.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.youtube.com/@HelloGunda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
              >
                WATCH ON YOUTUBE
              </Link>
              <Link
                href="/guild"
                className="border border-[#F5F1E8] px-10 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
              >
                EXPLORE GUILD
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========== GLOBAL STYLES ========== */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

        * {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Selection color */
        ::selection {
          background: #FF5A1F;
          color: #080808;
        }

        /* Focus styles for accessibility */
        a:focus-visible,
        button:focus-visible {
          outline: 2px solid #FF5A1F;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}