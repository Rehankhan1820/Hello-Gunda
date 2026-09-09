import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Trophy,
  Swords,
  Shield,
  Star,
  Crown,
  Award,
  Heart,
  Users2,
  User,
  UserPlus,
  Check,
  ArrowRight,
  Gamepad2,
  MapPin,
  Globe,
  Play,
  Calendar,
  Gift,
  Target,
  GitBranch,
  Crown as CrownIcon,
  UserCog,
  ShieldCheck,
  Sword,
  PlayCircle,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "HELLO GUNDA Guild | Free Fire Guild India",
  description:
    "Join the HELLO GUNDA Free Fire Guild in India. Explore our guild leadership, squad matches, custom rooms, gaming events and Free Fire community.",
  keywords: [
    "HELLO GUNDA",
    "Hello Gunda Guild",
    "Free Fire Guild",
    "Free Fire Guild India",
    "Free Fire India",
    "Free Fire gaming community",
    "Free Fire squad",
    "Free Fire custom rooms",
  ],
  alternates: {
    canonical: "/guild",
  },
};

// Real leadership data
const leadership = [
  {
    role: "Guild Leader",
    name: "HELLO GUNDA",
    uid: "1798292163",
    roleTitle: "Founder & Guild Leader",
    speciality: ["Squad Leadership", "Custom Rooms", "Competitive Gameplay"],
    image: "/gunda.jpeg",
    number: "01",
  },
  {
    role: "Acting Guild Leader",
    name: "SUMIT",
    uid: "2072053042",
    roleTitle: "Guild Management",
    speciality: ["Squad Coordination", "Recruitment"],
    image: "/sumit.jpeg",
    number: "02",
  },
  {
    role: "Officer",
    name: "HELLO BEAST",
    uid: "519366839",
    roleTitle: "Guild Officer",
    speciality: ["Team Support", "Custom Matches", "Community Events"],
    image: "/beast.jpeg",
    number: "03",
  },
];

// Feature items
const features = [
  {
    number: "01",
    icon: Sword,
    title: "Daily Squad Matches",
    description: "Regular squad sessions built around teamwork and consistency.",
  },
  {
    number: "02",
    icon: Users,
    title: "Custom Room Battles",
    description: "Private matches, challenges and competitive fun.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Friendly Community",
    description: "Play, connect and grow with other Free Fire players.",
  },
  {
    number: "04",
    icon: Users2,
    title: "Active Members",
    description: "A community that stays involved beyond the match.",
  },
  {
    number: "05",
    icon: Gift,
    title: "Gaming Events",
    description: "Community events that keep the guild active.",
  },
  {
    number: "06",
    icon: Trophy,
    title: "Competitive Gameplay",
    description: "Push your limits and sharpen your gameplay.",
  },
];

// Rules
const rules = [
  "Respect Every Member",
  "No Toxic Behaviour",
  "Support Your Squad",
  "Stay Active",
  "Fair Gameplay",
  "Enjoy The Game",
];

// Goals
const goals = [
  "Build a strong gaming community.",
  "Help new players improve.",
  "Play together every day.",
  "Organize exciting custom room matches.",
  "Create entertaining Free Fire content.",
];

// Why join items
const whyJoin = [
  "Active Guild",
  "Experienced Leadership",
  "Friendly Players",
  "Daily Gameplay",
  "Competitive Matches",
  "Amazing Community",
];

// Achievements
const achievements = [
  { number: "01", label: "Growing Community" },
  { number: "02", label: "Hundreds of Squad Matches" },
  { number: "03", label: "Active Free Fire Guild" },
  { number: "04", label: "Dedicated Gaming Team" },
];

