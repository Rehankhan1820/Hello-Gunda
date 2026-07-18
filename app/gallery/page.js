"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, Calendar,  Eye,
  Heart,  Image as ImageIcon,  Grid3x3,
  List, X, MessageCircle, PlayCircle,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Ranked Push Victory",
    category: "Gameplay",
    image: "/gallery/gameplay-1.jpg",
    date: "2026-01-15",
    likes: 1243,
    views: 15200,
  },
  {
    id: 2,
    title: "Squad Photo - Custom Room",
    category: "Squad",
    image: "/gallery/squad-1.jpg",
    date: "2026-01-12",
    likes: 892,
    views: 9800,
  },
  {
    id: 3,
    title: "One Tap Compilation",
    category: "Highlights",
    image: "/gallery/highlight-1.jpg",
    date: "2026-01-10",
    likes: 2156,
    views: 28400,
  },
  {
    id: 4,
    title: "Guild Meetup 2026",
    category: "Event",
    image: "/gallery/event-1.jpg",
    date: "2026-01-08",
    likes: 567,
    views: 6300,
  },
  {
    id: 5,
    title: "Clutch Moment - 1v4",
    category: "Gameplay",
    image: "/gallery/gameplay-2.jpg",
    date: "2026-01-05",
    likes: 1876,
    views: 22100,
  },
  {
    id: 6,
    title: "Funny Squad Moments",
    category: "Funny",
    image: "/gallery/funny-1.jpg",
    date: "2026-01-03",
    likes: 3452,
    views: 41200,
  },
  {
    id: 7,
    title: "Tournament Champions",
    category: "Event",
    image: "/gallery/event-2.jpg",
    date: "2025-12-28",
    likes: 2341,
    views: 28900,
  },
  {
    id: 8,
    title: "Solo vs Squad Highlights",
    category: "Highlights",
    image: "/gallery/highlight-2.jpg",
    date: "2025-12-25",
    likes: 1678,
    views: 19300,
  },
  {
    id: 9,
    title: "New Year Special Stream",
    category: "Stream",
    image: "/gallery/stream-1.jpg",
    date: "2025-12-31",
    likes: 4567,
    views: 52100,
  },
];

const categories = ["All", "Gameplay", "Highlights", "Squad", "Event", "Funny", "Stream"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            <ImageIcon className="w-16 h-16 text-white" />
          </div>

          <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Gallery</span>
          </h1>
          <p className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Moments captured — gameplay, events, squad memories and more.
          </p>

          <div className="relative mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><ImageIcon className="w-4 h-4 text-orange-400" /> {galleryItems.length}+ Photos</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-red-400" /> Since 2020</span>
          </div>
        </section>

        {/* ========== CATEGORY FILTER ========== */}
        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition ${
                  viewMode === "grid" ? "bg-orange-500/20 text-orange-400" : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition ${
                  viewMode === "list" ? "bg-orange-500/20 text-orange-400" : "text-gray-400 hover:text-white"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ========== GALLERY GRID ========== */}
        <section className="mx-auto max-w-6xl px-6 py-8">
          {viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 cursor-pointer transition-all hover:-translate-y-2 hover:border-orange-400/50"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* इमेज placeholder - actual image के लिए Image component use करें */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                      🎮
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 cursor-pointer transition-all hover:bg-white/10 hover:border-orange-400/50"
                >
                  <div className="relative w-32 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-3xl opacity-50 shrink-0">
                    🎮
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div>{item.date}</div>
                    <div className="flex items-center gap-2 justify-end mt-1">
                      <Eye className="w-4 h-4" />
                      {item.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl">No items found in this category.</p>
            </div>
          )}
        </section>

        {/* ========== LIGHTBOX ========== */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#141A24] rounded-2xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-8xl opacity-30">
                🎮
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedItem.date}</span>
                  <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> {selectedItem.views.toLocaleString()} views</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-400" /> {selectedItem.likes} likes</span>
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs">{selectedItem.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== CTA ========== */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/10 to-transparent border border-orange-500/30 rounded-3xl p-10 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">🎬 Want to be Featured?</h2>
            <p className="mt-4 text-lg text-gray-300 relative z-10">
              Join our community and get a chance to be featured in our gallery.
            </p>
            <Link href="/guild">
              <button className="mt-8 relative z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105">
                Join the Guild
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
                <p className="text-sm text-gray-400">Gallery • Gaming • Community</p>
              </div>
              <div className="flex gap-4">
                <Link href="https://www.youtube.com/@HelloGunda" target="_blank" className="text-gray-400 hover:text-red-500 transition">
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