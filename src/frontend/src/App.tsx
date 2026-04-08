import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  FlaskConical,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Radio,
  Settings,
  Star,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { toast } from "sonner";
import { Program } from "./backend.d";
import { useSubmitEnquiry } from "./hooks/useQueries";

const queryClient = new QueryClient();

function useScrollFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in-up");
    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="text-center px-6">
      <div
        className="font-display text-4xl md:text-5xl font-bold"
        style={{ color: "oklch(var(--gold))" }}
      >
        {count}
        {suffix}
      </div>
      <div className="text-white/80 mt-2 text-sm md:text-base font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
}

const programs = [
  {
    icon: <Cpu className="w-8 h-8" style={{ color: "#D4AF37" }} />,
    name: "B.Tech",
    duration: "4 Years",
    tagline: "India's most sought-after engineering degree.",
    specializations: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT"],
    color: "crimson",
  },
  {
    icon: <Zap className="w-8 h-8" style={{ color: "#D4AF37" }} />,
    name: "M.Tech",
    duration: "2 Years",
    tagline: "Deepen your technical expertise.",
    specializations: ["VLSI", "Structural Engg.", "Power Systems", "CSE"],
    color: "navy",
  },
  {
    icon: <Cpu className="w-8 h-8" style={{ color: "#D4AF37" }} />,
    name: "MCA",
    duration: "2 Years",
    tagline: "Build software solutions for tomorrow.",
    specializations: ["Web Development", "Data Science", "Cloud Computing"],
    color: "crimson",
  },
  {
    icon: <Briefcase className="w-8 h-8" style={{ color: "#D4AF37" }} />,
    name: "MBA",
    duration: "2 Years",
    tagline: "Lead organizations with confidence.",
    specializations: ["Marketing", "Finance", "HR Management", "Operations"],
    color: "navy",
  },
  {
    icon: <Microscope className="w-8 h-8" style={{ color: "#D4AF37" }} />,
    name: "Ph.D",
    duration: "3-5 Years",
    tagline: "Contribute to cutting-edge knowledge.",
    specializations: [
      "Computer Science",
      "Engineering",
      "Management",
      "Sciences",
    ],
    color: "crimson",
  },
];

const features = [
  {
    icon: <Building2 className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Modern Infrastructure & State-of-the-Art Labs",
  },
  {
    icon: <TrendingUp className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Industry-Leading Placement Record",
  },
  {
    icon: <Users className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Experienced & Dedicated Faculty",
  },
  {
    icon: <Award className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "NAAC Accredited Institution",
  },
  {
    icon: <FlaskConical className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Research & Innovation Centers",
  },
  {
    icon: <Heart className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Holistic Student Development Programs",
  },
  {
    icon: <Globe className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "Strong Alumni Network Worldwide",
  },
  {
    icon: <BookOpen className="w-5 h-5" style={{ color: "#D4AF37" }} />,
    text: "JNTUA Affiliated – Recognized University",
  },
];

const testimonials = [
  {
    quote:
      "RGMCET gave me the foundation to build my career in software engineering. The faculty support and placement cell were exceptional.",
    name: "Priya Reddy",
    program: "B.Tech CSE",
    year: "2022",
    role: "Software Engineer at TCS",
    initials: "PR",
  },
  {
    quote:
      "The M.Tech program here expanded my research capabilities significantly. World-class labs and mentorship opened doors I never imagined.",
    name: "Venkata Rao",
    program: "M.Tech ECE",
    year: "2023",
    role: "Research Engineer at DRDO",
    initials: "VR",
  },
  {
    quote:
      "MBA at RGMCET was transformative. The industry connections and real-world projects set me apart from the competition.",
    name: "Sravani Kumari",
    program: "MBA",
    year: "2022",
    role: "Manager at HDFC Bank",
    initials: "SK",
  },
];

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About RGMCET", target: "about" },
  { label: "Programs", target: "programs" },
  { label: "Admission", target: "admissions" },
  { label: "Contact Us", target: "contact" },
];

