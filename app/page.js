"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Image from "next/image";

const STATS = [
  { value: "480+", label: "Videos", code: "STAT_VID" },
  { value: "100M+", label: "Views", code: "STAT_VUE" },
  { value: "1.4M+", label: "Subscribers", code: "STAT_SUB" },
  { value: "24/7", label: "Live Drops", code: "STAT_LIV" },
];

const LOOT = [
  {
    tier: "LEGENDARY",
    tierColor: "#FF5A1F",
    title: "Free Fire Gameplay",
    desc: "Clutch clips, ranked pushes, no-scope endings that shouldn't work but do.",
    emoji: "🎯",
  },
  {
    tier: "MYTHIC",
    tierColor: "#C6FF3D",
    title: "Funny Videos",
    desc: "Comedy gold from the squad chat. Made for people who mute everyone else.",
    emoji: "😂",
  },
  {
    tier: "EPIC",
    tierColor: "#E63946",
    title: "Shorts & Reels",
    desc: "Fast cuts, faster reactions. Built for the scroll, built to make you stay.",
    emoji: "⚡",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0A0D08] text-[#EDEBE2] [font-family:var(--font-body)]">
        {/* ---------- HERO / DROP ZONE ---------- */}
        <section
          id="home"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
        >
          {/* battlefield grid backdrop */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(#C6FF3D 1px, transparent 1px), linear-gradient(90deg, #C6FF3D 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* shrinking safe-zone rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
            <span className="hud-ring" style={{ animationDelay: "0s" }} />
            <span className="hud-ring" style={{ animationDelay: "1.3s" }} />
            <span className="hud-ring" style={{ animationDelay: "2.6s" }} />
          </div>

          {/* map coordinate flavor text */}
          <div className="pointer-events-none absolute left-6 top-28 hidden [font-family:var(--font-mono)] text-[11px] tracking-widest text-[#8A8F82] md:block">
            GRID_REF · 24.47N / 81.86E
          </div>
          <div className="pointer-events-none absolute right-6 top-28 hidden [font-family:var(--font-mono)] text-[11px] tracking-widest text-[#8A8F82] md:block">
            ZONE_STATUS · SAFE
          </div>

          {/* player card frame */}
          <div className="relative">

            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-[#FF5A1F] shadow-[0_0_50px_rgba(255,90,31,0.45)]">
              <Image
                src="/logo.jpg"
                alt="Hello Gunda"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>

            {/* live badge */}

          </div>

          <h1 className="relative mt-10 text-6xl font-bold uppercase tracking-[0.08em] [font-family:var(--font-display)] md:text-7xl">
            Hello <span className="text-[#FF5A1F]">Gunda</span>
          </h1>

          <p className="relative mt-3 [font-family:var(--font-mono)] text-sm uppercase tracking-[0.3em] text-[#C6FF3D]">
            Free Fire Creator · Funny Creator
          </p>

          <p className="relative mt-6 max-w-2xl text-lg leading-8 text-[#8A8F82]">
            Welcome to the drop zone. Gameplay, guild, journey, gallery and the
            latest uploads — everything the squad needs, in one lobby.
          </p>


          <div className="relative mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="https://www.youtube.com/@HelloGunda"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#FF5A1F] px-8 py-4 font-semibold text-[#0A0D08] transition duration-300 hover:scale-105 hover:bg-[#ff7a45]"
            >
              Subscribe
            </Link>

            <Link
              href="/guild"
              className="rounded-full border border-[#C6FF3D] px-8 py-4 font-semibold text-[#C6FF3D] transition duration-300 hover:bg-[#C6FF3D] hover:text-[#0A0D08]"
            >
              Explore Guild
            </Link>

          </div>
        </section>

        <div className="overflow-hidden border-y border-[#1E241A] bg-[#12160F] py-3">
          <div className="ticker-track flex w-max gap-16 [font-family:var(--font-mono)] text-xs uppercase tracking-widest text-[#8A8F82]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-16">
                <span>Server · Live</span>
                <span className="text-[#FF5A1F]">Rank · Top Creator</span>
                <span>Region · Bihar, IN</span>
                <span className="text-[#C6FF3D]">Squad Tag · [HG]</span>
                <span>Uptime · 24/7</span>
                <span className="text-[#E63946]">Status · Dropping New Content</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- ABOUT / PLAYER CARD ---------- */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="[font-family:var(--font-mono)] text-xs tracking-widest text-[#8A8F82]">
              [ ID_CARD ]
            </span>
            <span className="h-px flex-1 bg-[#1E241A]" />
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div className="rounded-2xl border border-[#1E241A] bg-[#12160F] p-6">
              <p className="[font-family:var(--font-mono)] text-[11px] tracking-widest text-[#8A8F82]">
                SQUAD TAG
              </p>
              <p className="mt-1 text-2xl font-bold text-[#FF5A1F] [font-family:var(--font-display)]">
                [HG]
              </p>
              <div className="mt-6 space-y-3 [font-family:var(--font-mono)] text-[11px] tracking-widest text-[#8A8F82]">
                <div className="flex justify-between">
                  <span>REGION</span>
                  <span className="text-[#EDEBE2]">BIHAR, IN</span>
                </div>
                <div className="flex justify-between">
                  <span>ROLE</span>
                  <span className="text-[#EDEBE2]">CONTENT CREATOR</span>
                </div>
                <div className="flex justify-between">
                  <span>CLASS</span>
                  <span className="text-[#EDEBE2]">GAMEPLAY / COMEDY</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-9 text-[#8A8F82]">
              Hi, I&apos;m Aadil from Bihar — popularly known as{" "}
              <span className="text-[#EDEBE2]">Hello Gunda</span>. I create
              Free Fire gameplay, funny videos and entertaining content for
              the squad. My old Instagram account got wiped, but consider
              this the respawn: new account, same energy, bigger goals and
              sharper content on the way.
            </p>
          </div>
        </section>

        {/* ---------- LOADOUT / STATS ---------- */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-center gap-4">
            <span className="[font-family:var(--font-mono)] text-xs tracking-widest text-[#8A8F82]">
              [ LOADOUT ]
            </span>
            <span className="h-px flex-1 bg-[#1E241A]" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="hex-badge flex h-32 w-28 flex-col items-center justify-center border border-[#1E241A] bg-[#12160F] transition hover:border-[#FF5A1F]">
                  <span className="[font-family:var(--font-mono)] text-[10px] tracking-widest text-[#8A8F82]">
                    {s.code}
                  </span>
                  <span className="mt-1 text-3xl font-bold text-[#FF5A1F] [font-family:var(--font-display)]">
                    {s.value}
                  </span>
                </div>
                <p className="mt-3 text-sm uppercase tracking-widest text-[#8A8F82]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- FEATURED CONTENT / LOOT ---------- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="[font-family:var(--font-mono)] text-xs tracking-widest text-[#8A8F82]">
              [ LOOT_CRATES ]
            </span>
            <span className="h-px flex-1 bg-[#1E241A]" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {LOOT.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-[#1E241A] bg-[#12160F] p-8 transition hover:-translate-y-2"
                style={{ borderTopColor: item.tierColor, borderTopWidth: "3px" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="[font-family:var(--font-mono)] text-[10px] font-semibold tracking-[0.2em]"
                    style={{ color: item.tierColor }}
                  >
                    {item.tier}
                  </span>
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold [font-family:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#8A8F82]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- SQUAD INVITE / CONTACT ---------- */}
        <section id="contact" className="px-6 py-24 text-center">
          <div className="mx-auto max-w-xl rounded-2xl border border-[#1E241A] bg-[#12160F] px-8 py-14">
            <span className="[font-family:var(--font-mono)] text-xs tracking-widest text-[#C6FF3D]">
              [ SQUAD INVITE ]
            </span>
            <h2 className="mt-4 text-4xl font-bold uppercase tracking-wide [font-family:var(--font-display)]">
              Join The Community
            </h2>
            <p className="mt-4 text-lg text-[#8A8F82]">
              Stay connected for gaming, giveaways and new drops.
            </p>
            <button className="mt-8 rounded-full bg-[#FF5A1F] px-10 py-4 font-semibold text-[#0A0D08] transition hover:bg-[#ff7a45]">
              Send Squad Invite
            </button>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap");

        :root {
          --font-display: "Rajdhani", ui-sans-serif, system-ui, sans-serif;
          --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
          --font-mono: "JetBrains Mono", ui-monospace, monospace;
        }

        .hud-ring {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          border: 1px solid #c6ff3d;
          opacity: 0;
          animation: hud-pulse 4s ease-out infinite;
        }

        @keyframes hud-pulse {
          0% {
            transform: scale(0.35);
            opacity: 0.55;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .hud-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          border-color: #ff5a1f;
        }
        .hud-corner-tl {
          top: -12px;
          left: -12px;
          border-top: 2px solid;
          border-left: 2px solid;
        }
        .hud-corner-tr {
          top: -12px;
          right: -12px;
          border-top: 2px solid;
          border-right: 2px solid;
        }
        .hud-corner-bl {
          bottom: -12px;
          left: -12px;
          border-bottom: 2px solid;
          border-left: 2px solid;
        }
        .hud-corner-br {
          bottom: -12px;
          right: -12px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        .hud-blink {
          animation: hud-blink 1.6s ease-in-out infinite;
        }
        @keyframes hud-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.25;
          }
        }

        .hex-badge {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }

        .ticker-track {
          animation: ticker 22s linear infinite;
        }
        @keyframes ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hud-ring,
          .hud-blink,
          .ticker-track {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}