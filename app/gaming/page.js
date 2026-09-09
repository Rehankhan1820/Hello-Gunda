"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Video,
  Eye,
  Award,
  Zap,
  Flame,
  Star,
  Trophy,
  Swords,
  User,
  Mic,
  Crown,
  Gift,
  Tv,
  Users2,
  Check,
  Shield,
  Sparkles,
  Gamepad2,
  Clock,
  Music,
  TrendingUp,
  Heart,
  Play,
  Youtube,
  MapPin,
  Globe,
  PlayCircle,
  MessageCircle,
} from "lucide-react";

const STATS = [
  { value: "480+", label: "Videos", icon: Video },
  { value: "100M+", label: "Views", icon: Eye },
  { value: "1.4M+", label: "Subscribers", icon: Users },
  { value: "24/7", label: "Content", icon: Zap },
];

const GAMING_CATEGORIES = [
  { icon: Trophy, label: "Ranked Gameplay", color: "from-yellow-400 to-orange-500" },
  { icon: Swords, label: "Clash Squad", color: "from-red-400 to-pink-500" },
  { icon: Users, label: "Custom Rooms", color: "from-blue-400 to-indigo-500" },
  { icon: Mic, label: "Funny Moments", color: "from-green-400 to-emerald-500" },
  { icon: Crown, label: "One Tap Highlights", color: "from-purple-400 to-pink-500" },
  { icon: Gift, label: "Giveaways", color: "from-orange-400 to-red-500" },
  { icon: Tv, label: "Live Streams", color: "from-red-500 to-rose-500" },
  { icon: Users2, label: "Squad Gameplay", color: "from-cyan-400 to-blue-500" },
];

const WHY_JOIN = [
  "Daily Free Fire Videos",
  "Epic Gameplay",
  "Friendly Gaming Community",
  "Regular Giveaways",
  "Exciting Custom Rooms",
  "Tips & Tricks",
  "Entertaining Content",
  "Active Creator",
];

const LATEST_VIDEOS = [
  "🔥 Free Fire Ranked Push",
  "🔥 Funny Squad Moments",
  "🔥 Solo vs Squad Challenge",
  "🔥 One Tap Headshots",
  "🔥 Custom Room Battles",
  "🔥 New Event Gameplay",
];

const FEATURES = [
  { icon: Gamepad2, label: "Daily Gameplay" },
  { icon: Sparkles, label: "HD Videos" },
  { icon: Trophy, label: "Competitive Matches" },
  { icon: Heart, label: "Community Support" },
  { icon: Gift, label: "Giveaways" },
  { icon: PlayCircle, label: "YouTube Updates" },
];