export default function GuildPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#080808] text-[#F5F1E8] font-['Inter',ui-sans-serif,system-ui,sans-serif]">
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] overflow-hidden px-6 pt-32 pb-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* LEFT */}
              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  HELLO GUNDA GUILD / INDIA
                </p>

                <h1 className="mt-4 text-6xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                  BUILT TO
                  <br />
                  <span className="text-[#FF5A1F]">PLAY</span>
                  <br />
                  TOGETHER.
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#A7A29A]">
                  Welcome to the official HELLO GUNDA Free Fire Guild — a
                  community built around competitive matches, squad gameplay,
                  custom rooms and gaming together.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#FF5A1F] px-8 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105 group"
                  >
                    JOIN THE GUILD
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#leadership"
                    className="inline-flex items-center border border-[#F5F1E8] px-8 py-4 font-semibold text-[#F5F1E8] transition-all hover:bg-[#F5F1E8] hover:text-[#080808]"
                  >
                    EXPLORE THE TEAM
                  </Link>
                </div>

                {/* Guild ID and Status */}
                <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#151515] pt-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                      Guild ID
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold">
                      3030024523
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                      Status
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#D6FF4B]">
                      Open Recruitment
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT - Editorial Image */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F]">
                  <Image
                    src="/gunda.jpeg"
                    alt="HELLO GUNDA - Guild Leader and Free Fire Creator"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Decorative overlay */}
                  <div className="absolute bottom-0 left-0 bg-[#080808]/90 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                      GUILD LEADER
                    </p>
                    <p className="text-sm font-bold">HELLO GUNDA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== GUILD IDENTITY SECTION ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-5xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                  MORE THAN
                  <br />
                  <span className="text-[#FF5A1F]">A GUILD.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[#A7A29A]">
                  HELLO GUNDA is a Free Fire gaming community built around
                  teamwork, competition, entertainment and everyday squad
                  gameplay.
                </p>
              </div>
            </div>

            {/* Identity Strip */}
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#151515] pt-12 md:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                  Guild Name
                </p>
                <p className="mt-2 text-xl font-bold text-[#FF5A1F]">
                  HELLO GUNDA
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                  Game
                </p>
                <p className="mt-2 text-xl font-bold">Free Fire</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                  Region
                </p>
                <p className="mt-2 text-xl font-bold">India</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                  Status
                </p>
                <p className="mt-2 text-xl font-bold text-[#D6FF4B]">
                  Open Recruitment
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#151515] pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A7A29A]">
                Guild ID
              </p>
              <p className="mt-1 font-mono text-2xl font-bold">
                3030024523
              </p>
            </div>
          </div>
        </section>

        {/* ========== LEADERSHIP SECTION ========== */}
        <section id="leadership" className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Leadership
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                THE PEOPLE
                <br />
                <span className="text-[#FF5A1F]">BEHIND THE GUILD.</span>
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#A7A29A]">
                Every squad needs players who lead, coordinate and keep the
                community moving.
              </p>
            </div>

            <div className="space-y-12">
              {/* Featured Leader - HELLO GUNDA */}
              <div className="grid gap-8 border-b border-[#151515] pb-12 md:grid-cols-2 md:gap-16">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F] order-2 md:order-1">
                  <Image
                    src="/gunda.jpeg"
                    alt="HELLO GUNDA - Guild Leader and Founder"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#080808]/90 px-3 py-1.5">
                    <p className="text-xs font-bold text-[#FF5A1F]">01</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center order-1 md:order-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                    Guild Leader
                  </p>
                  <h3 className="mt-2 text-4xl font-bold">HELLO GUNDA</h3>
                  <p className="font-mono text-sm text-[#A7A29A]">
                    UID 1798292163
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Founder & Guild Leader
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {leadership[0].speciality.map((spec) => (
                      <span
                        key={spec}
                        className="border border-[#151515] px-3 py-1 text-xs text-[#A7A29A]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Supporting Leaders - SUMIT & HELLO BEAST */}
              <div className="grid gap-8 md:grid-cols-2">
                {leadership.slice(1).map((leader) => (
                  <div
                    key={leader.name}
                    className="grid gap-6 border-b border-[#151515] pb-8 last:border-0 sm:grid-cols-2 md:border-0 md:pb-0"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border border-[#151515] bg-[#0F0F0F]">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      <div className="absolute top-4 left-4 bg-[#080808]/90 px-3 py-1.5">
                        <p className="text-xs font-bold text-[#A7A29A]">
                          {leader.number}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A7A29A]">
                        {leader.role}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold">{leader.name}</h3>
                      <p className="font-mono text-sm text-[#A7A29A]">
                        UID {leader.uid}
                      </p>
                      <p className="mt-2 font-semibold">{leader.roleTitle}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {leader.speciality.map((spec) => (
                          <span
                            key={spec}
                            className="border border-[#151515] px-3 py-1 text-xs text-[#A7A29A]"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== HOW WE PLAY SECTION ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Gameplay
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                HOW WE PLAY.
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="grid grid-cols-12 items-center gap-4 border-b border-[#151515] pb-6 last:border-0"
                  >
                    <div className="col-span-1 text-sm font-bold text-[#FF5A1F]">
                      {feature.number}
                    </div>
                    <div className="col-span-1 text-[#A7A29A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="col-span-4">
                      <h3 className="font-bold">{feature.title}</h3>
                    </div>
                    <div className="col-span-6 text-sm text-[#A7A29A]">
                      {feature.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========== RULES + GOALS ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Rules */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  Code of Conduct
                </p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">
                  GUILD CODE
                </h2>
                <ul className="mt-8 space-y-4">
                  {rules.map((rule) => (
                    <li
                      key={rule}
                      className="flex items-center gap-3 border-b border-[#151515] pb-4 last:border-0"
                    >
                      <span className="text-[#FF5A1F]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-[#F5F1E8]">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Goals */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                  Our Vision
                </p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">
                  WHAT WE'RE BUILDING
                </h2>
                <ul className="mt-8 space-y-4">
                  {goals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-start gap-3 border-b border-[#151515] pb-4 last:border-0"
                    >
                      <span className="mt-1 text-[#FF5A1F]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="text-[#A7A29A]">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHY JOIN HELLO GUNDA ========== */}
        <section className="bg-[#0F0F0F] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              YOUR NEXT
              <br />
              <span className="text-[#FF5A1F]">SQUAD STARTS HERE.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
              Looking for an active Free Fire guild where you can play, compete,
              improve and be part of a real community?
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {whyJoin.map((item) => (
                <div
                  key={item}
                  className="border border-[#151515] bg-[#080808] p-4 text-center"
                >
                  <span className="text-sm font-semibold text-[#F5F1E8]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ACHIEVEMENTS ========== */}
        <section className="border-y border-[#151515] px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                Progress
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
                BUILT TO KEEP GROWING.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <p className="text-5xl font-black text-[#FF5A1F] md:text-6xl">
                    {achievement.number}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.1em] text-[#A7A29A]">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== JOIN CTA ========== */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <div className="border border-[#151515] bg-[#0F0F0F] px-8 py-16 text-center md:px-16 md:py-24">
              <h2 className="text-4xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                READY TO
                <br />
                <span className="text-[#FF5A1F]">JOIN THE SQUAD?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A7A29A]">
                Become part of HELLO GUNDA. Play together, compete together and
                build something bigger than a single match.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#FF5A1F] px-10 py-4 font-semibold text-[#080808] transition-all hover:bg-[#E63946] hover:scale-105 group"
                >
                  JOIN HELLO GUNDA
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
                <p className="text-sm text-[#A7A29A]">Guild • Gaming • Community</p>
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