/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ChevronDown,
  Menu,
  X,
  UserRound,
  Stethoscope,
  HeartPulse,
  Building2,
  Siren,
  Users,
  Smartphone,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Nossos Planos', href: '#', hasDropdown: true },
    { name: 'Para Empresas', href: '#' },
    { name: 'Pessoa Física', href: '#' },
    { name: 'Rede Credenciada', href: '#' },
    { name: 'Dúvidas', href: '#' },
    { name: 'Contato', href: '#' },
  ];

  const plans = [
    {
      title: 'Infinity Plus',
      category: 'EMPRESARIAL COMPLETO',
      desc: 'Ambulatorial + Hospitalar com Obstetrícia. Enfermaria.',
      copay: 'A partir de R$ 128,44',
      bgColor: 'bg-infinity-blue',
      textColor: 'text-white',
      btnColor: 'bg-white text-infinity-blue',
      linkColor: 'text-white'
    },
    {
      title: 'Infinity Master',
      category: 'CONFORTO E PRIVACIDADE',
      desc: 'Ambulatorial + Hospitalar com Obstetrícia. Apartamento.',
      copay: '30% de Coparticipação',
      bgColor: 'bg-infinity-light',
      textColor: 'text-infinity-dark',
      btnColor: 'bg-infinity-blue text-white',
      linkColor: 'text-infinity-cyan'
    },
    {
      title: 'Infinity Premium',
      category: 'EXCLUSIVIDADE TOTAL',
      desc: 'Ambulatorial + Hospitalar com Obstetrícia. Enfermaria.',
      copay: 'SEM Coparticipação',
      bgColor: 'bg-infinity-dark',
      textColor: 'text-white',
      btnColor: 'bg-infinity-cyan text-white',
      linkColor: 'text-white'
    },
    {
      title: 'Infinity Supreme',
      category: 'O TOPO DA CATEGORIA',
      desc: 'Ambulatorial + Hospitalar com Obstetrícia. Apartamento.',
      copay: 'SEM Coparticipação',
      bgColor: 'bg-[#F0F7E6]',
      textColor: 'text-infinity-dark',
      btnColor: 'bg-infinity-dark text-white',
      linkColor: 'text-infinity-blue'
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="text-infinity-blue" size={32} />,
      text: "Excelência e Ética: Viabilizamos o acesso à saúde com total transparência e qualidade superior."
    },
    {
      icon: <Zap className="text-infinity-blue" size={32} />,
      text: "Contratação MEI: Facilidade para microempreendedores com CNPJ ativo há mais de 6 meses."
    },
    {
      icon: <Smartphone className="text-infinity-blue" size={32} />,
      text: "Controle na Palma da Mão: Aplicativo exclusivo para gestão integral da sua saúde e da sua família."
    },
    {
      icon: <HeartPulse className="text-infinity-blue" size={32} />,
      text: "Foco no Beneficiário: Experiência integral pensada em cada detalhe para ser surpreendente e favorável."
    },
    {
      icon: <Building2 className="text-infinity-blue" size={32} />,
      text: "Rede de Alta Performance: Acesso aos melhores prestadores, clínicas e hospitais da região."
    },
    {
      icon: <Users className="text-infinity-blue" size={32} />,
      text: "Equipe Especializada: Suporte qualificado pronto para atender todas as suas necessidades com agilidade."
    }
  ];

  const steps = [
    { number: 1, title: 'Cotação Online', desc: 'Escolha o perfil ideal para você ou sua empresa.' },
    { number: 2, title: 'Consultoria', desc: 'Nossos especialistas ajudam na melhor escolha.' },
    { number: 3, title: 'Documentação', desc: 'Envio rápido e digital de todos os documentos.' },
    { number: 4, title: 'Ativação', desc: 'Processamento ágil para você começar a usar logo.' },
    { number: 5, title: 'Bem-vindo', desc: 'Acesso imediato ao APP e rede credenciada.' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://i.imgur.com/NVbgqGF.png" 
                alt="Infinity Saúde Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-infinity-blue text-sm font-semibold flex items-center gap-1 transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-infinity-blue text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-infinity-dark transition-all shadow-lg hover:shadow-infinity-blue/20 animate-glow-pulse">
                Fale com um Consultor
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-infinity-blue p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 pb-6"
          >
            <div className="px-4 pt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-semibold text-gray-600 hover:text-infinity-blue hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-infinity-blue text-white px-6 py-4 rounded-xl text-base font-bold">
                  Fale com um Consultor
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[650px] md:h-[750px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/seed/infinity-health/1920/1080"
              alt="Infinity Health Care"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-infinity-dark/80 via-infinity-dark/40 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="inline-block px-4 py-1 bg-infinity-cyan/20 border border-infinity-cyan/30 rounded-full">
                  <span className="text-infinity-cyan font-bold text-xs tracking-widest uppercase">A melhor cobertura pelo menor preço da região</span>
                </div>
                <div className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse uppercase tracking-tighter">
                  Oferta por tempo limitado
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Saúde de Elite <br />
                <span className="text-infinity-cyan">a partir de R$ 128,44</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed">
                Proteja quem você ama com planos completos a partir de <span className="text-white font-bold">R$ 128,44 mensais</span>. Excelência Infinity agora ao seu alcance.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <button className="bg-infinity-cyan text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-infinity-cyan/20 animate-glow-pulse">
                  Simular Agora
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Ver Planos
                </button>
              </div>

              <div className="flex flex-wrap gap-10">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-infinity-cyan" size={24} />
                  <span className="font-semibold">Planos com e sem Coparticipação</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-infinity-cyan" size={24} />
                  <span className="font-semibold">Aceitamos MEI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-2 rounded-full transition-all ${i === 1 ? 'w-12 bg-infinity-cyan' : 'w-3 bg-white/30'}`}></div>
            ))}
          </div>
        </section>

        {/* Plans Section */}
        <section className="relative -mt-24 pb-24 px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-gray-100">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-infinity-dark mb-6">
                Encontre o <span className="text-infinity-blue">Plano Infinity</span> Perfeito
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-lg">
                Soluções inteligentes em saúde para todos os perfis. Do essencial ao supremo, garantimos a melhor cobertura para o seu bem-estar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, idx) => (
                <PlanCard key={idx} {...plan} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-400 text-sm mb-4 italic">Nº DE REG. NA ANS: 496.049/23-1 | 496.499/23-3 | 498.613/24-0 | 498.614/24-8</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-infinity-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-infinity-dark mb-6">
                Por que escolher a <span className="text-infinity-blue">Infinity?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Nosso foco é você! Pensamos em cada detalhe para que sua experiência seja surpreendente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:shadow-infinity-blue/5"
                >
                  <div className="mb-8 bg-infinity-blue/5 p-6 rounded-3xl group-hover:bg-infinity-blue group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-semibold leading-relaxed text-lg">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-infinity-dark mb-6">
                Contratação <span className="text-infinity-blue">Simples e Rápida</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Sem burocracia. Em poucos passos você garante a proteção que sua família e empresa precisam.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-100 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mb-8 z-10 transition-all duration-500 ${idx === 0 ? 'bg-infinity-blue text-white shadow-2xl shadow-infinity-blue/40 scale-110' : 'bg-white border-2 border-gray-100 text-gray-300 group-hover:border-infinity-blue group-hover:text-infinity-blue'}`}>
                      {step.number}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${idx === 0 ? 'text-infinity-dark' : 'text-gray-400 group-hover:text-infinity-dark'}`}>{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed px-4">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto bg-infinity-dark rounded-[40px] overflow-hidden relative shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-infinity-blue/20 to-transparent pointer-events-none"></div>
            
            <div className="relative px-8 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h3 className="text-white text-3xl md:text-5xl font-black leading-tight mb-6">
                  Pronto para ter uma saúde <span className="text-infinity-cyan">sem limites?</span>
                </h3>
                <p className="text-gray-300 text-lg md:text-xl">
                  Fale agora com um de nossos especialistas e descubra por que a Infinity é a escolha certa para você.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-infinity-cyan text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-infinity-dark transition-all shadow-2xl shadow-infinity-cyan/20 whitespace-nowrap animate-glow-pulse">
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-infinity-dark text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col mb-8">
                <img 
                  src="https://i.imgur.com/NVbgqGF.png" 
                  alt="Infinity Saúde Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                Mais do que um plano de saúde, um plano de vida. Qualidade, ética e transparência em cada atendimento.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-infinity-cyan transition-colors">Nossos Planos</a></li>
                <li><a href="#" className="hover:text-infinity-cyan transition-colors">Rede Credenciada</a></li>
                <li><a href="#" className="hover:text-infinity-cyan transition-colors">Área do Cliente</a></li>
                <li><a href="#" className="hover:text-infinity-cyan transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Smartphone size={18} className="text-infinity-cyan" />
                  <span>0800 INFINITY</span>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone size={18} className="text-infinity-cyan" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">© 2024 Infinity Operadora de Saúde. Todos os direitos reservados. Registro ANS nº 42188-0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PlanCard({ title, category, desc, copay, bgColor, textColor, btnColor, linkColor }: any) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className={`${bgColor} rounded-[32px] p-10 flex flex-col items-center text-center shadow-xl transition-all h-full border border-white/10`}
    >
      <span className={`text-[10px] font-black tracking-widest uppercase mb-4 opacity-70 ${textColor}`}>
        {category}
      </span>
      <h3 className={`text-3xl font-black mb-6 ${textColor}`}>
        {title}
      </h3>
      
      <p className={`text-sm mb-4 leading-relaxed opacity-90 ${textColor}`}>
        {desc}
      </p>
      
      <div className={`text-xs font-bold px-4 py-1.5 rounded-full bg-black/10 mb-10 ${textColor}`}>
        {copay}
      </div>
      
      <div className="mt-auto w-full">
        <button className={`${btnColor} w-full py-4 rounded-2xl font-black text-sm mb-6 hover:scale-105 transition-transform shadow-lg animate-glow-pulse`}>
          CONTRATAR AGORA
        </button>
        
        <a href="#" className={`text-xs font-bold underline underline-offset-8 decoration-2 hover:opacity-70 transition-opacity ${linkColor}`}>
          DETALHES DO PLANO
        </a>
      </div>
    </motion.div>
  );
}
