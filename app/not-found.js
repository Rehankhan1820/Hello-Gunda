"use client";

import Link from "next/link";
import { ArrowRight, Home, Gamepad2, Users, MapPin, AlertTriangle, Play, PlayCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0E14] via-[#141A24] to-[#1A1F2E] text-[#E8EDF5] font-sans overflow-hidden flex flex-col items-center justify-center px-6 relative">

      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-56 h-56 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* 404 icon */}
      <div className="relative mb-8 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl shadow-orange-500/30">
        <AlertTriangle className="w-16 h-16 text-white" />
      </div>

      <h1 className="relative text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
        404
      </h1>

      <h2 className="relative mt-4 text-3xl md:text-4xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="relative mt-4 max-w-2xl text-center text-lg text-gray-300 leading-relaxed">
        Oops! Looks like you've wandered into the wrong lobby.  
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Glitch effect hint */}
      <div className="relative mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-orange-400" /> Zone: Unknown</span>
        <span className="flex items-center gap-1"><Gamepad2 className="w-4 h-4 text-red-400" /> Status: Disconnected</span>
      </div>

      {/* Action buttons */}
      <div className="relative mt-10 flex flex-wrap justify-center gap-5">
        <Link href="/">
          <button className="group rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-orange-500/50">
            <Home className="inline mr-2 w-5 h-5" />
            Back to Base
            <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </Link>
        <Link href="/guild">
          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
            <Users className="inline mr-2 w-5 h-5" />
            Join Guild
          </button>
        </Link>
      </div>

      {/* Suggest links */}
      <div className="relative mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <Link href="/" className="hover:text-orange-400 transition">Home</Link>
        <Link href="/gaming" className="hover:text-orange-400 transition">Gaming</Link>
        <Link href="/guild" className="hover:text-orange-400 transition">Guild</Link>
        <Link href="/journey" className="hover:text-orange-400 transition">Journey</Link>
        <Link href="/gallery" className="hover:text-orange-400 transition">Gallery</Link>
        <Link href="/team" className="hover:text-orange-400 transition">Team</Link>
        <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
      </div>

      {/* Footer */}
      <footer className="relative w-full border-t border-white/10 py-8 mt-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">HELLO GUNDA</h3>
              <p className="text-sm text-gray-400">404 • Error • Gaming</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@HelloGunda" target="_blank" className="text-gray-400 hover:text-red-500 transition">
                <PlayCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                <Play className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2026 Hello Gunda. All Rights Reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}