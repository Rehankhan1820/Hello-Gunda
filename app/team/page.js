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

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8]">
        {/* ========== HERO ========== */}
        <section className="relative min-h-[60vh] overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  The Squad
                </p>

                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                  OUR
                  <br />
                  <span className="text-[#FF5A1F]">TEAM</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  The squad behind HELLO GUNDA — united by gaming, driven by passion.
                  Meet the players who make this community great.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A7A29A]">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#FF5A1F]" />
                    {teamMembers.length} Core Members
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FF5A1F]" />
                    India
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/guild"
                    className="group inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                  >
                    JOIN THE GUILD
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@HelloGunda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-[#F5F1E8] px-8 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                  >
                    WATCH VIDEOS
                  </Link>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F]">
                  <Image
                    src="/gunda.jpeg"
                    alt="HELLO GUNDA Team - The Squad Behind the Community"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      Meet The Squad
                    </p>
                    <p className="text-sm font-bold">HELLO GUNDA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TEAM STATS ========== */}
        <section className="border-y border-[#151515] px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {teamStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="border-b border-[#151515] pb-6 text-center last:border-0 md:border-b-0 md:border-r md:pb-0"
                  >
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center bg-gradient-to-r ${stat.gradient}`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <p className="mt-3 text-4xl font-black text-[#FF5A1F] md:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#A7A29A]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== TEAM MEMBERS ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Leadership
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                MEET THE <span className="text-[#FF5A1F]">SQUAD</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => {
                const Icon = member.icon;
                return (
                  <div
                    key={member.id}
                    className="group border border-[#151515] bg-[#0F0F0F] p-6 text-center transition-all hover:-translate-y-2 hover:border-[#FF5A1F]"
                  >
                    {/* Avatar */}
                    <div className="relative mx-auto h-28 w-28 overflow-hidden border-2 border-[#151515]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2">
                      <Icon className={`h-5 w-5 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`} />
                      <p className="text-xs uppercase tracking-widest text-[#A7A29A]">{member.role}</p>
                    </div>

                    <h3 className="mt-1 text-xl font-bold text-[#F5F1E8]">{member.name}</h3>
                    <p className="text-sm text-[#A7A29A]">UID {member.uid}</p>

                    <p className="mt-3 text-sm leading-relaxed text-[#A7A29A]">{member.bio}</p>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {member.specialties.map((spec) => (
                        <span key={spec} className="border border-[#151515] px-3 py-1 text-xs text-[#A7A29A]">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                      <Link
                        href={member.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#0F0F0F] p-2 text-[#A7A29A] transition hover:bg-[#FF5A1F]/20 hover:text-[#FF5A1F]"
                      >
                        <PlaneLanding className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#0F0F0F] p-2 text-[#A7A29A] transition hover:bg-[#FF5A1F]/20 hover:text-[#FF5A1F]"
                      >
                        <PlayCircle className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== JOIN THE TEAM CTA ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
              <Users className="mx-auto h-16 w-16 text-[#FF5A1F]" />
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                WANT TO JOIN
                <br />
                <span className="text-[#FF5A1F]">THE TEAM?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                We're always looking for passionate gamers to join our squad.
                Play together. Grow together. Win together.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/guild"
                  className="group inline-flex items-center bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                >
                  APPLY NOW
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center border border-[#F5F1E8] px-10 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                >
                  BACK TO HOME
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
                <p className="text-sm text-[#A7A29A]">Team • Gaming • Community</p>
              </div>

              <div className="flex gap-6">
                <Link
                  href="https://www.youtube.com/@HelloGunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  <PlaneLanding className="h-6 w-6" />
                </Link>
                <Link
                  href="/instagram"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                >
                  <Plane className="h-6 w-6" />
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