const JOURNEY = [
  "Started as a gamer.",
  "Built an amazing community.",
  "Created hundreds of videos.",
  "Reached millions of views.",
  "Growing every single day.",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8] font-['Inter',ui-sans-serif,system-ui,sans-serif]">
        {/* ========== HERO ========== */}
        <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 bg-[#FF5A1F] animate-pulse" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                    Free Fire Creator
                  </p>
                </div>

                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                  HELLO
                  <br />
                  <span className="text-[#FF5A1F]">GUNDA</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  India's Free Fire content creator. Bringing intense gameplay,
                  funny moments, custom room battles, giveaways and daily
                  entertainment to the squad.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/youtube"
                    className="inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105 group"
                  >
                    SUBSCRIBE NOW
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/guild"
                    className="inline-flex items-center border border-[#F5F1E8] px-8 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                  >
                    EXPLORE GUILD
                  </Link>
                </div>

                {/* Quick Info */}
                <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#151515] pt-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                      UID
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold">
                      1798292163
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                      Server
                    </p>
                    <p className="mt-1 text-lg font-semibold">India</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                      Role
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#FF5A1F]">
                      Content Creator
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F]">
                  <Image
                    src="/logo.jpg"
                    alt="HELLO GUNDA - Free Fire Creator and Gaming Community Leader"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      HELLO GUNDA
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#A7A29A]">
                      Free Fire Creator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS ========== */}
        <section className="border-y border-[#151515] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="text-center border-b border-[#151515] pb-6 last:border-0 md:border-b-0 md:border-r md:pb-0"
                  >
                    <Icon className="mx-auto h-8 w-8 text-[#FF5A1F]" />
                    <p className="mt-3 text-4xl font-black text-[#FF5A1F] md:text-5xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#A7A29A]">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  About
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                  WHO IS
                  <br />
                  <span className="text-[#FF5A1F]">HELLO GUNDA?</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#A7A29A]">
                  Hello Gunda is a Free Fire gaming creator focused on exciting
                  gameplay, epic battles, entertaining videos and an active
                  gaming community.
                </p>
                <p className="text-lg leading-relaxed text-[#A7A29A]">
                  Whether it's ranked matches, custom rooms, funny moments or
                  challenges, the goal is to create enjoyable content for every
                  gaming fan.
                </p>
              </div>
            </div>

            {/* Squad Tag */}
            <div className="mt-16 border-t border-[#151515] pt-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                    Squad Tag
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#FF5A1F]">
                    [HG]
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                    UID
                  </p>
                  <p className="mt-2 font-mono text-xl font-bold">
                    1798292163
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                    Server
                  </p>
                  <p className="mt-2 text-xl font-bold">India</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                    Role
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#FF5A1F]">
                    Content Creator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GAMING CATEGORIES ========== */}
        <section className="bg-[#0F0F0F] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Content
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                GAMING CATEGORIES
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {GAMING_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.label}
                    className="group border border-[#151515] bg-[#080808] p-6 text-center transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                  >
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center bg-gradient-to-r ${cat.color}`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[#F5F1E8]">
                      {cat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== WHY JOIN ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Benefits
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                WHY JOIN
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {WHY_JOIN.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 border border-[#151515] bg-[#0F0F0F] p-4"
                >
                  <Check className="h-4 w-4 text-[#FF5A1F]" />
                  <span className="text-sm text-[#A7A29A]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== GUILD PROMOTION ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  Community
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl">
                  HELLO GUNDA
                  <br />
                  <span className="text-[#FF5A1F]">COMMUNITY</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#A7A29A]">
                  A place where every gamer is welcome. Play together, learn
                  together, grow together, win together.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border border-[#151515] bg-[#0F0F0F] p-4 text-center">
                    <p className="text-sm font-bold text-[#F5F1E8]">Play Together</p>
                  </div>
                  <div className="border border-[#151515] bg-[#0F0F0F] p-4 text-center">
                    <p className="text-sm font-bold text-[#F5F1E8]">Learn Together</p>
                  </div>
                  <div className="border border-[#151515] bg-[#0F0F0F] p-4 text-center">
                    <p className="text-sm font-bold text-[#F5F1E8]">Grow Together</p>
                  </div>
                  <div className="border border-[#151515] bg-[#0F0F0F] p-4 text-center">
                    <p className="text-sm font-bold text-[#F5F1E8]">Win Together</p>
                  </div>
                </div>
                <Link
                  href="/guild"
                  className="mt-8 inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105 group"
                >
                  EXPLORE GUILD
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F]">
                <Image
                  src="/logo.jpg"
                  alt="HELLO GUNDA Community and Guild"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                    Guild
                  </p>
                  <p className="text-2xl font-bold">HELLO GUNDA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== LATEST VIDEOS ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Watch
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                LATEST VIDEOS
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {LATEST_VIDEOS.map((title) => (
                <Link
                  key={title}
                  href="/youtube"
                  className="group border border-[#151515] bg-[#0F0F0F] p-6 transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-[#FF5A1F] transition-transform group-hover:scale-110" />
                    <span className="text-sm text-[#F5F1E8]">{title}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/youtube"
                className="inline-flex items-center text-[#FF5A1F] font-semibold transition-colors hover:text-[#E63946] group"
              >
                WATCH ALL VIDEOS
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className="bg-[#0F0F0F] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                What We Offer
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                FEATURES
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    className="flex items-center gap-4 border border-[#151515] bg-[#080808] p-6 transition-all hover:border-[#FF5A1F]"
                  >
                    <Icon className="h-8 w-8 text-[#FF5A1F]" />
                    <span className="font-medium text-[#F5F1E8]">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== JOURNEY ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Our Story
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                THE JOURNEY
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {JOURNEY.map((step, idx) => (
                <div key={step} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#FF5A1F] bg-[#0F0F0F]">
                    <span className="text-2xl font-black text-[#FF5A1F]">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-[#A7A29A]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== COMMUNITY ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl text-center">
            <Heart className="mx-auto h-12 w-12 text-[#FF5A1F]" />
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              COMMUNITY
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
              Join thousands of Free Fire lovers. Watch. Play. Compete. Enjoy.
            </p>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
              <h2 className="text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                READY TO
                <br />
                <span className="text-[#FF5A1F]">JOIN THE SQUAD?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                Become part of Hello Gunda and experience non-stop Free Fire
                entertainment.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/youtube"
                  className="inline-flex items-center bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                >
                  SUBSCRIBE NOW
                </Link>
                <Link
                  href="/guild"
                  className="inline-flex items-center border border-[#F5F1E8] px-10 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                >
                  JOIN GUILD
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="border-t border-[#151515] px-6 py-12 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-2xl font-black">HELLO GUNDA</p>
                <p className="text-sm text-[#A7A29A]">
                  Gaming • Entertainment • Community
                </p>
              </div>

              <div className="flex gap-6">
                <Link
                  href="/youtube"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  <PlayCircle className="h-6 w-6" />
                </Link>
                <Link
                  href="/instagram"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  <MessageCircle className="h-6 w-6" />
                </Link>
                <Link
                  href="/contact"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  Home
                </Link>
              </div>
            </div>

            <div className="mt-8 border-t border-[#151515] pt-8 text-center text-sm text-[#A7A29A]">
              © 2026 Hello Gunda. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}