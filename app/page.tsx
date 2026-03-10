"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import {
  MessageSquare,
  BarChart3,
  Database,
  Zap,
  Shield,
  FileText,
  Grid3X3,
  Brain,
  ExternalLink,
  ChevronRight,
  Play,
  Upload,
  RefreshCw,
  TrendingUp,
  Users,
  Clock,
  Globe,
  ArrowRight,
  GitBranch,
  Cpu,
  Layers,
  Filter,
} from "lucide-react";

/* ─── Animation Helpers ─────────────────────────────────────────────────── */
function FadeInSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#EDE8DF]/95 backdrop-blur-sm border-b-3 border-b border-[#0D0D0D] shadow-[0_2px_0_#0D0D0D]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div style={{ width: 16, height: 16, background: '#D62828', border: '2px solid #0D0D0D' }} />
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1B4FCC', border: '2px solid #0D0D0D' }} />
          </div>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="font-black text-[22px] tracking-[0.05em] uppercase text-[#0D0D0D]"
          >
            Pyro<span className="text-[#D62828] ml-[2px]">BI</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Architecture", "Tech Stack", "Demo"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              className="text-sm font-700 uppercase tracking-widest text-[#0D0D0D] hover:text-[#D62828] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://pyro-bi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Launch App <ExternalLink size={14} />
        </a>
      </div>
    </motion.nav>
  );
}

