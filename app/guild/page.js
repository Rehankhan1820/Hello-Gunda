"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  Users, Trophy, Swords, Shield, Star, Crown, Award, Heart,
  Users2, User, UserPlus, Check, ArrowRight, Gamepad2,
  MapPin, Globe, Play, Calendar,
  Gift,  Target, GitBranch,
 Crown as CrownIcon, 
  UserCog, ShieldCheck,  Sword,
  PlayCircle,
  MessageCircle,
 
} from "lucide-react";

const leadership = [
  {
    role: "Guild Leader",
    name: "HELLO GUNDA",
    uid: "1798292163",
    roleTitle: "Founder & Guild Leader",
    speciality: ["Squad Leadership", "Custom Rooms", "Competitive Gameplay"],
    icon: CrownIcon,
    color: "from-yellow-400 to-orange-500",
    image: "/gunda.jpeg",
  },
  {
    role: "Acting Guild Leader",
    name: "SUMIT",
    uid: "2072053042",
    roleTitle: "Guild Management",
    speciality: ["Squad Coordination", "Recruitment"],
    icon: UserCog,
    color: "from-blue-400 to-indigo-500",
    image: "/sumit.jpeg",
  },
  {
    role: "Officer",
    name: "HELLO BEAST",
    uid: "519366839",
    roleTitle: "Guild Officer",
    speciality: ["Team Support", "Custom Matches", "Community Events"],
    icon: ShieldCheck,
    color: "from-green-400 to-emerald-500",
    image: "/beast.jpeg",
  },
];

const features = [
  { icon: Sword, label: "Daily Squad Matches" },
  { icon: Users, label: "Custom Room Battles" },
  { icon: Heart, label: "Friendly Community" },
  { icon: Users2, label: "Active Members" },
  { icon: Gift, label: "Gaming Events" },
  { icon: Trophy, label: "Competitive Gameplay" },
];

const rules = [
  "Respect Every Member",
  "No Toxic Behaviour",
  "Support Your Squad",
  "Stay Active",
  "Fair Gameplay",
  "Enjoy The Game",
];

const goals = [
  "Build a strong gaming community.",
  "Help new players improve.",
  "Play together every day.",
  "Organize exciting custom room matches.",
  "Create entertaining Free Fire content.",
];

const whyJoin = [
  "Active Guild",
  "Experienced Leadership",
  "Friendly Players",
  "Daily Gameplay",
  "Competitive Matches",
  "Amazing Community",
];

const achievements = [
  "Growing Community",
  "Hundreds of Squad Matches",
  "Active Free Fire Guild",
  "Dedicated Gaming Team",
];

export default function GuildPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#0B0E14] via-[#141A24] to-[#1A1F2E] text-[#E8EDF5] font-sans overflow-x-hidden">

        {/* ========== HERO BANNER ========== */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative mb-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/30">
            <Shield className="w-16 h-16 text-white" />
          </div>

          <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
            HELLO GUNDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">GUILD</span>
          </h1>
          <p className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Welcome to the official Hello Gunda Free Fire Guild.
            <br />
            <span className="font-semibold text-orange-400">Play Together. Fight Together. Win Together.</span>
          </p>

          <div className="relative mt-10 flex flex-wrap justify-center gap-5">
            <Link href="#join">
              <button className="group rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50">
                Join Guild
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="#members">
              <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
                View Members
              </button>
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Users className="w-3 h-3 text-orange-400" /> Open Recruitment</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> India</span>
          </div>
        </section>

        {/* ========== GUILD INFORMATION ========== */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">👑 Guild Information</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <InfoItem label="Guild Name" value="HELLO GUNDA" />
              <InfoItem label="Guild ID" value="3030024523" />
              <InfoItem label="Game" value="Free Fire" />
              <InfoItem label="Region" value="India" />
              <InfoItem label="Status" value="Open Recruitment" icon={<UserPlus className="w-4 h-4 text-green-400" />} />
              <InfoItem label="Focus" value="Competitive • Casual • Community" />
            </div>
          </div>
        </section>

        {/* ========== LEADERSHIP ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">👑 Guild Leadership</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {leadership.map((leader) => {
              const Icon = leader.icon;
              return (
                <div
                  key={leader.name}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-2 hover:bg-white/10 hover:border-orange-400/50"
                >
                  {/* Avatar with Image */}
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
                    <Image
                      src={leader.image || "/placeholder-avatar.jpg"}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    {/* Fallback if image not loaded */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${leader.color} flex items-center justify-center text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {leader.name.charAt(0)}
                    </div>
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-widest text-gray-400">{leader.role}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{leader.name}</h3>
                  <p className="text-sm text-gray-400">UID {leader.uid}</p>
                  <p className="mt-2 text-sm text-orange-400 font-semibold">{leader.roleTitle}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {leader.speciality.map((spec) => (
                      <span key={spec} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 w-full rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:border-orange-400/50">
                    View Profile
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== GUILD FEATURES ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🎮 Guild Features</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.label}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10 hover:border-orange-400/50"
                >
                  <Icon className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300 font-medium">{feat.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== GUILD RULES & GOALS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Shield className="w-6 h-6 text-orange-400" /> Guild Rules
              </h3>
              <ul className="mt-6 space-y-3">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-4 h-4 text-orange-400" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-orange-400" /> Guild Goals
              </h3>
              <ul className="mt-6 space-y-3">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========== WHY JOIN US ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">🔥 Why Join Us</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {whyJoin.map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-orange-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ACHIEVEMENTS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">🏅 Achievements</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {achievements.map((ach) => (
              <div
                key={ach}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <Award className="w-10 h-10 mx-auto text-orange-400" />
                <p className="mt-3 text-sm text-gray-300">{ach}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== JOIN GUILD CTA ========== */}
        <section id="join" className="mx-auto max-w-4xl px-6 py-16">
          <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">💬 Join Our Squad</h2>
            <p className="mt-4 text-lg text-gray-300 relative z-10">
              Ready to become part of HELLO GUNDA?
              <br />
              Fight beside our team. Make new friends. Enjoy exciting Free Fire battles.
            </p>
            <Link href="/contact">
              <button className="mt-8 relative z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50">
                Join Guild
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="border-t border-white/10 py-12 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">HELLO GUNDA</h3>
                <p className="text-sm text-gray-400">Guild • Gaming • Community</p>
              </div>
              <div className="flex gap-4">
                <Link href="/youtube" className="text-gray-400 hover:text-red-500 transition">
                  <PlayCircle className="w-6 h-6" />
                </Link>
                <Link href="/instagram" className="text-gray-400 hover:text-orange-400 transition">
                  <MessageCircle className="w-6 h-6" />
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

// Helper component for info items
function InfoItem({ label, value, icon }) {
  return (
    <div className="border-b border-white/5 pb-2">
      <p className="text-xs uppercase tracking-widest text-gray-400">{label}</p>
      <p className="mt-1 text-white font-medium flex items-center gap-1">
        {icon} {value}
      </p>
    </div>
  );
}