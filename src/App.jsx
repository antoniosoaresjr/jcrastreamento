import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Smartphone, Zap, Check, X, Clock, Car, Lock } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (planName) => {
    const baseMessage = 'Olá! Vim pelo site da J&C Rastreamento e gostaria de saber mais.';
    const finalMessage = planName ? `${baseMessage} (${planName})` : baseMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/5586994191636?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between items-center">
          <div className="logo font-bold text-xl text-white">
            <span className="text-primary-yellow">J&C</span> Rastreamento
          </div>
          <button onClick={() => handleWhatsAppClick()} className="btn btn-whatsapp pulse-animation text-sm" style={{ padding: '0.6rem 1.2rem' }}>
            <Zap size={16} fill="currentColor" /> Falar Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-content">
            <div className="badge badge-yellow">
              <Lock size={14} style={{ display: 'inline', marginRight: '4px' }} /> Proteção Total em Teresina e Timon
            </div>
            <h1 className="hero-title">
              O seu veículo <span className="text-gradient-cyan">100% Protegido</span> ou nós pagamos a <span className="text-gradient-yellow">Tabela FIPE</span>.
            </h1>
            <p className="hero-subtitle">
              Mais de R$ 2 Milhões em veículos recuperados. Tecnologia de ponta, aplicativo em tempo real e equipe tática 24 horas por dia. Não conte com a sorte.
            </p>
            <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleWhatsAppClick()} className="btn btn-whatsapp pulse-animation" style={{ padding: '1.2rem 2.5rem', fontSize: '1.125rem' }}>
                Proteger Meu Veículo Agora
              </button>
            </div>
            
            <div className="flex items-center mt-8 gap-4 text-gray text-sm">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-brand-cyan" /> Instalação Segura
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brand-cyan" /> Suporte 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-gradient-cyan" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tecnologia de Prevenção</h2>
            <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>Monitoramento de precisão militar na palma da sua mão. Controle absoluto do seu patrimônio.</p>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="feature-card">
              <div className="icon-box"><Smartphone size={32} /></div>
              <h3 className="font-bold text-xl mb-2 text-white">App em Tempo Real</h3>
              <p className="text-gray text-sm">Acompanhe a localização exata, velocidade e histórico de rotas diretamente do seu celular com delay zero.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Shield size={32} /></div>
              <h3 className="font-bold text-xl mb-2 text-white">Bloqueio Satelital</h3>
              <p className="text-gray text-sm">Corte a ignição e o combustível do veículo com um simples toque no botão do aplicativo em caso de emergência.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><MapPin size={32} /></div>
              <h3 className="font-bold text-xl mb-2 text-white">Cercas Virtuais</h3>
              <p className="text-gray text-sm">Seja alertado instantaneamente se o veículo sair das zonas de segurança que você mesmo configurou.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-gradient-yellow" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sua Tranquilidade Tem Preço?</h2>
            <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>Escolha o plano ideal para blindar sua moto ou carro hoje mesmo contra a violência de Teresina e Região.</p>
          </div>

          <div className="pricing-grid">
            {/* Combo Master */}
            <div className="pricing-card">
              <h3 className="text-xl font-bold mb-2">Plano Essencial</h3>
              <p className="text-gray text-sm mb-6">Proteção tecnológica e Autogestão.</p>
              
              <ul className="feature-list">
                <li className="feature-item"><Check size={20} className="text-brand-cyan" /> <span>Rastreamento em Tempo Real</span></li>
                <li className="feature-item"><Check size={20} className="text-brand-cyan" /> <span>Bloqueio Remoto por App</span></li>
                <li className="feature-item"><Check size={20} className="text-brand-cyan" /> <span>Suporte Técnico</span></li>
                <li className="feature-item unavailable"><X size={20} className="text-gray" /> <span>Equipe Tática de Busca</span></li>
                <li className="feature-item unavailable"><X size={20} className="text-gray" /> <span>Garantia de Compra FIPE</span></li>
              </ul>
              <button onClick={() => handleWhatsAppClick('Plano Essencial')} className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Assinar Essencial</button>
            </div>

            {/* FIPE Guarantee */}
            <div className="pricing-card highlight">
              <div className="badge badge-yellow" style={{ position: 'absolute', top: '-15px', right: '20px', background: 'var(--primary-yellow)', color: '#000', border: 'none' }}>
                RECOMENDADO
              </div>
              <h3 className="text-xl font-bold mb-2">Plano Garantido</h3>
              <p className="text-gray text-sm mb-6">Se roubarem e não recuperarmos, nós pagamos o valor.</p>
              
              <ul className="feature-list">
                <li className="feature-item"><Check size={20} className="text-primary-yellow" /> <span className="font-bold">Garantia Tabela FIPE (Indenização)</span></li>
                <li className="feature-item"><Check size={20} className="text-primary-yellow" /> <span>Assistência de Equipe Tática (Buscadores)</span></li>
                <li className="feature-item"><Check size={20} className="text-primary-yellow" /> <span>Rastreamento + Bloqueio Premium</span></li>
                <li className="feature-item"><Check size={20} className="text-primary-yellow" /> <span>Suporte Emergencial 24h</span></li>
              </ul>
              <button onClick={() => handleWhatsAppClick('Plano Garantido FIPE')} className="btn btn-whatsapp">Proteger com Garantia FIPE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding" style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container text-center">
          <div className="logo font-bold text-2xl text-white mb-4">
            <span className="text-primary-yellow">J&C</span> Rastreamento
          </div>
          <p className="text-gray text-sm mb-6 max-w-md mx-auto" style={{ maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
            Avenida Piauí, 1378 - Parque Alvorada<br/>
            Timon - MA, 65633-140
          </p>
          <p className="text-xs text-gray opacity-50">
            &copy; {new Date().getFullYear()} J&C Rastreamento. CNPJ 38.077.585/0001-83. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }} 
        className="whatsapp-float" 
        title="Fale Conosco pelo WhatsApp"
      >
        {/* Usando raw SVG icone Whatsapp para máxima pureza no flutuante */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.41z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
