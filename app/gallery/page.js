"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Eye,
  Heart,
  Image as ImageIcon,
  Grid3x3,
  List,
  X,
  MessageCircle,
  PlayCircle,
  Camera,
  Users,
  Trophy,
  Star,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Ranked Push Victory",
    category: "Gameplay",
    image: "/logo.jpg",
    date: "2026-01-15",
    likes: 1243,
    views: 15200,
  },
  {
    id: 2,
    title: "Squad Photo - Custom Room",
    category: "Squad",
    image: "/logo.jpg",
    date: "2026-01-12",
    likes: 892,
    views: 9800,
  },
  {
    id: 3,
    title: "One Tap Compilation",
    category: "Highlights",
    image: "/logo.jpg",
    date: "2026-01-10",
    likes: 2156,
    views: 28400,
  },
  {
    id: 4,
    title: "Guild Meetup 2026",
    category: "Event",
    image: "/logo.jpg",
    date: "2026-01-08",
    likes: 567,
    views: 6300,
  },
  {
    id: 5,
    title: "Clutch Moment - 1v4",
    category: "Gameplay",
    image: "/logo.jpg",
    date: "2026-01-05",
    likes: 1876,
    views: 22100,
  },
  {
    id: 6,
    title: "Funny Squad Moments",
    category: "Funny",
    image: "/logo.jpg",
    date: "2026-01-03",
    likes: 3452,
    views: 41200,
  },
  {
    id: 7,
    title: "Tournament Champions",
    category: "Event",
    image: "/logo.jpg",
    date: "2025-12-28",
    likes: 2341,
    views: 28900,
  },
  {
    id: 8,
    title: "Solo vs Squad Highlights",
    category: "Highlights",
    image: "/logo.jpg",
    date: "2025-12-25",
    likes: 1678,
    views: 19300,
  },
  {
    id: 9,
    title: "New Year Special Stream",
    category: "Stream",
    image: "/logo.jpg",
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

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8]">
        {/* ========== HERO ========== */}
        <section className="relative min-h-[60vh] overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  Memories
                </p>

                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                  OUR
                  <br />
                  <span className="text-[#FF5A1F]">GALLERY</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  Moments captured — gameplay, events, squad memories and more.
                  Every image tells a story of the HELLO GUNDA community.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A7A29A]">
                  <span className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-[#FF5A1F]" />
                    {galleryItems.length}+ Photos
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#FF5A1F]" />
                    Since 2020
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#FF5A1F]" />
                    Community Memories
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
                    alt="HELLO GUNDA Gallery - Community Moments and Memories"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      Community Gallery
                    </p>
                    <p className="text-sm font-bold">HELLO GUNDA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CATEGORY FILTER ========== */}
        <section className="border-y border-[#151515] px-6 py-8 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm transition-all ${
                      activeCategory === cat
                        ? "bg-[#FF5A1F] text-[#080808] font-semibold"
                        : "border border-[#151515] text-[#A7A29A] hover:border-[#FF5A1F] hover:text-[#F5F1E8]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition ${
                    viewMode === "grid"
                      ? "bg-[#FF5A1F] text-[#080808]"
                      : "border border-[#151515] text-[#A7A29A] hover:border-[#FF5A1F] hover:text-[#F5F1E8]"
                  }`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition ${
                    viewMode === "list"
                      ? "bg-[#FF5A1F] text-[#080808]"
                      : "border border-[#151515] text-[#A7A29A] hover:border-[#FF5A1F] hover:text-[#F5F1E8]"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GALLERY GRID ========== */}
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="text-sm text-[#A7A29A]">
                Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
              </p>
            </div>

            {viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group cursor-pointer border border-[#151515] bg-[#0F0F0F] transition-all hover:-translate-y-2 hover:border-[#FF5A1F]"
                  >
                    <div className="relative aspect-video bg-[#151515] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-3 right-3 border border-[#151515] bg-[#080808]/90 px-3 py-1">
                        <span className="text-xs text-[#A7A29A]">{item.category}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-[#F5F1E8]">{item.title}</h3>
                        <div className="mt-1 flex items-center gap-4 text-xs text-[#A7A29A]">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" /> {item.views.toLocaleString()}
                          </span>
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
                    className="group flex cursor-pointer items-center gap-6 border border-[#151515] bg-[#0F0F0F] p-4 transition-all hover:border-[#FF5A1F] hover:bg-[#0F0F0F]/80"
                  >
                    <div className="relative h-20 w-32 shrink-0 overflow-hidden bg-[#151515]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#F5F1E8]">{item.title}</h3>
                      <p className="text-sm text-[#A7A29A]">{item.category}</p>
                    </div>
                    <div className="text-right text-sm text-[#A7A29A]">
                      <div>{item.date}</div>
                      <div className="mt-1 flex items-center justify-end gap-2">
                        <Eye className="h-4 w-4" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && (
              <div className="py-20 text-center text-[#A7A29A]">
                <p className="text-xl">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ========== LIGHTBOX ========== */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-4xl w-full border border-[#151515] bg-[#0F0F0F] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 text-[#A7A29A] transition-colors hover:text-[#F5F1E8]"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative aspect-video bg-[#151515]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#F5F1E8]">{selectedItem.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-[#A7A29A]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {selectedItem.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" /> {selectedItem.views.toLocaleString()} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-[#E63946]" /> {selectedItem.likes} likes
                  </span>
                  <span className="border border-[#151515] px-3 py-1 text-xs text-[#FF5A1F]">
                    {selectedItem.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== CTA ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
              <Trophy className="mx-auto h-16 w-16 text-[#FF5A1F]" />
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                WANT TO BE
                <br />
                <span className="text-[#FF5A1F]">FEATURED?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                Join our community and get a chance to be featured in our gallery.
                Every squad member has a story worth sharing.
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
                <p className="text-sm text-[#A7A29A]">Gallery • Gaming • Community</p>
              </div>

              <div className="flex gap-6">
                <Link
                  href="https://www.youtube.com/@HelloGunda"
                  target="_blank"
                  rel="noopener noreferrer"
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