/* ─── Hero Section ──────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 overflow-hidden">
      {/* Bauhaus geometric accents */}
      <div className="absolute top-20 left-8 w-20 h-20 bg-[#D62828] border-3 border-[#0D0D0D] opacity-80 animate-float" style={{ border: "3px solid #0D0D0D", animationDelay: "0s" }} />
      <div className="absolute top-32 right-12 w-14 h-14 rounded-full bg-[#1B4FCC] border-3 opacity-80 animate-float geo-circle" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-40 left-16 w-10 h-10 bg-[#F7B731] border-3 opacity-90 animate-float geo-square" style={{ animationDelay: "0.8s" }} />
      <div className="absolute top-[45%] right-6 w-6 h-24 bg-[#0D0D0D] opacity-20 hidden lg:block" />
      <div className="absolute top-[40%] left-4 w-24 h-2 bg-[#D62828] opacity-30 hidden lg:block" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="b-card-red px-4 py-2 flex items-center gap-2">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-[#F7B731] font-bold text-xs uppercase tracking-[0.15em]">
              ● Live on Vercel
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl text-5xl md:text-7xl lg:text-8xl mb-6"
        >
          Ask Questions.
          <br />
          <span className="text-[#D62828]">Get Dashboards.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-[#2A2A2A] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          PyroBI is a next-generation Conversational BI platform. Drop a CSV,
          ask in plain English, and receive production-grade SQL, interactive
          visualizations, and AI executive summaries—instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://pyro-bi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 animate-pulse-b"
          >
            <Play size={16} fill="currentColor" /> Launch PyroBI
          </a>
          <a href="#features" className="btn-ghost text-base px-8 py-4">
            Explore Features <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 max-w-2xl mx-auto b-card bg-white/80"
        >
          {[
            { val: "8", unit: "AI Agents", label: "in the pipeline" },
            { val: "< 3s", unit: "Response", label: "avg query time" },
            { val: "100%", unit: "No-Code", label: "pure natural language" },
          ].map((s, i) => (
            <div key={i} className={`stat-block px-6 py-5 text-center ${i === 2 ? "!border-r-0" : ""}`}>
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-2xl font-black text-[#D62828]"
              >
                {s.val}
              </div>
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D] mt-0.5"
              >
                {s.unit}
              </div>
              <div className="text-xs text-[#2A2A2A] mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Hero Scroll Demo ──────────────────────────────────────────────────── */
function HeroScrollSection() {
  return (
    <div id="demo" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-0">
            <div className="section-label mb-4">— Live Preview</div>
            <h2 className="heading-xl text-4xl md:text-6xl mb-4">
              The Command{" "}
              <span className="text-[#1B4FCC]">Center</span>
            </h2>
            <p className="text-base text-[#2A2A2A] max-w-xl mx-auto">
              Drag, resize, and pin charts into your own custom analytical workspace—all from a single conversational prompt.
            </p>
          </div>
        }
      >
        {/* Dashboard preview mock */}
        <div className="h-full w-full bg-[#EDE8DF] rounded-[18px] overflow-hidden flex flex-col font-['Inter',sans-serif]">
          
          {/* Topbar (Match App.jsx) */}
          <nav style={{
            background: '#0D0D0D',
            borderBottom: '4px solid #F7B731',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px', height: 56, flexShrink: 0
          }}>
            <div className="flex items-center gap-3">
              <button style={{
                background: 'none', border: 'none',
                color: '#F7B731', padding: '4px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              <div className="flex items-center gap-1">
                <div style={{ width: 16, height: 16, background: '#D62828', border: '2px solid #F7B731' }} />
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1B4FCC', border: '2px solid #F7B731' }} />
              </div>
              <span className="font-bold text-[18px] text-[#F7B731] tracking-[0.05em] uppercase font-['Space_Grotesk',sans-serif]">
                Pyro<span className="text-[#D62828] ml-1">BI</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-ghost !text-[#D62828] !border-[#D62828] !py-1 !px-3 !text-[12px]">
                Clear Data
              </button>
            </div>
          </nav>

          {/* Tab Switcher (Match App.jsx) */}
          <div style={{ display: 'flex', borderBottom: '3px solid #0D0D0D', background: '#fff', flexShrink: 0 }}>
            <div style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'transparent', color: '#0D0D0D', borderRight: '3px solid #0D0D0D' }}>
              1. DATA (Schema)
            </div>
            <div style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'transparent', color: 'rgba(13,13,13,0.3)', borderRight: '3px solid #0D0D0D' }}>
              2. QUERY (Chat)
            </div>
            <div style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#F7B731', color: '#0D0D0D' }}>
              3. DASHBOARD
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden bg-[#EDE8DF] p-4">
            {/* Main area — grid of charts mock */}
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              {/* Chart 1 — Bar chart mock */}
              <div className="bg-[#fff] border-[3px] border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] p-3 flex flex-col">
                <div className="text-[#0D0D0D] font-bold text-[11px] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CLAIMS BY REGION</div>
                <div className="flex-1 flex items-end gap-2 px-1 pb-1">
                  {[60, 85, 45, 72, 90, 55].map((h, i) => (
                    <div key={i} className="flex-1 border-2 border-[#0D0D0D]" style={{ height: `${h}%`, background: ["#D62828","#1B4FCC","#F7B731","#D62828","#1B4FCC","#F7B731"][i] }} />
                  ))}
                </div>
              </div>
              {/* Chart 2 — Line chart mock */}
              <div className="bg-[#fff] border-[3px] border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] p-3 flex flex-col">
                <div className="text-[#0D0D0D] font-bold text-[11px] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MONTHLY TREND</div>
                <div className="flex-1 relative pb-1">
                  <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                    <polyline points="0,40 15,30 30,35 45,15 60,20 75,10 90,18 100,8" fill="none" stroke="#1B4FCC" strokeWidth="2.5"/>
                    <polyline points="0,45 15,38 30,42 45,25 60,30 75,18 90,26 100,16" fill="none" stroke="#D62828" strokeWidth="2" strokeDasharray="3,2"/>
                  </svg>
                </div>
              </div>
              {/* Chart 3 — Pie mock */}
              <div className="bg-[#fff] border-[3px] border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] p-3 flex items-center gap-3">
                <div className="text-[#0D0D0D] font-bold text-[11px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SECTOR SPLIT</div>
                <div className="ml-auto p-1">
                  <svg viewBox="0 0 50 50" className="w-14 h-14">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#D62828" strokeWidth="6" strokeDasharray="50 76" strokeDashoffset="0" />
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#1B4FCC" strokeWidth="6" strokeDasharray="30 96" strokeDashoffset="-50" />
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#F7B731" strokeWidth="6" strokeDasharray="20 106" strokeDashoffset="-80" />
                  </svg>
                </div>
              </div>
              {/* KPI Box */}
              <div className="bg-[#D62828] border-[3px] border-[#0D0D0D] shadow-[4px_4px_0_#0D0D0D] p-4 flex flex-col justify-between">
                <div className="text-[#F7B731] text-[11px] font-bold uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Total Claims</div>
                <div className="text-[#F5F0E8] text-3xl font-black mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>₹ 14.8B</div>
                <div className="text-[#F5F0E8]/80 font-bold text-[11px] flex items-center gap-1 mt-auto">
                  <TrendingUp size={12} strokeWidth={3} /> +12.4% YoY
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

/* ─── Features Section ──────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: <MessageSquare size={24} />,
    color: "#D62828",
    title: "Conversational Agent Pipeline",
    desc: "A multi-agent MoE: Router → SQL Generator → Chart Configurator. Powered by Groq's llama-3.3-70b with automatic model cascade fallback.",
  },
  {
    icon: <BarChart3 size={24} />,
    color: "#1B4FCC",
    title: "Interactive Dashboard Grid",
    desc: "Built on react-grid-layout. Drag, resize, and pin charts into a fully custom analytical workspace with contextual AI sidebar.",
  },
  {
    icon: <Database size={24} />,
    color: "#F7B731",
    title: "DuckDB Analytical Engine",
    desc: "Lightning-fast in-memory SQL execution over uploaded CSVs. Zero setup, zero servers—just pure analytical horsepower.",
  },
  {
    icon: <Filter size={24} />,
    color: "#D62828",
    title: "Fuzzy Data Normalization",
    desc: "RapidFuzz WRatio algorithm + custom acronym detector merges dirty entities automatically. 'Met Life' == 'Metlife' with 96% confidence.",
  },
  {
    icon: <Shield size={24} />,
    color: "#1B4FCC",
    title: "Multi-User Cloud Security",
    desc: "Anonymous browser fingerprinting (X-User-ID) with UUID-namespaced DuckDB tables. Complete tenant isolation—zero data leakage.",
  },
  {
    icon: <FileText size={24} />,
    color: "#F7B731",
    title: "Board-Ready PDF Export",
    desc: "Redis-persisted sessions survive cloud restarts. One-click export generates proportionally scaled charts + AI summaries across pages.",
  },
  {
    icon: <Grid3X3 size={24} />,
    color: "#D62828",
    title: "Premium Data Onboarding",
    desc: "Animated 3-step onboarding: Uploading → Analyzing → Profiling. Interactive schema editor for real-time data type casting.",
  },
  {
    icon: <Brain size={24} />,
    color: "#1B4FCC",
    title: "Zero-LLM Anomaly Detection",
    desc: "Native DuckDB SQL profiling flags missing data, outliers, and type mismatches (>20% null). Protects analysis before it starts.",
  },
];

function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="section-label mb-4">— Core Capabilities</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="heading-xl text-4xl md:text-5xl max-w-xl">
              Eight features.
              <br />
              One <span className="text-[#D62828]">platform.</span>
            </h2>
            <p className="text-base text-[#2A2A2A] max-w-sm">
              Every feature is engineered for a specific pain point in the
              enterprise BI workflow—from data onboarding to executive reporting.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 0.07}>
              <div className="feature-card b-card h-full p-6 flex flex-col gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#0D0D0D] shadow-[3px_3px_0_#0D0D0D]"
                  style={{ background: f.color, color: f.color === "#F7B731" ? "#0D0D0D" : "#F5F0E8" }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-base font-bold text-[#0D0D0D] leading-tight"
                >
                  {f.title}
                </h3>
                <p className="text-sm text-[#2A2A2A] leading-relaxed flex-1">
                  {f.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ──────────────────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    icon: <Upload size={28} />,
    title: "Drop Your CSV",
    desc: "Drag and drop any dataset. PyroBI instantly profiles schema, auto-casts types, and runs fuzzy normalization on dirty entity names.",
    color: "#D62828",
  },
  {
    num: "02",
    icon: <MessageSquare size={28} />,
    title: "Ask in Plain English",
    desc: "Type any analytical question. The Router Agent classifies intent, the SQL Generator writes DuckDB-dialect SQL, and executes it against your data.",
    color: "#1B4FCC",
  },
  {
    num: "03",
    icon: <BarChart3 size={28} />,
    title: "Get Instant Insights",
    desc: "Apache ECharts renders the optimal visualization. A dedicated Summarizer Agent writes the executive insight in one sentence.",
    color: "#F7B731",
  },
  {
    num: "04",
    icon: <Grid3X3 size={28} />,
    title: "Build & Export",
    desc: "Pin charts to your dashboard, drag them into position, continue the conversation, then export a board-ready PDF with one click.",
    color: "#D62828",
  },
];

function HowItWorks() {
  return (
    <section className="py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Geometric accents on dark bg */}
      <div className="absolute top-12 right-20 w-32 h-32 border-4 border-[#D62828]/30 rounded-full" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-4 border-[#1B4FCC]/30" />
      <div className="absolute top-1/2 left-1/3 w-4 h-40 bg-[#F7B731]/10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="section-label mb-4 text-[#D62828]">— Workflow</div>
          <h2 className="heading-xl text-4xl md:text-5xl text-[#F5F0E8] mb-16 max-w-2xl">
            CSV to Dashboard
            <br />
            in <span className="text-[#F7B731]">4 Steps.</span>
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {STEPS.map((step, i) => (
            <FadeInSection key={step.num} delay={i * 0.1}>
              <div className="relative flex flex-col p-8 border border-white/10 group hover:border-white/30 transition-colors">
                {/* Step number */}
                <div
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-5xl font-black text-white/5 absolute top-6 right-6 select-none"
                >
                  {step.num}
                </div>
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 border-2 border-white/20 group-hover:border-white/60 transition-colors"
                  style={{ background: step.color, color: step.color === "#F7B731" ? "#0D0D0D" : "#fff" }}
                >
                  {step.icon}
                </div>
                <h3
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-lg font-bold text-[#F5F0E8] mb-3"
                >
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                {/* Arrow connector */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-white/20" />
                    <ArrowRight size={14} className="text-white/20 -ml-1" />
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Architecture Section ──────────────────────────────────────────────── */
function Architecture() {
  const AGENTS = [
    { name: "Router Agent", role: "Classifies intent: KPI, Trend, Comparison, or Filter.", badge: "#D62828" },
    { name: "SQL Generator", role: "Writes precise DuckDB SQL incl. CAGR, window functions.", badge: "#1B4FCC" },
    { name: "Chart Configurator", role: "Dynamically generates optimal Apache ECharts config.", badge: "#F7B731" },
    { name: "Insight Summarizer", role: "Writes 1-sentence executive summaries from raw data.", badge: "#D62828" },
    { name: "Detailed Analyzer", role: "Deep textual analysis behind charts for report decks.", badge: "#1B4FCC" },
    { name: "Dashboard Chat", role: "Contextual memory — follow-up filters across all widgets.", badge: "#F7B731" },
  ];

  return (
    <section id="architecture" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="section-label mb-4">— Pipeline Architecture</div>
          <h2 className="heading-xl text-4xl md:text-5xl mb-4 max-w-2xl">
            Mixture-of-Experts
            <br />
            <span className="text-[#1B4FCC]">Agent Pipeline.</span>
          </h2>
          <p className="text-base text-[#2A2A2A] max-w-xl mb-16">
            Six specialized AI agents, each owning a discrete responsibility in
            the pipeline. No monolith. No prompt bloat. Pure signal.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Agent cards */}
          <div className="flex flex-col gap-4">
            {AGENTS.map((agent, i) => (
              <FadeInSection key={agent.name} delay={i * 0.08}>
                <div className="b-card p-5 flex items-start gap-4 feature-card">
                  <div
                    className="w-2 h-10 flex-shrink-0 mt-1"
                    style={{ background: agent.badge }}
                  />
                  <div>
                    <div
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="font-bold text-sm text-[#0D0D0D] uppercase tracking-wide"
                    >
                      {agent.name}
                    </div>
                    <div className="text-sm text-[#2A2A2A] mt-1">{agent.role}</div>
                  </div>
                  <Cpu size={16} className="ml-auto text-[#0D0D0D]/20 mt-1 flex-shrink-0" />
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Model Cascade visualization */}
          <FadeInSection delay={0.3}>
            <div className="b-card-black p-8 h-full">
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-[#F7B731] text-xs uppercase tracking-[0.15em] mb-6"
              >
                Model Cascade Strategy
              </div>
              {[
                { model: "llama-3.3-70b", label: "Primary — Best Quality", color: "#D62828" },
                { model: "llama-3.1-70b", label: "Fallback 1 — Rate Limit Hit", color: "#F7B731" },
                { model: "mixtral-8x7b", label: "Fallback 2 — Always Available", color: "#1B4FCC" },
              ].map((m, i) => (
                <div key={m.model} className="flex items-center gap-4 mb-5 last:mb-0">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: m.color }}
                  />
                  <div className="flex-1 border border-white/20 px-4 py-3">
                    <div
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className="text-sm font-bold text-white"
                    >
                      {m.model}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">{m.label}</div>
                  </div>
                  {i < 2 && (
                    <div className="absolute ml-1">
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-white/40 text-xs mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  CLOUD DEPLOYMENT
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Vercel", role: "Frontend CDN", color: "#F5F0E8" },
                    { name: "Render", role: "FastAPI Backend", color: "#F5F0E8" },
                    { name: "Upstash Redis", role: "Session Storage", color: "#D62828" },
                    { name: "Groq API", role: "LLM Inference", color: "#1B4FCC" },
                  ].map((s) => (
                    <div key={s.name} className="border border-white/15 px-3 py-2">
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-xs font-bold text-white">{s.name}</div>
                      <div className="text-xs text-white/30">{s.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Tech Stack Section ────────────────────────────────────────────────── */
const STACK = [
  { label: "React 18 + Vite", category: "Frontend" },
  { label: "Zustand", category: "State" },
  { label: "Apache ECharts", category: "Viz" },
  { label: "react-grid-layout", category: "UI" },
  { label: "jsPDF + html2canvas", category: "Export" },
  { label: "Tailwind CSS", category: "Styling" },
  { label: "FastAPI", category: "Backend" },
  { label: "DuckDB", category: "Database" },
  { label: "Pandas", category: "Data Eng." },
  { label: "RapidFuzz", category: "NLP" },
  { label: "Redis (Upstash)", category: "Cache" },
  { label: "Groq AI", category: "LLM" },
];

function TechStack() {
  return (
    <section id="tech-stack" className="py-28 bg-[#F7B731] border-y-4 border-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
            <div>
              <div
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-[#0D0D0D] text-xs font-bold uppercase tracking-[0.15em] mb-4"
              >
                — Technology Stack
              </div>
              <h2 className="heading-xl text-4xl md:text-5xl">
                Best-in-class
                <br />
                tools, assembled.
              </h2>
            </div>
            <p className="text-base text-[#0D0D0D]/70 max-w-sm">
              Every library was chosen deliberately—no npm bloat, no overhead.
              Pure signal from CSV to PDF.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {STACK.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.05}>
              <div className="bg-[#0D0D0D] border-2 border-[#0D0D0D] p-4 flex flex-col gap-1 feature-card shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                <div
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#F7B731]"
                >
                  {s.category}
                </div>
                <div
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  className="text-sm font-bold text-white"
                >
                  {s.label}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─── Changelog Ticker ──────────────────────────────────────────────────── */
const VERSIONS = [
  "v1.0 — NLP Pipeline & Core Architecture",
  "v1.1 — Detailed Analysis & Report Builder",
  "v1.2 — RapidFuzz Normalization Engine",
  "v1.3 — CAGR SQL Accuracy & Prompt Tuning",
  "v1.4 — WRatio Fuzzy Logic Overhaul",
  "v1.5 — PDF Report Presentation Engine",
  "v1.6 — Premium Data Onboarding",
  "v1.7 — Cloud Hardening & Multi-User Auth",
  "v1.8 — Drag-and-Drop Dashboard Grid",
];

function ChangelogTicker() {
  return (
    <div className="bg-[#0D0D0D] border-y-4 border-[#0D0D0D] py-3 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...VERSIONS, ...VERSIONS].map((v, i) => (
          <span
            key={i}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-xs font-bold uppercase tracking-widest text-[#F7B731] px-8 flex-shrink-0"
          >
            ◆ {v}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── CTA Section ───────────────────────────────────────────────────────── */
function Cta() {
  return (
    <section className="py-32 px-6 bg-[#D62828]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-[#F7B731] text-xs font-bold uppercase tracking-[0.18em] mb-6"
          >
            — Ready to Analyze?
          </div>
          <h2 className="heading-xl text-5xl md:text-7xl text-[#F5F0E8] mb-6">
            From CSV.
            <br />
            To Dashboard.
            <br />
            In <span className="text-[#F7B731]">Seconds.</span>
          </h2>
          <p className="text-[#F5F0E8]/70 text-lg mb-10 max-w-xl mx-auto">
            No SQL knowledge required. No dashboarding skills needed. Just ask
            your data a question and let PyroBI handle the rest.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://pyro-bi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5F0E8] text-[#D62828] border-4 border-[#0D0D0D] shadow-[6px_6px_0_#0D0D0D] font-black text-base uppercase tracking-widest transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#0D0D0D]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Play size={20} fill="#D62828" /> Launch PyroBI Free
            </a>
            <a
              href="https://github.com/iamishaanpandey/Pyro-bi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent text-[#F5F0E8] border-4 border-[#F5F0E8] font-black text-base uppercase tracking-widest transition-all hover:bg-white/10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <GitBranch size={20} /> View on GitHub
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t-4 border-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1">
                <div style={{ width: 16, height: 16, background: '#D62828', border: '2px solid #0D0D0D' }} />
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1B4FCC', border: '2px solid #0D0D0D' }} />
              </div>
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="font-black text-[22px] tracking-[0.05em] uppercase text-white"
              >
                Pyro<span className="text-[#D62828] ml-[2px]">BI</span>
              </span>
            </div>
            <p className="text-xs text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>
              Conversational Business Intelligence Platform
            </p>
            <p className="text-xs text-white/20 mt-1">
              Powered by Groq · DuckDB · FastAPI · React
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Live App", href: "https://pyro-bi.vercel.app/" },
              { label: "Features", href: "#features" },
              { label: "Architecture", href: "#architecture" },
              { label: "Tech Stack", href: "#tech-stack" },
              { label: "Demo", href: "#demo" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/20" style={{ fontFamily: "'Inter', sans-serif" }}>
            Built with the Bauhaus design system. From raw CSV to board-ready PDF — in seconds.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroScrollSection />
      <ChangelogTicker />
      <Features />
      <HowItWorks />
      <Architecture />
      <TechStack />
      <Cta />
      <Footer />
    </main>
  );
}
