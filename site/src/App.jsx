import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield,
  Smartphone,
  BadgeDollarSign,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  MessageCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WA_LINK =
  "https://wa.me/5500000000000?text=Quero%20proteger%20meu%20ve%C3%ADculo";

/* ══════════════════════════════════════════════
   A. NAVBAR — "The Floating Island"
   ══════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out',
      });
    });
    return () => ctx.revert();
  }, []);

  const navLinks = ['Proteção', 'Diferenciais', 'Como Funciona', 'Planos'];

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 flex items-center gap-5 transition-all duration-500 ${scrolled
        ? 'bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-full'
        : 'bg-navy/20 backdrop-blur-sm rounded-full'
        }`}
      style={{ maxWidth: '920px', width: '92%' }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="J&C Rastreamentos"
        className="h-9 w-auto object-contain rounded-lg"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <span
        className={`font-heading font-bold text-lg tracking-tight transition-colors duration-500 hidden ${scrolled ? 'text-navy' : 'text-white'
          }`}
      >
        J&C
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-5 ml-auto">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/ /g, '-')}`}
            className={`lift-hover font-heading text-sm font-medium tracking-tight transition-colors duration-500 ${scrolled
              ? 'text-navy hover:text-golden-dark'
              : 'text-white/90 hover:text-golden'
              }`}
          >
            {link}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-magnetic btn-golden font-heading font-bold text-sm px-5 py-2 rounded-full flex items-center gap-2"
        >
          <MessageCircle size={14} />
          Fale Conosco
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className={`md:hidden ml-auto transition-colors ${scrolled ? 'text-navy' : 'text-white'
          }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="font-heading text-navy text-lg font-medium hover:text-golden-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic btn-golden font-heading font-bold text-center px-5 py-3 rounded-full mt-2 flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            Fale com Consultor
          </a>
        </div>
      )}
    </nav>
  );
}

/* ══════════════════════════════════════════════
   B. HERO — "The Opening Shot"
   ══════════════════════════════════════════════ */
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-line-1', { y: 40, opacity: 0, duration: 0.8, delay: 0.3 })
        .from('.hero-line-2', { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-mascot', { x: 60, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.8');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="proteção"
      className="relative w-full flex items-end overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80)',
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/40" />
      {/* Golden accent line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-golden via-cyan to-golden opacity-60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Text side */}
          <div className="max-w-2xl">
            <p className="hero-line-1 font-heading font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              Proteja o que
            </p>
            <p className="hero-line-2 font-drama italic text-golden text-6xl sm:text-7xl md:text-[8rem] leading-none -mt-2">
              importa.
            </p>
            <p className="hero-sub font-heading text-white/60 text-base md:text-lg mt-6 max-w-lg leading-relaxed">
              Tecnologia inteligente para proteger seu veículo 24h por dia.
              Monitoramento em tempo real, bloqueio remoto e equipe de busca
              especializada.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta btn-magnetic btn-golden inline-flex items-center gap-2 font-heading text-base px-8 py-4 rounded-full mt-8"
            >
              <MessageCircle size={18} />
              Falar com Consultor Agora
              <ChevronRight size={18} />
            </a>
            <div className="hero-badge flex items-center gap-3 mt-6">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              <span className="font-mono text-xs text-white/40 tracking-wider uppercase">
                Sistema Operacional · 24/7
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-xs text-golden/60 tracking-wider uppercase">
                Líder em recuperação
              </span>
            </div>
          </div>

          {/* Mascot side */}
          <div className="hero-mascot hidden md:block flex-shrink-0">
            <img
              src="/mascote.png"
              alt="Mascote J&C - Leão"
              className="mascot-float w-56 lg:w-72 drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   C. FEATURES — "Interactive Functional Artifacts"
   ══════════════════════════════════════════════ */

/* Card 1 — Diagnostic Shuffler */
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'Rastreamento GPS', detail: 'Localização precisa em tempo real' },
    { id: 2, label: 'Equipe Tática', detail: 'Busca e recuperação 24h' },
    { id: 3, label: 'Central de Monitoramento', detail: 'Resposta em menos de 60s' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-golden/10 transition-shadow duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-golden/10 flex items-center justify-center">
          <Shield size={18} className="text-golden-dark" />
        </div>
        <h3 className="font-heading font-bold text-navy text-lg tracking-tight">
          Monitoramento 24h
        </h3>
      </div>
      <p className="font-heading text-sm text-navy/50 mb-6">
        Equipe de busca e recuperação sempre de prontidão.
      </p>
      <div className="relative flex-1 min-h-[180px]">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="shuffler-card absolute left-0 right-0 rounded-2xl px-5 py-4 border"
            style={{
              top: `${i * 16}px`,
              zIndex: cards.length - i,
              transform: `scale(${1 - i * 0.04})`,
              opacity: 1 - i * 0.2,
              background: i === 0 ? 'linear-gradient(135deg, #1E2A3A 0%, #2E3440 100%)' : '#2E3440',
              borderColor: i === 0 ? '#FBC02D' : 'transparent',
            }}
          >
            <p className="font-heading font-semibold text-sm text-white">{card.label}</p>
            <p className="font-mono text-xs text-white/40 mt-1">{card.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Card 2 — Telemetry Typewriter */
function TelemetryTypewriter() {
  const messages = [
    '> Veículo localizado: Av. Brasil, km 42',
    '> Bloqueio remoto ativado com sucesso',
    '> Alerta de velocidade: 120 km/h detectado',
    '> Cerca virtual violada — notificando',
    '> Ignição desligada — veículo em repouso',
    '> Bateria do rastreador: 98%',
    '> Rota registrada: 14.3 km hoje',
  ];
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentMsg, setCurrentMsg] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentMsg >= messages.length) {
      const timer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentMsg(0);
        setCurrentChar(0);
      }, 2000);
      return () => clearTimeout(timer);
    }

    const msg = messages[currentMsg];
    if (currentChar < msg.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentMsg) {
            newLines.push('');
          }
          newLines[currentMsg] = msg.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar((c) => c + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentMsg((m) => m + 1);
        setCurrentChar(0);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentMsg, currentChar, messages.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-cyan/10 transition-shadow duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-cyan/10 flex items-center justify-center">
          <Smartphone size={18} className="text-cyan-dark" />
        </div>
        <h3 className="font-heading font-bold text-navy text-lg tracking-tight">
          Controle pelo App
        </h3>
      </div>
      <p className="font-heading text-sm text-navy/50 mb-4">
        Bloqueio remoto, cercas virtuais e alertas em tempo real.
      </p>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
        <span className="font-mono text-[10px] text-cyan tracking-widest uppercase">
          Live Feed
        </span>
      </div>
      <div
        ref={containerRef}
        className="flex-1 bg-navy rounded-xl p-4 overflow-y-auto min-h-[160px] max-h-[200px]"
      >
        {displayedLines.map((line, i) => (
          <p key={i} className="font-mono text-xs text-cyan/80 leading-relaxed">
            {line}
            {i === displayedLines.length - 1 && currentMsg < messages.length && (
              <span className="cursor-blink text-golden ml-0.5">▌</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

/* Card 3 — Cursor Protocol Scheduler */
function CursorScheduler() {
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const [activeDay, setActiveDay] = useState(-1);
  const [cursorPos, setCursorPos] = useState({ x: -30, y: 50 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      setCursorVisible(true);
      setSaved(false);
      setActiveDay(-1);

      await wait(500);
      setCursorPos({ x: 95, y: 50 });
      await wait(600);
      setPressing(true);
      await wait(200);
      setPressing(false);
      setActiveDay(2);
      await wait(400);

      setCursorPos({ x: 160, y: 50 });
      await wait(600);
      setPressing(true);
      await wait(200);
      setPressing(false);
      setActiveDay(4);
      await wait(400);

      setCursorPos({ x: 120, y: 110 });
      await wait(600);
      setPressing(true);
      await wait(200);
      setPressing(false);
      setSaved(true);
      await wait(1500);
      setCursorVisible(false);
      await wait(1000);
    };

    sequence();
    const interval = setInterval(sequence, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-golden/10 transition-shadow duration-500 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-xl bg-golden/10 flex items-center justify-center">
          <BadgeDollarSign size={18} className="text-golden-dark" />
        </div>
        <h3 className="font-heading font-bold text-navy text-lg tracking-tight">
          Garantia FIPE
        </h3>
      </div>
      <p className="font-heading text-sm text-navy/50 mb-6">
        Plano com garantia de até 100% da Tabela FIPE para motos.
      </p>
      <div className="relative flex-1 min-h-[140px]">
        <div className="flex gap-2 justify-center">
          {days.map((day, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${i === activeDay || (i === 2 && activeDay >= 2) || (i === 4 && activeDay >= 4)
                ? 'bg-golden text-navy scale-95'
                : 'bg-surface text-navy/40'
                }`}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className={`font-heading font-semibold text-xs px-6 py-2 rounded-full transition-all duration-300 ${saved
              ? 'bg-green-500 text-white'
              : 'bg-navy text-white'
              }`}
          >
            {saved ? '✓ Agendado' : 'Salvar Agenda'}
          </button>
        </div>

        {cursorVisible && (
          <svg
            className="absolute pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              transform: pressing ? 'scale(0.85)' : 'scale(1)',
            }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 3l14 8-6 2-4 6z"
              fill="#FBC02D"
              stroke="#1E2A3A"
              strokeWidth="1"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="diferenciais" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3">
            // DIFERENCIAIS
          </p>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-5xl tracking-tight">
            Por que escolher a{' '}
            <span className="text-gradient-golden">J&C</span>?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card"><DiagnosticShuffler /></div>
          <div className="feature-card"><TelemetryTypewriter /></div>
          <div className="feature-card"><CursorScheduler /></div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   D. PHILOSOPHY — "The Manifesto" + Mascot
   ══════════════════════════════════════════════ */
function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-line', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
      });
      gsap.from('.phil-mascot', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Dark background with subtle golden accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy" />
      {/* Texture overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464938050520-ef2571e8b4e5?w=1920&q=80)',
        }}
      />
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden via-cyan to-golden opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <p className="phil-line font-heading text-white/30 text-lg md:text-2xl leading-relaxed mb-8">
            A maioria das empresas de rastreamento foca em:{' '}
            <span className="text-white/50">
              vender o rastreador e esquecer do cliente.
            </span>
          </p>
          <p className="phil-line font-heading font-bold text-white text-2xl md:text-4xl leading-tight mb-4">
            Nós focamos em:{' '}
          </p>
          <p className="phil-line font-drama italic text-4xl md:text-7xl text-white leading-none">
            <span className="text-golden">proteção</span> de verdade.
          </p>
          <p className="phil-line font-heading text-white/30 text-base md:text-lg mt-10 max-w-2xl leading-relaxed">
            Cada veículo é monitorado por uma equipe humana real, com protocolos
            de busca ativos e tecnologia de bloqueio instantâneo. Não vendemos
            aparelhos — entregamos{' '}
            <span className="text-cyan">segurança</span>.
          </p>
        </div>
        {/* Mascot */}
        <div className="phil-mascot flex-shrink-0 hidden md:block">
          <img
            src="/mascote.png"
            alt="Mascote J&C Rastreamentos"
            className="mascot-float w-52 lg:w-64 drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 20px 60px rgba(251,192,45,0.2))' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   E. PROTOCOL — "Sticky Stacking Archive"
   ══════════════════════════════════════════════ */
function RotatingGeometry() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} width="120" height="120" viewBox="0 0 120 120" className="opacity-30">
      <circle cx="60" cy="60" r="50" fill="none" stroke="#FBC02D" strokeWidth="1" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#00B4F0" strokeWidth="0.5" />
      <circle cx="60" cy="60" r="20" fill="none" stroke="#FBC02D" strokeWidth="0.5" />
      <line x1="60" y1="10" x2="60" y2="110" stroke="#00B4F0" strokeWidth="0.5" />
      <line x1="10" y1="60" x2="110" y2="60" stroke="#00B4F0" strokeWidth="0.5" />
    </svg>
  );
}

function ScannerLine() {
  const lineRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        attr: { y1: 120, y2: 120 },
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-30">
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 6 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={15 + c * 20}
            cy={15 + r * 20}
            r="2"
            fill="#00B4F0"
            opacity="0.4"
          />
        ))
      )}
      <line
        ref={lineRef}
        x1="0"
        y1="0"
        x2="120"
        y2="0"
        stroke="#FBC02D"
        strokeWidth="2"
        opacity="0.8"
      />
    </svg>
  );
}

function PulsingWaveform() {
  const pathRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const length = pathRef.current?.getTotalLength() || 300;
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 3,
        repeat: -1,
        ease: 'power2.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg width="160" height="80" viewBox="0 0 160 80" className="opacity-30">
      <path
        ref={pathRef}
        d="M0,40 L20,40 L30,10 L40,70 L50,20 L60,60 L70,30 L80,50 L90,35 L100,45 L110,38 L120,42 L140,40 L160,40"
        fill="none"
        stroke="#FBC02D"
        strokeWidth="2"
      />
    </svg>
  );
}

function Protocol() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const steps = [
    {
      num: '01',
      title: 'Instalação Profissional',
      desc: 'Técnicos certificados instalam o rastreador de forma discreta e segura. Sem fios expostos, sem gambiarras.',
      Visual: RotatingGeometry,
    },
    {
      num: '02',
      title: 'Monitoramento Contínuo',
      desc: 'Nossa central opera 24/7 com protocolos de resposta em menos de 60 segundos para qualquer alerta ou emergência.',
      Visual: ScannerLine,
    },
    {
      num: '03',
      title: 'Ação & Recuperação',
      desc: 'Em caso de sinistro, acionamos equipe tática de busca e coordenamos com as autoridades para a recuperação.',
      Visual: PulsingWaveform,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 80%' },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="como-funciona" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3">
          // PROTOCOLO
        </p>
        <h2 className="font-heading font-bold text-navy text-3xl md:text-5xl tracking-tight mb-16">
          Como funciona
        </h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => (cardsRef.current[i] = el)}
              className="protocol-card bg-gradient-to-br from-navy to-charcoal text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-white/5"
            >
              <div className="flex-1">
                <span className="font-mono text-golden text-sm tracking-widest">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mt-2 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="font-heading text-white/50 text-base leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
              <div className="flex-shrink-0">
                <step.Visual />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   F. PRICING / PLANS
   ══════════════════════════════════════════════ */
function Pricing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.price-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: 'Essencial',
      desc: 'Rastreamento básico com monitoramento 24h.',
      features: ['Rastreamento GPS', 'Monitoramento 24h', 'App de controle', 'Alertas por SMS'],
      highlight: false,
    },
    {
      name: 'Performance',
      desc: 'Proteção completa com bloqueio remoto e garantia.',
      features: [
        'Tudo do Essencial',
        'Bloqueio remoto',
        'Cerca eletrônica',
        'Equipe de busca',
        'Garantia até 70% FIPE',
      ],
      highlight: true,
    },
    {
      name: 'Blindado',
      desc: 'Máxima proteção com garantia total para motos.',
      features: [
        'Tudo do Performance',
        'Garantia até 100% FIPE',
        'Prioridade máxima',
        'Suporte dedicado',
        'Assistência 24h',
      ],
      highlight: false,
    },
  ];

  return (
    <section ref={sectionRef} id="planos" className="py-20 md:py-32 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-3">
          // PLANOS
        </p>
        <h2 className="font-heading font-bold text-navy text-3xl md:text-5xl tracking-tight mb-16">
          Escolha seu nível de proteção
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card rounded-[2rem] p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${plan.highlight
                ? 'bg-gradient-to-br from-navy to-charcoal text-white ring-2 ring-golden shadow-2xl shadow-golden/10 scale-[1.02]'
                : 'bg-white text-navy border border-gray-100 shadow-sm'
                }`}
            >
              {plan.highlight && (
                <span className="inline-block self-start font-mono text-[10px] text-navy bg-golden px-3 py-1 rounded-full font-bold tracking-wider uppercase mb-4">
                  Mais Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-xl tracking-tight">{plan.name}</h3>
              <p
                className={`font-heading text-sm mt-2 mb-6 ${plan.highlight ? 'text-white/50' : 'text-navy/50'
                  }`}
              >
                {plan.desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <ChevronRight
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-golden' : 'text-cyan'
                        }`}
                    />
                    <span
                      className={`font-heading text-sm ${plan.highlight ? 'text-white/70' : 'text-navy/60'
                        }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-magnetic font-heading font-bold text-sm text-center px-6 py-3 rounded-full flex items-center justify-center gap-2 ${plan.highlight
                  ? 'btn-golden'
                  : 'bg-navy text-white'
                  }`}
              >
                <MessageCircle size={14} />
                Falar com Consultor
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   G. FOOTER
   ══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-charcoal rounded-t-[3rem] md:rounded-t-[4rem] text-white/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="J&C Rastreamentos"
                className="h-14 w-auto object-contain rounded-xl"
              />
            </div>
            <p className="font-heading text-sm leading-relaxed max-w-sm text-white/40">
              Tecnologia inteligente para proteger seu veículo 24h por dia.
              Monitoramento em tempo real, bloqueio remoto e equipe de busca
              especializada.
            </p>
            <p className="font-drama italic text-golden/60 text-sm mt-3">
              Líder em recuperação!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-tight">
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Proteção', 'Diferenciais', 'Como Funciona', 'Planos'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="lift-hover inline-block font-heading text-sm hover:text-golden transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 tracking-tight">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-golden" />
                <span className="font-mono text-xs">(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-golden" />
                <span className="font-mono text-xs">contato@jcrastreamentos.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-golden" />
                <span className="font-mono text-xs">Sua Cidade — SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/20">
            © 2026 J&C Rastreamentos. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono text-xs text-white/30 tracking-wider">
              Sistema Operacional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   WHATSAPP FLOATING BUTTON
   ══════════════════════════════════════════════ */
function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* ══════════════════════════════════════════════
   APP
   ══════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
