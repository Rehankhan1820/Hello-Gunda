import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MessageCircle,
  PlayCircle,
  Youtube,
  Twitter,
  Send,
  ExternalLink,
  Globe,
  MapPin,
  Users,
  Gamepad2,
  Trophy,
  Sparkles,
  Tv,
  Monitor,
} from "lucide-react";

export const metadata = {
  title: "Contact HELLO GUNDA | Free Fire Gaming",
  description:
    "Contact HELLO GUNDA for gaming, collaboration, business and community enquiries.",
  keywords: [
    "HELLO GUNDA",
    "Contact HELLO GUNDA",
    "Free Fire gaming",
    "Free Fire creator",
    "Free Fire collaboration",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adilbhai13062015@gmail.com",
    href: "mailto:adilbhai13062015@gmail.com",
    description: "For business, collaboration and general enquiries",
  },
  {
    icon: MessageCircle,
    label: "Instagram",
    value: "@HelloGunda",
    href: "https://instagram.com/hellogunda",
    description: "Follow for daily updates and behind the scenes",
  },
  {
    icon: PlayCircle,
    label: "YouTube",
    value: "Hello Gunda",
    href: "https://www.youtube.com/@HelloGunda",
    description: "Watch gameplay, funny moments and more",
  },
  {
    icon: Tv,
    label: "KICK LIVE",
    value: "Kick.com/HelloGunda",
    href: "https://kick.com/hellogunda",
    description: "Watch live streams and interact with the squad",
  },
];

const quickLinks = [
  { icon: Gamepad2, label: "Guild", href: "/guild" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Globe, label: "Journey", href: "/journey" },
  { icon: Trophy, label: "Gallery", href: "/gallery" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8]">
        {/* ========== HERO ========== */}
        <section className="relative min-h-[50vh] overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  Get In Touch
                </p>

                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                  CONTACT
                  <br />
                  <span className="text-[#FF5A1F]">HELLO GUNDA</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  Have a question, collaboration idea, or just want to say hello?
                  Reach out to the squad — we'd love to hear from you.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[#A7A29A]">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#FF5A1F]" />
                    adilbhai13062015@gmail.com
                  </span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:adilbhai13062015@gmail.com"
                    className="group inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                  >
                    SEND EMAIL
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
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
                    alt="HELLO GUNDA - Contact and Connect"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      Connect With Us
                    </p>
                    <p className="text-sm font-bold">HELLO GUNDA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CONTACT INFO ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Connect
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                GET IN <span className="text-[#FF5A1F]">TOUCH</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isEmail = item.label === "Email";
                const isKick = item.label === "KICK LIVE";
                const isExternal = isKick || item.label === "YouTube" || item.label === "Instagram";

                if (isEmail) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group border border-[#151515] bg-[#0F0F0F] p-8 transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FF5A1F]/10 p-3">
                          <Icon className="h-6 w-6 text-[#FF5A1F]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7A29A]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-lg font-bold text-[#FF5A1F] group-hover:text-[#E63946] transition-colors">
                            {item.value}
                          </p>
                          <p className="mt-1 text-sm text-[#A7A29A]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                }

                if (isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-[#151515] bg-[#0F0F0F] p-8 transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#FF5A1F]/10 p-3">
                          <Icon className="h-6 w-6 text-[#FF5A1F]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7A29A]">
                              {item.label}
                            </p>
                            <ExternalLink className="h-3 w-3 text-[#A7A29A] group-hover:text-[#FF5A1F] transition-colors" />
                          </div>
                          <p className="mt-1 text-lg font-bold text-[#F5F1E8] group-hover:text-[#FF5A1F] transition-colors">
                            {item.value}
                          </p>
                          <p className="mt-1 text-sm text-[#A7A29A]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group border border-[#151515] bg-[#0F0F0F] p-8 transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-[#FF5A1F]/10 p-3">
                        <Icon className="h-6 w-6 text-[#FF5A1F]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7A29A]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-lg font-bold text-[#F5F1E8] group-hover:text-[#FF5A1F] transition-colors">
                          {item.value}
                        </p>
                        <p className="mt-1 text-sm text-[#A7A29A]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== QUICK LINKS ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Explore
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                QUICK <span className="text-[#FF5A1F]">LINKS</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group border border-[#151515] bg-[#0F0F0F] p-6 text-center transition-all hover:border-[#FF5A1F] hover:-translate-y-1"
                  >
                    <Icon className="mx-auto h-8 w-8 text-[#FF5A1F] transition-transform group-hover:scale-110" />
                    <p className="mt-3 font-semibold text-[#F5F1E8] group-hover:text-[#FF5A1F] transition-colors">
                      {link.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
              <MessageCircle className="mx-auto h-16 w-16 text-[#FF5A1F]" />
              <h2 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                LET'S <span className="text-[#FF5A1F]">CONNECT</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                Whether you want to collaborate, join the guild, or just say hi
                — we're always happy to connect with our community.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:adilbhai13062015@gmail.com"
                  className="group inline-flex items-center bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105"
                >
                  SEND EMAIL
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://kick.com/hellogunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-[#F5F1E8] px-10 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                >
                  WATCH LIVE
                  <Monitor className="ml-2 h-4 w-4" />
                </a>
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
                <p className="text-sm text-[#A7A29A]">Gaming • Community • Connect</p>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://www.youtube.com/@HelloGunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                  aria-label="YouTube"
                >
                  <PlayCircle className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/hellogunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                  aria-label="Instagram"
                >
                  <PlayCircle className="h-6 w-6" />
                </a>
                <a
                  href="https://kick.com/hellogunda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7A29A] transition-colors hover:text-[#FF5A1F]"
                  aria-label="Kick Live"
                >
                  <Tv className="h-6 w-6" />
                </a>
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