function LandingPage() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "news-ticker-style";
    style.textContent = [
      "@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }",
      ".news-ticker { animation: marquee 40s linear infinite; display: inline-flex; }",
      ".news-ticker:hover { animation-play-state: paused; }",
      "@keyframes deptScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }",
      ".dept-scroll { animation: deptScroll 30s linear infinite; }",
      ".dept-scroll:hover { animation-play-state: paused; }",
      ".dept-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }",
      ".dept-card:hover { transform: translateY(-6px); box-shadow: 0 0 20px oklch(0.85 0.18 85 / 0.35); border-color: oklch(0.85 0.18 85 / 0.7) !important; }",
    ].join(" ");
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    cityState: "",
    program: "" as Program | "",
    specialization: "",
    yearOfPassing: "",
  });

  const [footerForm, setFooterForm] = useState({
    fullName: "",
    phoneNumber: "",
    program: "" as Program | "",
  });
  const [footerSuccess, setFooterSuccess] = useState(false);
  const [footerSubmitting, setFooterSubmitting] = useState(false);
  const [galleryZoom, setGalleryZoom] = useState<number | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { from: "bot" | "user"; text: string }[]
  >([
    {
      from: "bot",
      text: "Hi! Welcome to RGMCET. How can I help you today? You can ask about admissions, programs, fees, or campus life.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const submitEnquiry = useSubmitEnquiry();

  useScrollFadeIn();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.program) {
      toast.error("Please select a program of interest.");
      return;
    }
    try {
      await submitEnquiry.mutateAsync({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        cityState: formData.cityState,
        program: formData.program as Program,
        specialization: formData.specialization,
        yearOfPassing: Number(formData.yearOfPassing),
      });
      toast.success(
        "Enquiry submitted! Our admissions team will contact you shortly.",
      );
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        cityState: "",
        program: "",
        specialization: "",
        yearOfPassing: "",
      });
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    }
  };

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerForm.program) {
      toast.error("Please select a program.");
      return;
    }
    setFooterSubmitting(true);
    try {
      await submitEnquiry.mutateAsync({
        fullName: footerForm.fullName,
        email: "",
        phoneNumber: footerForm.phoneNumber,
        cityState: "",
        program: footerForm.program as Program,
        specialization: "",
        yearOfPassing: 0,
      });
      setFooterSuccess(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setFooterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
      <nav
        data-ocid="nav.panel"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, #0a1628 0%, #1a2a5e 50%, #0d2137 100%)"
            : "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(26,42,94,0.93) 50%, rgba(13,33,55,0.95) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/rgmcet-logo-transparent.dim_200x200.png"
                alt="RGMCET Logo"
                className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5"
              />
              <div>
                <div
                  className="font-display font-bold text-lg leading-tight"
                  style={{ color: "white" }}
                >
                  RGMCET
                </div>
                <div className="text-white/70 text-xs hidden sm:block">
                  Nandyal, Andhra Pradesh
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.target)}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 mr-2">
                {[
                  {
                    Icon: SiFacebook,
                    href: "https://www.facebook.com/profile.php?id=61586608216900",
                    label: "Facebook",
                  },
                  { Icon: SiX, href: "#", label: "X (Twitter)" },
                  { Icon: SiInstagram, href: "#", label: "Instagram" },
                  { Icon: SiLinkedin, href: "#", label: "LinkedIn" },
                  {
                    Icon: SiYoutube,
                    href: "https://www.youtube.com/@rgmcet-autonomousnandyala.7374",
                    label: "YouTube",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-7 h-7 rounded-full transition-all hover:scale-110"
                    style={{
                      color: "#D4AF37",
                      backgroundColor: "rgba(212,175,55,0.12)",
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("admissions")}
                className="text-sm font-semibold px-5 py-2 rounded-md"
                style={{
                  backgroundColor: "oklch(var(--crimson))",
                  color: "white",
                }}
              >
                Apply Now
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle menu"
            >
              {navOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {navOpen && (
          <div
            className="md:hidden border-t px-4 py-4 space-y-1"
            style={{
              backgroundColor: "oklch(var(--navy))",
              borderColor: "oklch(0.35 0.10 250)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                data-ocid="nav.link"
                onClick={() => scrollTo(link.target)}
                className="block w-full text-left text-white/80 hover:text-white py-2 px-3 rounded text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("admissions")}
              className="w-full mt-2 font-semibold"
              style={{
                backgroundColor: "oklch(var(--crimson))",
                color: "white",
              }}
            >
              Apply Now
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/uploads/ChatGPT-Image-Mar-1-2026-02_28_26-PM-1.png')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.15 0.08 250 / 0.92) 0%, oklch(0.22 0.10 250 / 0.85) 50%, oklch(0.30 0.14 20 / 0.5) 100%)",
          }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-0 w-px h-64 opacity-20"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />
          <div
            className="absolute top-1/4 right-8 w-px h-48 opacity-10"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />
        </div>

        {/* News Ticker - MOVED TO TOP */}
        <div className="absolute top-[80px] left-0 right-0 z-20 overflow-hidden">
          <div
            style={{
              background: "oklch(0.1 0.05 250 / 0.85)",
              borderTop: "1px solid oklch(0.75 0.15 85 / 0.3)",
              borderBottom: "1px solid oklch(0.75 0.15 85 / 0.3)",
            }}
          >
            <div className="flex items-center">
              <div
                className="flex-shrink-0 px-4 py-2 font-bold text-xs tracking-widest"
                style={{ background: "oklch(0.45 0.22 25)", color: "white" }}
              >
                🔴 LATEST NEWS
              </div>
              <div className="overflow-hidden flex-1">
                <div
                  className="news-ticker gap-8 whitespace-nowrap py-2 px-4 text-sm"
                  style={{ color: "white" }}
                >
                  {[
                    "Admissions Open 2025-26 for B.Tech, M.Tech, MCA, MBA & Ph.D programs — Apply Now!",
                    "RGMCET Nandyal ranked among top engineering colleges in Andhra Pradesh",
                    "B.Tech Admissions 2025: CSE, ECE, EEE, Mechanical, Civil & IT branches available",
                    "M.Tech & MCA Admissions 2025 — Limited seats, register your interest today",
                    "NAAC A+ & NBA Approved programs — Quality education guaranteed at RGMCET",
                    "Student Achievement: RGMCET students bag placements at TCS, Infosys, Wipro & more",
                    "MBA & Ph.D programs open for enrollment — Industry-aligned curriculum",
                    "RGMCET Annual Tech Fest 2025 — Register now for exciting competitions and workshops",
                    "Scholarship opportunities available for meritorious students — Enquire today",
                  ]
                    .concat([
                      "Admissions Open 2025-26 for B.Tech, M.Tech, MCA, MBA & Ph.D programs — Apply Now!",
                      "RGMCET Nandyal ranked among top engineering colleges in Andhra Pradesh",
                      "B.Tech Admissions 2025: CSE, ECE, EEE, Mechanical, Civil & IT branches available",
                      "M.Tech & MCA Admissions 2025 — Limited seats, register your interest today",
                      "NAAC A+ & NBA Approved programs — Quality education guaranteed at RGMCET",
                      "Student Achievement: RGMCET students bag placements at TCS, Infosys, Wipro & more",
                      "MBA & Ph.D programs open for enrollment — Industry-aligned curriculum",
                      "RGMCET Annual Tech Fest 2025 — Register now for exciting competitions and workshops",
                      "Scholarship opportunities available for meritorious students — Enquire today",
                    ])
                    .map((item, i) => (
                      <span key={`ticker-${i}-${item.slice(0, 10)}`}>
                        <span
                          style={{ color: "oklch(0.75 0.15 85)" }}
                          className="mr-4"
                        >
                          ●
                        </span>
                        <span>{item}</span>
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-36">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{
              backgroundColor: "oklch(1 0 0 / 0.15)",
              border: "1px solid oklch(1 0 0 / 0.4)",
              color: "white",
            }}
          >
            <Star className="w-3 h-3 fill-current" />
            NAAC A+ · Affiliated to JNTUA
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 fade-in-up">
            Rajeev Gandhi Memorial
            <br />
            <span style={{ color: "oklch(var(--gold))" }}>
              College of Engineering
            </span>
            <br />
            &amp; Technology
            <br />
            <span
              style={{
                color: "oklch(var(--gold))",
                fontSize: "0.75em",
                fontWeight: "600",
                letterSpacing: "0.1em",
              }}
            >
              (Autonomous)
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto fade-in-up">
            Shaping Engineers &amp; Leaders of Tomorrow
            <span
              className="block mt-1 text-sm md:text-base font-medium"
              style={{ color: "oklch(var(--gold) / 0.9)" }}
            >
              Nandyal, Andhra Pradesh
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollTo("admissions")}
              className="text-base font-bold px-8 py-6 rounded-md shadow-lg"
              style={{
                backgroundColor: "oklch(var(--crimson))",
                color: "white",
              }}
            >
              Apply Now <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("programs")}
              className="text-base font-bold px-8 py-6 rounded-md"
              style={{
                borderColor: "oklch(var(--gold))",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              Explore Programs
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto fade-in-up">
            {[
              { v: "B.Tech", s: "CSE · ECE · EEE · More" },
              { v: "NAAC", s: "Accredited Institution" },
              { v: "JNTUA", s: "Affiliated University" },
              { v: "NBA", s: "Accredited Programs" },
            ].map((item) => (
              <div
                key={item.v}
                className="rounded-lg px-3 py-3 text-center"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.08)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
              >
                <div
                  className="font-display font-bold text-lg"
                  style={{ color: "white" }}
                >
                  {item.v}
                </div>
                <div className="text-white/70 text-xs mt-0.5">{item.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className="w-px h-12 animate-bounce"
            style={{ backgroundColor: "oklch(var(--gold) / 0.5)" }}
          />
        </div>
      </section>

      {/* Departments Scroll Strip */}
      <section
        className="py-0 overflow-hidden"
        style={{ background: "oklch(0.10 0.05 250)" }}
      >
        <div className="text-center py-6">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "oklch(0.85 0.18 85)" }}
          >
            Our Departments
          </span>
          <h2 className="text-white font-bold text-xl mt-1">
            Academic Excellence Across Disciplines
          </h2>
        </div>
        <div className="relative overflow-hidden pb-8">
          <div
            className="dept-scroll flex gap-5 px-4"
            style={{ width: "max-content" }}
          >
            {[
              {
                short: "CSE",
                full: "Computer Science & Engineering",
                icon: <Cpu className="w-8 h-8" />,
              },
              {
                short: "ECE",
                full: "Electronics & Communication Engg.",
                icon: <Radio className="w-8 h-8" />,
              },
              {
                short: "EEE",
                full: "Electrical & Electronics Engineering",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                short: "ME",
                full: "Mechanical Engineering",
                icon: <Settings className="w-8 h-8" />,
              },
              {
                short: "CE",
                full: "Civil Engineering",
                icon: <Building2 className="w-8 h-8" />,
              },
              {
                short: "IT",
                full: "Information Technology",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                short: "MCA",
                full: "Master of Computer Applications",
                icon: <Code2 className="w-8 h-8" />,
              },
              {
                short: "MBA",
                full: "Master of Business Administration",
                icon: <Briefcase className="w-8 h-8" />,
              },
              {
                short: "M.Tech",
                full: "VLSI · Structural · Power · CSE",
                icon: <GraduationCap className="w-8 h-8" />,
              },
              {
                short: "Ph.D",
                full: "Research Programs",
                icon: <FlaskConical className="w-8 h-8" />,
              },
            ]
              .concat([
                {
                  short: "CSE",
                  full: "Computer Science & Engineering",
                  icon: <Cpu className="w-8 h-8" />,
                },
                {
                  short: "ECE",
                  full: "Electronics & Communication Engg.",
                  icon: <Radio className="w-8 h-8" />,
                },
                {
                  short: "EEE",
                  full: "Electrical & Electronics Engineering",
                  icon: <Zap className="w-8 h-8" />,
                },
                {
                  short: "ME",
                  full: "Mechanical Engineering",
                  icon: <Settings className="w-8 h-8" />,
                },
                {
                  short: "CE",
                  full: "Civil Engineering",
                  icon: <Building2 className="w-8 h-8" />,
                },
                {
                  short: "IT",
                  full: "Information Technology",
                  icon: <Globe className="w-8 h-8" />,
                },
                {
                  short: "MCA",
                  full: "Master of Computer Applications",
                  icon: <Code2 className="w-8 h-8" />,
                },
                {
                  short: "MBA",
                  full: "Master of Business Administration",
                  icon: <Briefcase className="w-8 h-8" />,
                },
                {
                  short: "M.Tech",
                  full: "VLSI · Structural · Power · CSE",
                  icon: <GraduationCap className="w-8 h-8" />,
                },
                {
                  short: "Ph.D",
                  full: "Research Programs",
                  icon: <FlaskConical className="w-8 h-8" />,
                },
              ])
              .map((dept, i) => (
                <div
                  key={`${dept.short}-${i}`}
                  className="dept-card flex-shrink-0 flex flex-col items-center text-center px-5 py-4 rounded-xl cursor-default"
                  style={{
                    width: "180px",
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(0.85 0.18 85 / 0.25)",
                  }}
                  data-ocid="departments.item"
                >
                  <div className="relative mb-1">
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div style={{ color: "oklch(0.85 0.18 85)" }}>
                      {dept.icon}
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mt-2">
                    {dept.short}
                  </p>
                  <p className="text-white/60 text-xs mt-0.5 leading-tight">
                    {dept.full}
                  </p>
                  <span
                    className="mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.85 0.18 85 / 0.15)",
                      color: "oklch(0.85 0.18 85)",
                    }}
                  >
                    Admissions Open
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={statsRef}
        className="py-14"
        style={{ backgroundColor: "oklch(var(--navy))" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              value={30}
              suffix="+"
              label="Years of Excellence"
              started={statsVisible}
            />
            <StatItem
              value={10000}
              suffix="+"
              label="Alumni Worldwide"
              started={statsVisible}
            />
            <StatItem
              value={95}
              suffix="%"
              label="Placement Rate"
              started={statsVisible}
            />
            <StatItem
              value={200}
              suffix="+"
              label="Expert Faculty"
              started={statsVisible}
            />
          </div>
          <div
            className="text-center mt-8 text-sm font-semibold tracking-widest uppercase"
            style={{ color: "oklch(var(--gold) / 0.8)" }}
          >
            NAAC A+ · Affiliated to JNTUA · NBA Accredited Programs
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        data-ocid="programs.section"
        className="py-20 relative"
        style={{
          backgroundImage: "url(/assets/uploads/PLACEMENTLOGOS-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "oklch(0.13 0.055 250 / 0.92)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <div
              className="inline-block text-sm font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded"
              style={{
                backgroundColor: "oklch(var(--gold) / 0.12)",
                color: "oklch(var(--gold))",
              }}
            >
              Academic Programs
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
              Choose Your{" "}
              <span style={{ color: "oklch(var(--crimson))" }}>Path</span>
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto">
              From undergraduate engineering to advanced research, RGMCET offers
              programs designed to build tomorrow's leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div
                key={prog.name}
                className="rounded-xl p-6 hover-lift fade-in-up group"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  backgroundColor: "oklch(var(--navy))",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "oklch(var(--gold) / 0.2)",
                    color: "oklch(var(--gold))",
                  }}
                >
                  {prog.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {prog.name}
                  </h3>
                  <span className="text-sm text-white/60">{prog.duration}</span>
                </div>
                <p className="text-sm text-white/70 mb-4">{prog.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {prog.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "oklch(1 0 0 / 0.12)",
                        color: "white",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => scrollTo("admissions")}
                  className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: "white" }}
                >
                  Know More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RGMCET */}
      <section
        id="about"
        data-ocid="why.section"
        className="py-20"
        style={{ backgroundColor: "oklch(0.16 0.065 250)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in-up">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "4/3" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/9nxcJeIeNoY"
                  title="RGMCET Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 rounded-xl p-5 shadow-xl text-center"
                style={{ backgroundColor: "oklch(var(--navy))" }}
              >
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  30+
                </div>
                <div className="text-white/80 text-xs mt-0.5">
                  Years of Excellence
                </div>
              </div>
            </div>

            <div className="fade-in-up">
              <div
                className="inline-block text-sm font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded"
                style={{
                  backgroundColor: "oklch(var(--crimson) / 0.1)",
                  color: "oklch(var(--crimson))",
                }}
              >
                Why RGMCET
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Built for{" "}
                <span style={{ color: "oklch(var(--gold))" }}>Excellence</span>
              </h2>
              <p className="text-white/70 mb-8">
                For over two decades, RGMCET has been the preferred destination
                for engineering and management education in Andhra Pradesh,
                nurturing talent with academic rigor and industry readiness.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feat) => (
                  <div key={feat.text} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: "oklch(1 0 0 / 0.1)",
                        color: "oklch(var(--gold))",
                      }}
                    >
                      {feat.icon}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("admissions")}
                className="mt-8 font-bold px-8 py-5"
                style={{
                  backgroundColor: "oklch(var(--crimson))",
                  color: "white",
                }}
              >
                Start Your Application <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Strip */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--crimson)) 0%, oklch(0.35 0.18 15) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-black">
              Our Achievements &amp; Accreditations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "NAAC A+",
                sub: "Grade A+ Institution",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "NBA Accredited",
                sub: "Multiple Programs",
              },
              {
                icon: <Landmark className="w-8 h-8" />,
                title: "100+ Recruiters",
                sub: "Visit Every Year",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Top Placements",
                sub: "TCS · Infosys · Wipro · Cognizant",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-5 rounded-xl"
                style={{ backgroundColor: "oklch(1 0 0 / 0.1)" }}
              >
                <div className="flex justify-center mb-3">
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #F5E07A 50%, #B8960C 100%)",
                      borderRadius: "50%",
                      padding: "12px",
                      display: "inline-flex",
                      boxShadow: "0 2px 12px #D4AF3755",
                    }}
                  >
                    {React.cloneElement(item.icon, {
                      style: { color: "#1a1a1a" },
                    })}
                  </div>
                </div>
                <div className="font-display text-lg font-bold text-black">
                  {item.title}
                </div>
                <div className="text-black/70 text-sm mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        data-ocid="testimonials.section"
        className="py-20"
        style={{ backgroundColor: "oklch(0.13 0.055 250)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 fade-in-up">
            <div
              className="inline-block text-sm font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded"
              style={{
                backgroundColor: "oklch(0.62 0.16 72 / 0.15)",
                color: "oklch(0.62 0.16 72)",
              }}
            >
              Student Stories
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
              Voices of{" "}
              <span style={{ color: "oklch(0.62 0.16 72)" }}>Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-ocid={`testimonials.item.${idx + 1}`}
                className="rounded-xl p-6 fade-in-up hover-lift relative"
                style={{
                  animationDelay: `${idx * 0.15}s`,
                  backgroundColor: "oklch(0.16 0.065 250)",
                  border: "1px solid oklch(1 0 0 / 0.15)",
                }}
              >
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
                <div className="mt-2">
                  <div
                    className="text-3xl mb-3"
                    style={{ color: "oklch(var(--gold) / 0.4)" }}
                  >
                    &ldquo;
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ backgroundColor: "oklch(var(--crimson))" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">
                        {t.name}
                      </div>
                      <div className="text-xs text-white/50">
                        {t.program} · {t.year}
                      </div>
                      <div
                        className="text-xs font-medium"
                        style={{ color: "oklch(var(--crimson))" }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        data-ocid="gallery.section"
        className="py-20 fade-in-section"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.06 250) 0%, oklch(0.16 0.08 250) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{
                background: "oklch(0.25 0.12 50 / 0.3)",
                border: "1px solid oklch(0.65 0.18 50 / 0.4)",
              }}
            >
              <Trophy className="w-4 h-4" style={{ color: "#D4AF37" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#D4AF37" }}
              >
                Placement Gallery
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Placement Highlights
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Celebrating student success stories and industry partnerships at
              RGMCET
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/assets/uploads/tpo-1.jpg", alt: "TPO" },
              {
                src: "/assets/uploads/tcs-infosys-wipro_0-sixteen_nine_0-2.jpg",
                alt: "TCS Infosys Wipro",
              },
              {
                src: "/assets/uploads/PLACEMENTLOGOS-1-3.png",
                alt: "Placement Logos",
              },
              { src: "/assets/uploads/PALCEMENTS-4.png", alt: "Placements" },
              {
                src: "/assets/uploads/Screenshot-2026-03-16-114126-5.png",
                alt: "Sports Events",
              },
              { src: "/assets/uploads/tp_2023-24-6.png", alt: "TP 2023-24" },
            ].map((img, idx) => (
              <button
                key={img.alt}
                type="button"
                data-ocid={`gallery.item.${idx + 1}`}
                className="relative overflow-hidden rounded-xl cursor-pointer group text-left w-full"
                style={{
                  aspectRatio: "4/3",
                  border: "1px solid oklch(0.65 0.18 50 / 0.3)",
                  background: "none",
                  padding: 0,
                }}
                onClick={() => setGalleryZoom(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "oklch(0.1 0.06 250 / 0.6)" }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ background: "oklch(0.65 0.18 50 / 0.9)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-label="Zoom in"
                      role="img"
                    >
                      <title>Zoom in</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {galleryZoom !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "oklch(0.05 0.02 250 / 0.95)" }}
            onClick={() => setGalleryZoom(null)}
            onKeyDown={(e) => e.key === "Escape" && setGalleryZoom(null)}
            data-ocid="gallery.modal"
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full text-white"
              style={{ background: "oklch(0.25 0.08 250)" }}
              onClick={() => setGalleryZoom(null)}
              data-ocid="gallery.close_button"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white"
              style={{ background: "oklch(0.25 0.08 250)" }}
              onClick={(e) => {
                e.stopPropagation();
                setGalleryZoom((g) => (g !== null ? (g - 1 + 6) % 6 : null));
              }}
              data-ocid="gallery.pagination_prev"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <img
              src={
                [
                  "/assets/uploads/tpo-1.jpg",
                  "/assets/uploads/tcs-infosys-wipro_0-sixteen_nine_0-2.jpg",
                  "/assets/uploads/PLACEMENTLOGOS-1-3.png",
                  "/assets/uploads/PALCEMENTS-4.png",
                  "/assets/uploads/Screenshot-2026-03-16-114126-5.png",
                  "/assets/uploads/tp_2023-24-6.png",
                ][galleryZoom]
              }
              alt="Gallery zoom"
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              style={{ boxShadow: "0 25px 60px oklch(0 0 0 / 0.5)" }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white"
              style={{ background: "oklch(0.25 0.08 250)" }}
              onClick={(e) => {
                e.stopPropagation();
                setGalleryZoom((g) => (g !== null ? (g + 1) % 6 : null));
              }}
              data-ocid="gallery.pagination_next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </section>

      {/* Enquiry Form */}
      <section
        id="admissions"
        data-ocid="enquiry.section"
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.08 250) 0%, oklch(0.22 0.12 255) 40%, oklch(0.28 0.15 20) 70%, oklch(0.32 0.18 40) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10 fade-in-up">
            <div
              className="inline-block text-sm font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.15)",
                color: "white",
              }}
            >
              Admissions Open 2025
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
              Begin Your Admissions Journey
            </h2>
            <p className="text-white/60 mt-3">
              Fill in your details and our admissions counselor will reach out
              to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="w-full mb-8">
          <img
            src="/assets/uploads/5527237c-8efb-404d-8fa1-14ea06e7062a-1.png"
            alt="RGMCET Campus"
            className="w-full object-cover"
            style={{ maxHeight: "480px" }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="rounded-2xl p-8 shadow-2xl fade-in-up"
            style={{
              backgroundColor: "oklch(0.18 0.05 250)",
              border: "1px solid oklch(1 0 0 / 0.15)",
            }}
          >
            {submitEnquiry.isSuccess ? (
              <div
                data-ocid="enquiry.success_state"
                className="text-center py-12"
              >
                <CheckCircle2
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Application Received!
                </h3>
                <p className="text-white/70">
                  Thank you for your interest in RGMCET. Our admissions team
                  will contact you shortly.
                </p>
                <Button
                  onClick={() => submitEnquiry.reset()}
                  className="mt-6"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "white",
                  }}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">Full Name *</Label>
                    <Input
                      data-ocid="enquiry.input"
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, fullName: e.target.value }))
                      }
                      required
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">
                      Email Address *
                    </Label>
                    <Input
                      data-ocid="enquiry.email.input"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">
                      Phone Number *
                    </Label>
                    <Input
                      data-ocid="enquiry.phone.input"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          phoneNumber: e.target.value,
                        }))
                      }
                      required
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">
                      City / State *
                    </Label>
                    <Input
                      data-ocid="enquiry.city.input"
                      type="text"
                      placeholder="e.g. Nandyal, Andhra Pradesh"
                      value={formData.cityState}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          cityState: e.target.value,
                        }))
                      }
                      required
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">
                      Program of Interest *
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(v) =>
                        setFormData((p) => ({ ...p, program: v as Program }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="enquiry.program.select"
                        style={{
                          backgroundColor: "oklch(0.22 0.06 250)",
                          borderColor: "oklch(1 0 0 / 0.25)",
                          color: formData.program
                            ? "white"
                            : "oklch(1 0 0 / 0.4)",
                        }}
                      >
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={Program.btech}>B.Tech</SelectItem>
                        <SelectItem value={Program.mtech}>M.Tech</SelectItem>
                        <SelectItem value={Program.mca}>MCA</SelectItem>
                        <SelectItem value={Program.mba}>MBA</SelectItem>
                        <SelectItem value={Program.phd}>Ph.D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm">
                      Specialization
                    </Label>
                    <Input
                      data-ocid="enquiry.specialization.input"
                      type="text"
                      placeholder="e.g. CSE, ECE, Finance"
                      value={formData.specialization}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          specialization: e.target.value,
                        }))
                      }
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label className="text-white/80 text-sm">
                      Year of Passing 12th / Graduation *
                    </Label>
                    <Input
                      data-ocid="enquiry.year.input"
                      type="number"
                      placeholder="e.g. 2024"
                      min={2000}
                      max={2030}
                      value={formData.yearOfPassing}
                      onChange={(e) =>
                        setFormData((p) => ({
                          ...p,
                          yearOfPassing: e.target.value,
                        }))
                      }
                      required
                      style={{
                        backgroundColor: "oklch(0.22 0.06 250)",
                        borderColor: "oklch(1 0 0 / 0.25)",
                        color: "white",
                      }}
                    />
                  </div>
                </div>

                {submitEnquiry.isError && (
                  <div
                    data-ocid="enquiry.error_state"
                    className="rounded-lg p-3 text-sm"
                    style={{
                      backgroundColor: "oklch(var(--crimson) / 0.2)",
                      color: "oklch(0.85 0.05 15)",
                    }}
                  >
                    Failed to submit. Please try again or contact us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  data-ocid="enquiry.submit_button"
                  disabled={submitEnquiry.isPending}
                  className="w-full py-6 text-base font-bold rounded-xl"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "white",
                  }}
                >
                  {submitEnquiry.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Enquiry →"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{ backgroundColor: "oklch(var(--navy))" }}
        className="pt-0 pb-6"
      >
        {/* Admissions Open Banner Form */}
        <div
          className="w-full py-10 px-4"
          style={{ backgroundColor: "oklch(0.09 0.045 250)" }}
        >
          <div className="max-w-7xl mx-auto">
            {footerSuccess ? (
              <div
                data-ocid="footer.enquiry.success_state"
                className="flex flex-col items-center justify-center py-6 gap-3"
              >
                <CheckCircle2
                  className="w-10 h-10"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <p className="font-bold text-white text-lg">
                  Thank you! We'll contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFooterSuccess(false);
                    setFooterForm({
                      fullName: "",
                      phoneNumber: "",
                      program: "",
                    });
                  }}
                  className="text-sm underline"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:flex-shrink-0">
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-2"
                    style={{
                      backgroundColor: "oklch(1 0 0 / 0.15)",
                      color: "oklch(var(--gold))",
                    }}
                  >
                    ✦ Admissions Open
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Admissions Open 2025
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    Quick enquiry — we'll call you back!
                  </p>
                </div>
                <form
                  onSubmit={handleFooterSubmit}
                  className="flex flex-col sm:flex-row gap-3 flex-1"
                >
                  <Input
                    data-ocid="footer.enquiry.input"
                    type="text"
                    placeholder="Your Name"
                    value={footerForm.fullName}
                    onChange={(e) =>
                      setFooterForm((p) => ({ ...p, fullName: e.target.value }))
                    }
                    required
                    className="flex-1"
                    style={{
                      backgroundColor: "oklch(1 0 0 / 0.07)",
                      borderColor: "oklch(1 0 0 / 0.2)",
                      color: "white",
                    }}
                  />
                  <Input
                    data-ocid="footer.enquiry.phone.input"
                    type="tel"
                    placeholder="Phone Number"
                    value={footerForm.phoneNumber}
                    onChange={(e) =>
                      setFooterForm((p) => ({
                        ...p,
                        phoneNumber: e.target.value,
                      }))
                    }
                    required
                    className="flex-1"
                    style={{
                      backgroundColor: "oklch(1 0 0 / 0.07)",
                      borderColor: "oklch(1 0 0 / 0.2)",
                      color: "white",
                    }}
                  />
                  <Select
                    value={footerForm.program}
                    onValueChange={(v) =>
                      setFooterForm((p) => ({ ...p, program: v as Program }))
                    }
                  >
                    <SelectTrigger
                      data-ocid="footer.enquiry.program.select"
                      className="flex-1 min-w-[140px]"
                      style={{
                        backgroundColor: "oklch(1 0 0 / 0.07)",
                        borderColor: "oklch(1 0 0 / 0.2)",
                        color: footerForm.program
                          ? "white"
                          : "oklch(1 0 0 / 0.4)",
                      }}
                    >
                      <SelectValue placeholder="Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={Program.btech}>B.Tech</SelectItem>
                      <SelectItem value={Program.mtech}>M.Tech</SelectItem>
                      <SelectItem value={Program.mca}>MCA</SelectItem>
                      <SelectItem value={Program.mba}>MBA</SelectItem>
                      <SelectItem value={Program.phd}>Ph.D</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    type="submit"
                    data-ocid="footer.enquiry.submit_button"
                    disabled={footerSubmitting}
                    className="font-bold px-6 whitespace-nowrap"
                    style={{
                      backgroundColor: "oklch(var(--gold))",
                      color: "white",
                    }}
                  >
                    {footerSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Submit →"
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(160deg, oklch(0.18 0.08 250) 0%, oklch(0.13 0.06 240) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
            <div
              className="grid md:grid-cols-3 gap-12 pb-12 border-b"
              style={{ borderColor: "#9ca3af" }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/assets/generated/rgmcet-logo-transparent.dim_200x200.png"
                    alt="RGMCET Logo"
                    className="w-12 h-12 object-contain rounded-full p-0.5"
                    style={{ backgroundColor: "#9ca3af" }}
                  />
                  <div>
                    <div
                      className="font-display font-black text-xl"
                      style={{ color: "#ffffff" }}
                    >
                      RGMCET
                    </div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: "#ffffff" }}
                    >
                      Since 1995
                    </div>
                  </div>
                </div>
                <p
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: "#ffffff" }}
                >
                  Rajeev Gandhi Memorial College of Engineering and Technology —
                  shaping engineers and leaders of tomorrow through academic
                  excellence, research, and innovation.
                </p>
                <div className="flex gap-3 mt-5">
                  {["NAAC", "NBA", "JNTUA"].map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-black px-2 py-1 rounded"
                      style={{
                        backgroundColor: "#111827",
                        color: "#f9fafb",
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  {[
                    {
                      Icon: SiFacebook,
                      href: "https://www.facebook.com/profile.php?id=61586608216900",
                      label: "Facebook",
                    },
                    { Icon: SiX, href: "#", label: "X (Twitter)" },
                    { Icon: SiInstagram, href: "#", label: "Instagram" },
                    { Icon: SiLinkedin, href: "#", label: "LinkedIn" },
                    {
                      Icon: SiYoutube,
                      href: "https://www.youtube.com/@rgmcet-autonomousnandyala.7374",
                      label: "YouTube",
                    },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110"
                      style={{
                        color: "#D4AF37",
                        backgroundColor: "rgba(212,175,55,0.15)",
                        border: "1px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4
                  className="font-black text-lg mb-5 tracking-wide"
                  style={{ color: "#ffffff" }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.target}>
                      <button
                        type="button"
                        data-ocid="nav.link"
                        onClick={() => scrollTo(link.target)}
                        className="text-sm font-bold transition-colors flex items-center gap-1 hover:underline"
                        style={{ color: "#ffffff" }}
                      >
                        <ChevronRight
                          className="w-3 h-3"
                          style={{ color: "#ffffff" }}
                        />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Contact Us heading */}
                <div className="mb-5">
                  <h4
                    className="text-lg font-black tracking-wide"
                    style={{ color: "#ffffff" }}
                  >
                    Contact Us
                  </h4>
                  <div
                    className="mt-1.5 h-0.5 w-10 rounded-full"
                    style={{ backgroundColor: "#ffffff" }}
                  />
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#ffffff" }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      RGMCET, Nandyal - 518501,
                      <br />
                      Kurnool District, Andhra Pradesh
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#ffffff" }}
                    />
                    <a
                      href="tel:+918514222500"
                      className="text-sm font-bold transition-colors hover:underline"
                      style={{ color: "#ffffff" }}
                    >
                      +91-8514-222500
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#ffffff" }}
                    />
                    <a
                      href="mailto:info@rgmcet.edu.in"
                      className="text-sm font-bold transition-colors hover:underline"
                      style={{ color: "#ffffff" }}
                    >
                      info@rgmcet.edu.in
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#ffffff" }}
                    />
                    <a
                      href="https://www.rgmcet.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold transition-colors hover:underline"
                      style={{ color: "#ffffff" }}
                    >
                      www.rgmcet.edu.in
                    </a>
                  </li>
                </ul>
                <a
                  href="https://www.rgmcet.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.official_website.link"
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #f0d060)",
                    color: "#1a1a2e",
                    border: "2px solid #D4AF37",
                    boxShadow: "0 0 12px rgba(212,175,55,0.4)",
                  }}
                >
                  🌐 Visit Official Website
                </a>
              </div>
            </div>

            <div
              className="pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold"
              style={{ color: "#ffffff" }}
            >
              <span>
                © {new Date().getFullYear()} RGMCET. Affiliated to JNTUA · NAAC
                A+ Accredited · All rights reserved.
              </span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:underline"
                style={{ color: "#ffffff" }}
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Apply Now Button */}
      <button
        type="button"
        data-ocid="floating.primary_button"
        onClick={() => scrollTo("admissions")}
        className="fixed bottom-6 right-6 z-50 pulse-gold flex items-center gap-2 rounded-full px-5 py-3 font-bold text-sm shadow-2xl transition-transform hover:scale-105"
        style={{
          backgroundColor: "oklch(var(--gold))",
          color: "white",
        }}
      >
        <GraduationCap className="w-4 h-4" />
        Apply Now
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919177777777"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.primary_button"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </a>

      {/* Floating Chatbot Toggle */}
      <button
        type="button"
        data-ocid="chatbot.toggle"
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-110"
        style={{
          backgroundColor: "#0a1628",
          border: "2px solid #D4AF37",
          color: "white",
        }}
        aria-label="Open chat"
      >
        {chatOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chatbot Panel */}
      {chatOpen && (
        <div
          className="fixed bottom-40 right-6 z-50 w-80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: "420px", backgroundColor: "#fff" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: "#0a1628" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#D4AF37" }}
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">
                  RGMCET Admissions Help
                </div>
                <div className="text-green-400 text-xs">● Online</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-3 space-y-3"
            style={{ backgroundColor: "#f0f4f8" }}
          >
            {chatMessages.map((msg, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: chat messages are append-only
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                  style={
                    msg.from === "bot"
                      ? {
                          backgroundColor: "#fff",
                          color: "#1a1a2e",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        }
                      : { backgroundColor: "#0a1628", color: "white" }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Quick replies (only show if last message is bot's first message) */}
            {chatMessages.length === 1 && (
              <div className="flex flex-col gap-2 mt-2">
                {["Admissions Process", "Programs Offered", "Contact Us"].map(
                  (q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        const responses: Record<string, string> = {
                          "Admissions Process":
                            "Our admissions are open for 2025! You can apply online or visit our campus. For assistance, call us at +91-8518-222200.",
                          "Programs Offered":
                            "We offer B.Tech (CSE, ECE, EEE, ME, CE, IT), M.Tech, MCA, MBA, and Ph.D programs. All affiliated to JNTUA.",
                          "Contact Us":
                            "Reach us at: Phone: +91-8518-222200 | Email: info@rgmcet.edu.in | Address: Nandyal, Andhra Pradesh.",
                        };
                        setChatMessages((prev) => [
                          ...prev,
                          { from: "user", text: q },
                          { from: "bot", text: responses[q] },
                        ]);
                      }}
                      className="text-left text-xs rounded-xl px-3 py-2 font-medium transition-colors hover:opacity-90"
                      style={{
                        backgroundColor: "#fff",
                        color: "#0a1628",
                        border: "1.5px solid #D4AF37",
                      }}
                    >
                      {q}
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          {/* Input */}
          <div
            className="flex gap-2 p-3 border-t"
            style={{ backgroundColor: "#fff", borderColor: "#e2e8f0" }}
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && chatInput.trim()) {
                  const userText = chatInput.trim();
                  const lower = userText.toLowerCase();
                  let botReply =
                    "Thank you for your message! Our admissions team will contact you shortly. You can also call us at +91-8518-222200.";
                  if (lower.includes("admission"))
                    botReply =
                      "Our admissions are open for 2025! You can apply online or visit our campus. For assistance, call us at +91-8518-222200.";
                  else if (
                    lower.includes("program") ||
                    lower.includes("course")
                  )
                    botReply =
                      "We offer B.Tech (CSE, ECE, EEE, ME, CE, IT), M.Tech, MCA, MBA, and Ph.D programs. All affiliated to JNTUA.";
                  else if (
                    lower.includes("contact") ||
                    lower.includes("phone") ||
                    lower.includes("email")
                  )
                    botReply =
                      "Reach us at: Phone: +91-8518-222200 | Email: info@rgmcet.edu.in | Address: Nandyal, Andhra Pradesh.";
                  setChatMessages((prev) => [
                    ...prev,
                    { from: "user", text: userText },
                    { from: "bot", text: botReply },
                  ]);
                  setChatInput("");
                }
              }}
              placeholder="Type your message..."
              className="flex-1 text-sm rounded-xl px-3 py-2 outline-none border"
              style={{ borderColor: "#e2e8f0", fontSize: "13px" }}
            />
            <button
              type="button"
              onClick={() => {
                if (!chatInput.trim()) return;
                const userText = chatInput.trim();
                const lower = userText.toLowerCase();
                let botReply =
                  "Thank you for your message! Our admissions team will contact you shortly. You can also call us at +91-8518-222200.";
                if (lower.includes("admission"))
                  botReply =
                    "Our admissions are open for 2025! You can apply online or visit our campus. For assistance, call us at +91-8518-222200.";
                else if (lower.includes("program") || lower.includes("course"))
                  botReply =
                    "We offer B.Tech (CSE, ECE, EEE, ME, CE, IT), M.Tech, MCA, MBA, and Ph.D programs. All affiliated to JNTUA.";
                else if (
                  lower.includes("contact") ||
                  lower.includes("phone") ||
                  lower.includes("email")
                )
                  botReply =
                    "Reach us at: Phone: +91-8518-222200 | Email: info@rgmcet.edu.in | Address: Nandyal, Andhra Pradesh.";
                setChatMessages((prev) => [
                  ...prev,
                  { from: "user", text: userText },
                  { from: "bot", text: botReply },
                ]);
                setChatInput("");
              }}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: "#0a1628" }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  );
}
