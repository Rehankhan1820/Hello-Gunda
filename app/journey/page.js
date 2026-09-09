"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Gamepad2,
    Users,
    Video,
    Eye,
    TrendingUp,
    Award,
    Crown,
    Star,
    Zap,
    Calendar,
    CheckCircle,
    Sparkles,
    Rocket,
    Target,
    MapPin,
    MessageCircle,
    PlayCircle,
    Clock,
    Flame,
    Trophy,
} from "lucide-react";

const milestones = [
    {
        year: "2020",
        title: "Started as a Gamer",
        description: "Began my gaming journey with Free Fire, playing casual matches with friends.",
        icon: Gamepad2,
        color: "from-blue-400 to-cyan-500",
    },
    {
        year: "2021",
        title: "First Video Upload",
        description: "Uploaded my first gameplay video on YouTube. The response was amazing!",
        icon: Video,
        color: "from-red-400 to-pink-500",
    },
    {
        year: "2022",
        title: "Community Growth",
        description: "Our community started growing rapidly. Reached 10K subscribers and made many new friends.",
        icon: Users,
        color: "from-green-400 to-emerald-500",
    },
    {
        year: "2023",
        title: "Hundreds of Videos",
        description: "Crossed 100 videos on the channel and became a well-known creator in the Free Fire community.",
        icon: Award,
        color: "from-yellow-400 to-orange-500",
    },
    {
        year: "2024",
        title: "Millions of Views",
        description: "Reached 1 million total views! Started collaborating with other creators and hosting custom rooms.",
        icon: Eye,
        color: "from-purple-400 to-pink-500",
    },
    {
        year: "2025",
        title: "Guild & Community",
        description: "Launched the HELLO GUNDA Guild, built a strong team, and started organizing tournaments.",
        icon: Crown,
        color: "from-orange-400 to-red-500",
    },
    {
        year: "2026",
        title: "Growing Every Single Day",
        description: "Now at 1.4M+ subscribers, 100M+ views, and still growing. The journey continues!",
        icon: Rocket,
        color: "from-red-500 to-rose-500",
    },
];

// Statistics for the journey
const journeyStats = [
    { icon: Gamepad2, label: "Years Gaming", value: "6+", gradient: "from-blue-400 to-cyan-500" },
    { icon: Video, label: "Total Videos", value: "480+", gradient: "from-red-400 to-pink-500" },
    { icon: Users, label: "Community Members", value: "1.4M+", gradient: "from-green-400 to-emerald-500" },
    { icon: Eye, label: "Total Views", value: "100M+", gradient: "from-yellow-400 to-orange-500" },
];

export default function JourneyPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#080808] text-[#F5F1E8]">
                {/* ========== HERO ========== */}
                <section className="relative min-h-[70vh] overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-16 lg:grid-cols-2">
                            {/* LEFT */}
                            <div className="relative z-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    Our Story
                                </p>

                                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                                    THE
                                    <br />
                                    <span className="text-[#FF5A1F]">JOURNEY</span>
                                </h1>

                                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                                    From a single gamer to a thriving community — every step of the way.
                                    This is the story of HELLO GUNDA.
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A7A29A]">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-[#FF5A1F]" />
                                        Since 2020
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#FF5A1F]" />
                                        India
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-[#FF5A1F]" />
                                        6+ Years
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
                                        src="/logo.jpg"
                                        alt="HELLO GUNDA - The Journey from Gamer to Community Leader"
                                        fill
                                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Decorative overlay */}
                                    <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                            Since 2020
                                        </p>
                                        <p className="text-sm font-bold">HELLO GUNDA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== JOURNEY STATS ========== */}
                <section className="border-y border-[#151515] px-6 py-20 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {journeyStats.map((stat) => {
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

                {/* ========== TIMELINE ========== */}
                <section className="px-6 py-24 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-16 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                Milestones
                            </p>
                            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                                THE PATH TO GREATNESS
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#FF5A1F] via-[#E63946] to-transparent md:left-1/2 md:-translate-x-1/2" />

                            {milestones.map((milestone, index) => {
                                const Icon = milestone.icon;
                                const isEven = index % 2 === 0;
                                return (
                                    <div
                                        key={milestone.year}
                                        className={`relative mb-16 flex flex-col gap-6 last:mb-0 md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#080808] bg-gradient-to-r from-[#FF5A1F] to-[#E63946] shadow-lg shadow-[#FF5A1F]/30 md:left-1/2">
                                            <span className="text-xs font-bold text-[#080808]">
                                                {index + 1}
                                            </span>
                                        </div>

                                        {/* Content card */}
                                        <div className={`w-full pl-12 md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                                            <div className="group border border-[#151515] bg-[#0F0F0F] p-6 transition-all hover:-translate-y-1 hover:border-[#FF5A1F]">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-r ${milestone.color}`}
                                                    >
                                                        <Icon className="h-5 w-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                                            {milestone.year}
                                                        </span>
                                                        <h3 className="text-xl font-bold text-[#F5F1E8]">
                                                            {milestone.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm leading-relaxed text-[#A7A29A]">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Empty space for alternating */}
                                        <div className="hidden w-5/12 md:block" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ========== CONTINUE THE JOURNEY CTA ========== */}
                <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-5xl">
                        <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
                            <Rocket className="mx-auto h-16 w-16 text-[#FF5A1F]" />
                            <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                                THE JOURNEY
                                <br />
                                <span className="text-[#FF5A1F]">CONTINUES</span>
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                                Be part of the next chapter. Join our community and grow with us.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/guild"
                                    className="group inline-flex items-center bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                                >
                                    JOIN THE GUILD
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/@HelloGunda"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center border border-[#F5F1E8] px-10 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                                >
                                    WATCH VIDEOS
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
                                    Gaming • Community • Journey
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