"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Users, Trophy, Crown,
  Shield, Star, Heart, MapPin,
  Gamepad2, Award, Target, Sparkles,
  Plane,
  PlaneLanding,
  PlayCircle
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "HELLO GUNDA",
    role: "Founder & Guild Leader",
    uid: "1798292163",
    bio: "The heart of the community. Leads the squad, creates content, and inspires everyone to play better.",
    specialties: ["Squad Leadership", "Custom Rooms", "Competitive Gameplay"],
    image: "/gunda.jpeg",
    color: "from-yellow-400 to-orange-500",
    icon: Crown,
    social: {
      youtube: "https://www.youtube.com/@HelloGunda",
      instagram: "#",
    }
  },
  {
    id: 2,
    name: "SUMIT",
    role: "Acting Guild Leader",
    uid: "2072053042",
    bio: "The backbone of the guild. Manages operations, coordinates squads, and ensures everyone is having fun.",
    specialties: ["Squad Coordination", "Recruitment", "Guild Management"],
    image: "/sumit.jpeg",
    color: "from-blue-400 to-indigo-500",
    icon: Shield,
    social: {
      youtube: "#",
      instagram: "#",
    }
  },
  {
    id: 3,
    name: "HELLO BEAST",
    role: "Guild Officer",
    uid: "519366839",
    bio: "The warrior of the team. Supports members, organizes custom matches, and brings energy to every event.",
    specialties: ["Team Support", "Custom Matches", "Community Events"],
    image: "/beast.jpeg",
    color: "from-green-400 to-emerald-500",
    icon: Star,
    social: {
      youtube: "#",
      instagram: "#",
    }
  },
  {
    id: 4,
    name: "HELLO RONIE",
    role: "Core Member",
    uid: "9876543210",
    bio: "The strategist. Always has a plan for every match. Known for clutch plays and smart rotations.",
    specialties: ["Strategy", "Team Coordination", "Ranked Matches"],
    image: "/rahul.jpg",
    color: "from-purple-400 to-pink-500",
    icon: Target,
    social: {
      youtube: "#",
      instagram: "#",
    }
  },
  {
    id: 5,
    name: "CHINTU",
    role: "Core Member",
    uid: "8765432109",
    bio: "The entertainer. Brings laughter to the squad with funny moments and epic dance battles.",
    specialties: ["Funny Content", "Dance Battles", "Squad Play"],
    image: "/chintu.jpg",
    color: "from-red-400 to-rose-500",
    icon: Sparkles,
    social: {
      youtube: "#",
      instagram: "#",
    }
  },
  {
    id: 6,
    name: "HELLO HARAMI",
    role: "Core Member",
    uid: "7654321098",
    bio: "The powerhouse. Known for aggressive gameplay and one-tap headshots. Always ready for action.",
    specialties: ["Aggressive Play", "One Taps", "Squad Fights"],
    image: "/rawd.jpg",
    color: "from-orange-400 to-red-500",
    icon: Gamepad2,
    social: {
      youtube: "#",
      instagram: "#",
    }
  },
];

const teamStats = [
  { icon: Users, value: "50+", label: "Active Members", gradient: "from-blue-400 to-cyan-500" },
  { icon: Trophy, value: "100+", label: "Matches Won", gradient: "from-yellow-400 to-orange-500" },
  { icon: Heart, value: "1.4M+", label: "Community", gradient: "from-red-400 to-pink-500" },
  { icon: Award, value: "480+", label: "Videos", gradient: "from-green-400 to-emerald-500" },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-[#0B0E14] via-[#141A24] to-[#1A1F2E] text-[#E8EDF5] font-sans overflow-x-hidden">

        {/* ========== HERO ========== */}
        <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />

          <div className="relative mb-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/30">
            <Users className="w-16 h-16 text-white" />
          </div>

          <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Team</span>
          </h1>
          <p className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            The squad behind HELLO GUNDA — united by gaming, driven by passion.
          </p>

          <div className="relative mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4 text-orange-400" /> {teamMembers.length} Core Members</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-red-400" /> India</span>
          </div>
        </section>

        {/* ========== TEAM STATS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {teamStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-orange-400/50"
                >
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm uppercase tracking-widest text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== TEAM MEMBERS ========== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Squad</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.id}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center transition-all hover:-translate-y-2 hover:bg-white/10 hover:border-orange-400/50"
                >
                  {/* Avatar */}
                  <div className="relative w-28 h-28 mx-auto overflow-hidden rounded-full border-2 border-white/20 shadow-xl">

                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />

                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Icon className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${member.color}`} />
                    <p className="text-xs uppercase tracking-widest text-gray-400">{member.role}</p>
                  </div>

                  <h3 className="mt-1 text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">UID {member.uid}</p>

                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{member.bio}</p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.specialties.map((spec) => (
                      <span key={spec} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center gap-3">
                    <Link
                      href={member.social.youtube}
                      target="_blank"
                      className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 transition"
                    >
                      <PlaneLanding className="w-5 h-5" />
                    </Link>
                    <Link
                      href={member.social.instagram}
                      target="_blank"
                      className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 text-gray-400 hover:text-orange-400 transition"
                    >
                      <PlayCircle className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========== JOIN THE TEAM CTA ========== */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">👥 Want to Join the Team?</h2>
            <p className="mt-4 text-lg text-gray-300 relative z-10">
              We're always looking for passionate gamers to join our squad.
              Play together. Grow together. Win together.
            </p>
            <Link href="/guild">
              <button className="mt-8 relative z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                Apply Now
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
                <p className="text-sm text-gray-400">Team • Gaming • Community</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://www.youtube.com/@HelloGunda" target="_blank" className="text-gray-400 hover:text-red-500 transition">
                  <PlaneLanding className="w-6 h-6" />
                </Link>
                <Link href="/instagram" className="text-gray-400 hover:text-orange-400 transition">
                  <Plane className="w-6 h-6" />
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