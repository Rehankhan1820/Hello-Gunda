"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
    { name: "Home", href: "/" },
    { name: "Gaming", href: "/gaming" },
    { name: "Guild", href: "/guild" },
    { name: "Journey", href: "/journey" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <header className="fixed top-0 left-0 z-50 w-full border-b border-red-500/20 bg-black/60 backdrop-blur-xl">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4">

                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-red-500 blur-xl opacity-50 animate-pulse" />

                            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,.5)]">

                                <Image
                                    src="/logo.jpg"
                                    alt="Hello Gunda Logo"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                            </div>

                        </div>

                        <div>

                            <h1 className="font-black tracking-[4px] text-white">
                                HELLO GUNDA
                            </h1>

                            <p className="text-xs text-zinc-400">
                                OFFICIAL WEBSITE
                            </p>

                        </div>

                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">

                        {links.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative text-sm font-semibold text-zinc-300 transition hover:text-red-500"
                            >
                                {item.name}

                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />

                            </Link>
                        ))}

                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Link
                            href="/youtube"
                            className="rounded-full bg-red-600 p-3 transition hover:scale-110 hover:bg-red-700"
                        >
                            <PlayCircle size={20} />
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-red-500 px-6 py-3 text-red-500 transition hover:bg-red-600 hover:text-white"
                        >
                            Join Community
                        </Link>

                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-lg p-2 text-white transition hover:bg-red-600/20 lg:hidden"
                    >
                        <Menu size={30} />
                    </button>

                </div>

            </header>

            {/* ================= SIDEBAR ================= */}

            <AnimatePresence>

                {open && (
                    <>
                        {/* Overlay */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
                        />

                        {/* Right Drawer */}

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18,
                            }}
                            className="fixed right-0 top-0 z-50 flex h-screen w-[340px] flex-col overflow-hidden border-l border-red-500/20 bg-[#090909]"
                        >

                            {/* Glow */}

                            <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-red-600/30 blur-[120px]" />

                            {/* Header */}

                            <div className="relative flex items-center justify-between border-b border-zinc-800 p-6">

                                <div className="flex items-center gap-4">

                                    <div className="relative">

                                        <div className="absolute inset-0 rounded-full bg-red-500 blur-xl opacity-60 animate-pulse" />

                                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,.5)]">

                                            <Image
                                                src="/logo.jpg"
                                                alt="Hello Gunda Logo"
                                                fill
                                                className="object-cover"
                                                priority
                                            />

                                        </div>

                                    </div>

                                    <div>

                                        <h2 className="font-black tracking-widest text-white">
                                            HELLO GUNDA
                                        </h2>

                                        <p className="text-xs text-zinc-500">
                                            Official Website
                                        </p>

                                    </div>

                                </div>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="rounded-full bg-zinc-800 p-2 transition hover:bg-red-600"
                                >
                                    <X size={20} />
                                </button>

                            </div>

                            {/* Menu */}

                            <div className="mt-8 flex flex-1 flex-col px-5">

                                {links.map((item, index) => (

                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.08,
                                        }}
                                    >

                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="group mb-3 flex items-center justify-between rounded-xl border border-transparent px-5 py-4 text-zinc-300 transition-all duration-300 hover:border-red-500/30 hover:bg-red-600/10 hover:text-white"
                                        >

                                            <span>{item.name}</span>

                                            <span className="translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                                                →
                                            </span>

                                        </Link>

                                    </motion.div>

                                ))}

                            </div>

                            {/* Footer */}

                            <div className="border-t border-zinc-800 p-6">

                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className="block rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-4 text-center font-bold text-white transition hover:scale-[1.02]"
                                >
                                    Join Community
                                </Link>

                                <p className="mt-5 text-center text-xs text-zinc-500">
                                    © 2026 HELLO GUNDA
                                </p>

                            </div>

                        </motion.aside>

                    </>
                )}

            </AnimatePresence>

        </>
    );
}