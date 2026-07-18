"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import {
    ArrowRight, Gamepad2, Users, Video, Eye, TrendingUp,
    Award, Crown, Star, Zap, Calendar, CheckCircle,
    Sparkles, Rocket, Target, MapPin, MessageCircle, PlayCircle
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

            <main className="min-h-screen bg-gradient-to-br from-[#0B0E14] via-[#141A24] to-[#1A1F2E] text-[#E8EDF5] font-sans overflow-x-hidden">

                {/* ========== HERO ========== */}
                <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden">
                    {/* Glowing orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-red-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
                    <div className="absolute top-10 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />

                    <div className="relative mb-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/30">
                        <Rocket className="w-16 h-16 text-white" />
                    </div>

                    <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Journey</span>
                    </h1>
                    <p className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                        From a single gamer to a thriving community — every step of the way.
                    </p>
                    <div className="relative mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-orange-400" /> Since 2020</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-red-400" /> India</span>
                    </div>
                </section>

                {/* ========== JOURNEY STATS ========== */}
                <section className="mx-auto max-w-6xl px-6 py-10">
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {journeyStats.map((stat) => {
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

                {/* ========== TIMELINE ========== */}
                <section className="mx-auto max-w-4xl px-6 py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                        Milestones
                    </h2>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500/50 via-red-500/50 to-transparent" />

                        {milestones.map((milestone, index) => {
                            const Icon = milestone.icon;
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={milestone.year}
                                    className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-4 border-[#141A24] shadow-lg shadow-orange-500/30 z-10" />

                                    {/* Content card */}
                                    <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                                        <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-orange-400/50">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shrink-0`}>
                                                    <Icon className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <span className="text-xs uppercase tracking-widest text-orange-400">{milestone.year}</span>
                                                    <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>

                                    {/* Empty space for alternating */}
                                    <div className="hidden md:block w-5/12" />
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ========== CONTINUE THE JOURNEY CTA ========== */}
                <section className="mx-auto max-w-4xl px-6 py-16">
                    <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-10 text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">🚀 The Journey Continues</h2>
                        <p className="mt-4 text-lg text-gray-300 relative z-10">
                            Be part of the next chapter. Join our community and grow with us.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-5 relative z-10">
                            <Link href="/guild">
                                <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                                    Join the Guild
                                    <ArrowRight className="inline ml-2 w-4 h-4" />
                                </button>
                            </Link>
                            <Link
                                href="https://www.youtube.com/@HelloGunda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                                    Watch Videos
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
                                <p className="text-sm text-gray-400">Gaming • Community • Journey</p>
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
