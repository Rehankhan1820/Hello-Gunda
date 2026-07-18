"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Users, Video, Eye, Award, Zap, Flame, Star,
  Trophy, Swords, User, Mic, Crown, Gift, Tv, Users2,
  Check, Shield, Sparkles, Gamepad2, Clock, Music,
  TrendingUp, Heart, Play, Youtube, 
  MapPin, Globe,
  PlayCircle
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

      <main className="min-h-screen bg-gradient-to-br from-[#0B0E14] via-[#141A24] to-[#1A1F2E] text-[#E8EDF5] font-sans overflow-x-hidden">

        {/* ========== HERO ========== */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Avatar with glow ring */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-44 w-44 rounded-full border-2 border-white/20 overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Hello Gunda"
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-xs text-gray-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              LIVE
            </div>
          </div>

          {/* UID & Server */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> UID: 1798292163</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Server: India</span>
          </div>

          <h1 className="relative mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            WELCOME TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">HELLO GUNDA</span>
          </h1>

          <p className="relative mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            India's Free Fire Content Creator
          </p>

          <p className="relative mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Bringing intense gameplay, funny moments, custom room battles, giveaways and daily entertainment.
            Join the community and become part of the adventure.
          </p>

          <div className="relative mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/youtube">
              <button className="group rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50">
                Subscribe Now
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="/guild">
              <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
                Explore Guild
              </button>
            </Link>
          </div>

          {/* floating badges */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Star className="w-3 h-3 text-orange-400" /> Top Creator</span>
            <span className="flex items-center gap-1"><Flame className="w-3 h-3 text-red-400" /> Trending</span>
          </div>
        </section>

        {/* ========== STATS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-orange-400/50"
                >
                  <Icon className="w-8 h-8 mx-auto text-orange-400 group-hover:scale-110 transition" />
                  <p className="mt-3 text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-sm uppercase tracking-widest text-gray-400">{s.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== ABOUT ========== */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] items-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-gray-400">Squad Tag</p>
              <p className="mt-1 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">[HG]</p>
              <div className="mt-6 space-y-3 text-sm text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">UID</span>
                  <span>1798292163</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Server</span>
                  <span>India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span>Content Creator</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">WHO IS HELLO GUNDA?</h2>
              <p className="mt-4 text-lg leading-9 text-gray-300">
                Hello Gunda is a Free Fire gaming creator focused on exciting gameplay,
                epic battles, entertaining videos and an active gaming community.
                <br /><br />
                Whether it's ranked matches, custom rooms, funny moments or challenges,
                the goal is to create enjoyable content for every gaming fan.
              </p>
            </div>
          </div>
        </section>

        {/* ========== GAMING CATEGORIES ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🔥 Gaming Categories</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {GAMING_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-orange-400/50"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{cat.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== WHY JOIN ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🏆 Why Join</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {WHY_JOIN.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-orange-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== GUILD ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">👑 HELLO GUNDA COMMUNITY</h2>
            <p className="mt-4 text-xl text-gray-300 relative z-10">A place where every gamer is welcome.</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 relative z-10">
              <span>Play together.</span>
              <span>Learn together.</span>
              <span>Grow together.</span>
              <span>Win together.</span>
            </div>
            <Link href="/guild">
              <button className="mt-8 relative z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                Explore Guild
              </button>
            </Link>
          </div>
        </section>

        {/* ========== LATEST VIDEOS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🎥 Latest Videos</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {LATEST_VIDEOS.map((title) => (
              <div
                key={title}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-orange-400/50"
              >
                <div className="flex items-center gap-3">
                  <Play className="w-5 h-5 text-orange-400 group-hover:scale-110 transition" />
                  <span className="text-sm text-gray-300">{title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">💥 Features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.label}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all hover:bg-white/10"
                >
                  <Icon className="w-8 h-8 text-orange-400" />
                  <span className="text-gray-300 font-medium">{feat.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== JOURNEY ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🌟 Journey</h2>
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            {JOURNEY.map((step, idx) => (
              <div key={step} className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <p className="mt-3 text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== COMMUNITY ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">❤️ Community</h2>
            <p className="mt-4 text-lg text-gray-300">
              Join thousands of Free Fire lovers.
              <br />
              Watch. Play. Compete. Enjoy.
            </p>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">🎯 Ready to Join?</h2>
            <p className="mt-4 text-xl text-gray-300 relative z-10">
              Become part of Hello Gunda and experience non-stop Free Fire entertainment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-5 relative z-10">
              <Link href="/youtube">
                <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                  Subscribe
                </button>
              </Link>
              <Link href="/guild">
                <button className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                  Join Guild
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="border-t border-white/10 py-12 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">HELLO GUNDA</h3>
                <p className="text-sm text-gray-400">Gaming • Entertainment • Community</p>
              </div>
              <div className="flex gap-4">
                <Link href="/youtube" className="text-gray-400 hover:text-red-500 transition">
                  <PlayCircle className="w-6 h-6" />
                </Link>
                <Link href="/instagram" className="text-gray-400 hover:text-orange-400 transition">
                  <PlayCircle className="w-6 h-6" />
                </Link>
                <Link href="/twitter" className="text-gray-400 hover:text-blue-400 transition">
                  <PlayCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              © 2026 Hello Gunda. All Rights Reserved.
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}