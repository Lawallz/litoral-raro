import React, { useState, FormEvent } from 'react';
import { ArrowRight, HelpCircle, Star, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Sneaker, Testimonial } from '../types';
import { sneakersData, testimonialsData } from '../data';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onAddProductToBag: (sneaker: Sneaker, size: number) => void;
}

export default function Home({ setActiveTab, onAddProductToBag }: HomeProps) {
  const [selectedBrand, setSelectedBrand] = useState<'All' | 'Nike' | 'Asics' | 'Jordan'>('All');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  
  // Quick size selector state per sneaker card
  const [activeSizeSelector, setActiveSizeSelector] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // Filter highlights to match the design (Nike, Asics, Jordan)
  const filteredSneakers = sneakersData.filter((sneaker) => {
    if (selectedBrand === 'All') return ['1', '2', '4', '5', '6', '7', '8', '11', '12', '13'].includes(sneaker.id);
    return sneaker.brand === selectedBrand;
  }).slice(0, 8); // top 8

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => {
        setEmailValue('');
        setEmailSubscribed(false);
      }, 4000);
    }
  };

  const handleAddWithConfirm = (sneaker: Sneaker, size: number) => {
    onAddProductToBag(sneaker, size);
    setActiveSizeSelector(null);
    setSelectedSize(null);
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION (Banner Tela Cheia com o Air Max) */}
      <section className="relative h-[85vh] min-h-[550px] w-full flex items-center justify-center overflow-hidden bg-black">
        
        {/* Imagem do Air Max ocupando a tela toda */}
        <img
          src="../../assets/img/Air Max 95s.jpg" 
          alt="Nike Air Max 95"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />

        {/* Película escura para dar leitura e contraste nos botões */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

        {/* Conteúdo Centralizado */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-3xl">
          
        {/*<span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-4 block">
            // CURADORIA DE SNEAKERS RAROS
          </span>*/}

          <h1 className="font-['Cloister_Black'] text-6xl sm:text-8xl font-normal tracking-wide text-white leading-none mb-6 drop-shadow-md">
            LITORAL RARO
          </h1>

          {/*<p className="font-sans text-sm sm:text-base font-light text-gray-300 max-w-md leading-relaxed mb-10 drop-shadow-sm antialiased">
            A estética máxima e o padrão que as ruas exigem. Encontre os modelos mais disputados do mundo.
          </p>*/}

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('catalogo')}
              className="w-full sm:w-auto group flex items-center justify-center space-x-2.5 rounded-full bg-brand-accent px-8 py-4 text-xs font-bold font-mono uppercase tracking-widest text-black shadow-lg hover:scale-105 transition-transform"
            >
              <span>Explorar Catálogo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => setActiveTab('como-funciona')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-xs font-bold font-mono uppercase tracking-widest text-white hover:bg-white/20 transition-colors"
            >
              <span>Como Funciona</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. CURADORIA LITORAL (Sneaker Showcase) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl font-black uppercase tracking-wider text-black sm:text-3xl">
              Produtos Litoral
            </h2>
            <p className="font-sans text-sm text-gray-400 mt-1">
              Modelos selecionados a dedo nos maiores hubs de sneakerheads do mundo.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {(['All', 'Nike', 'Jordan', 'Asics'] as const).map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border transition-all ${
                  selectedBrand === brand
                    ? 'bg-black border-black text-white'
                    : 'bg-white border-black/10 text-gray-500 hover:border-black/30 hover:text-black'
                }`}
              >
                {brand === 'All' ? 'Todos' : brand}
              </button>
            ))}
          </div>
        </div>

        {/* Sneaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSneakers.map((sneaker) => {
            const isSizeSelecting = activeSizeSelector === sneaker.id;

            return (
              <div
                key={sneaker.id}
                className="group relative flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-luxe hover:border-black/5 transition-all duration-300"
              >
                <div>
                  {/* Image container */}
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-50 mb-4">
                        {sneaker.tag && (
                          <span className="absolute top-2.5 left-2.5 z-10 font-mono text-[9px] font-bold text-black uppercase tracking-widest bg-brand-accent px-2.5 py-1 rounded">
                            {sneaker.tag}
                          </span>
                        )}
                        <img
                          src={sneaker.image}
                          alt={sneaker.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />

                    {/* Sizing popup screen within the card */}
                    {isSizeSelecting && (
                      <div className="absolute inset-0 bg-black/95 backdrop-blur-xs p-4 flex flex-col justify-between text-white z-20">
                        <div>
                          <p className="font-mono text-[10px] text-brand-accent uppercase tracking-wider font-bold mb-2">
                            Selecione o Tamanho BR:
                          </p>
                          <div className="grid grid-cols-4 gap-1.5">
                            {sneaker.sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`font-mono text-xs py-2 rounded-lg border transition-all ${
                                  selectedSize === size
                                    ? 'bg-brand-accent border-brand-accent text-black font-extrabold'
                                    : 'border-white/10 hover:border-white/40 text-white'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <button
                            onClick={() => {
                              setActiveSizeSelector(null);
                              setSelectedSize(null);
                            }}
                            className="flex-1 py-2 font-mono text-[10px] text-gray-400 uppercase tracking-widest hover:text-white transition-colors"
                          >
                            Voltar
                          </button>
                          <button
                            disabled={!selectedSize}
                            onClick={() => selectedSize && handleAddWithConfirm(sneaker, selectedSize)}
                            className="flex-1 py-2 rounded-lg bg-white text-black hover:bg-brand-accent hover:text-black font-mono text-[10px] font-bold uppercase tracking-widest transition-colors disabled:opacity-40"
                          >
                            Confirmar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info details */}
                  <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">
                    {sneaker.brand}
                  </span>
                  <h3 className="font-display text-sm font-extrabold text-black uppercase tracking-tight group-hover:text-neutral-700 transition-colors mt-0.5 line-clamp-1">
                    {sneaker.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-sans mt-0.5">
                    {sneaker.colors}
                  </p>
                  
                  <div className="mt-1 flex items-center space-x-1.5 font-mono text-[11px] text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span>Disponível sob encomenda</span>
                  </div>
                </div>

                                {/* Settle Action / Quote request */}
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-end">
                  <button
                    onClick={() => {
                      setSelectedSize(null);
                      setActiveSizeSelector(sneaker.id);
                    }}
                    className="w-full rounded-lg bg-black text-white text-[10px] font-bold font-mono uppercase tracking-wider py-2.5 hover:bg-neutral-800 transition-colors text-center"
                  >
                    Pedir Orçamento
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CURADORIA EXCLUSIVA (Substituindo a newsletter de drops) */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 lg:p-16">
    {/* Efeito de luz sutil no fundo */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent,60%)]" />
    
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 relative z-10">
      
      {/* Texto focado em Serviço Personalizado */}
      <div className="space-y-4">
        <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
          Não encontrou seu tamanho ou modelo?
        </span>
        <h2 className="font-display text-2xl font-black uppercase tracking-wider sm:text-3xl lg:text-4xl leading-[1.1]">
          Encomenda Sob Medida
        </h2>
        <p className="font-sans text-sm text-gray-400 max-w-md leading-relaxed">
          Nosso catálogo é apenas uma vitrine. Se você busca uma numeração específica ou um modelo extremamente raro, nossa equipe faz a busca e a importação direta para você com qualidade garantida.
        </p>
      </div>

      {/* Botão de ação direto para o WhatsApp de encomendas */}
      <div className="flex flex-col justify-center sm:items-end">
        <a
          href={`https://wa.me/5512991819041?text=${encodeURIComponent(
            "Olá! Gostaria de falar com a curadoria para fazer a cotação/encomenda de um modelo específico que não encontrei no site."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors shadow-lg"
        >
          <span>Chamar Curadoria no WhatsApp</span>
        </a>
        <p className="text-[10px] text-gray-500 font-mono mt-3 text-center sm:text-right uppercase tracking-wider w-full">
          Atendimento humanizado e direto. Sem intermediários.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* 4. COMO FUNCIONA (Sourcing Methodology) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
            COMO FUNCIONA
          </span>
          <h2 className="font-display text-2xl font-black uppercase tracking-wider text-black sm:text-3xl mt-1">
            Um processo simples, transparente e seguro para garantir seu par exclusivo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              id: '1',
              title: 'Curadoria Exclusiva',
              desc: 'Nós buscamos os modelos mais raros nos principais hubs internacionais de streetwear.',
              icon: '🔍',
            },
            {
              id: '2',
              title: 'Solicite seu Orçamento',
              desc: 'Escolha seu tamanho e peça seu par. Nosso concierge consulta taxas e cotação atual.',
              icon: '💬',
            },
            {
              id: '3',
              title: 'Confirmação e Pedido',
              desc: 'Após confirmação da entrada, iniciamos a importação e perícia de autenticidade.',
              icon: '📋',
            },
            {
              id: '4',
              title: 'Entrega Garantida',
              desc: 'Seu par chega em embalagem protegida de colecionador e com seguro total até você.',
              icon: '📦',
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center shadow-xs"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 font-sans text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-black uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
              
              {/* Connector lines on desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gray-100 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setActiveTab('como-funciona')}
            className="group inline-flex items-center space-x-2 rounded-xl bg-black px-6 py-3.5 text-xs font-bold font-mono uppercase tracking-widest text-white shadow-xs hover:bg-neutral-800 transition-colors"
          >
            <span>Tirar Dúvidas</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

     {/* 5. COMMUNITY CO-SIGN (O que a banca diz) */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header minimalista com pegada editorial */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
                // Community Feedback
              </span>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight mt-2 sm:text-4xl">
                Aprovado pelas Ruas
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-xs mt-4 md:mt-0 leading-relaxed">
              Quem conhece a fundo nossa curadoria e o padrão das nossas entregas.
            </p>
          </div>

          {/* Grid Brutalista / Streetwear */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-8 border-r border-b border-white/10 flex flex-col justify-between hover:bg-neutral-950 transition-colors group"
              >
                <div>
                  {/* Elemento gráfico no lugar das estrelas amarelas */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] text-neutral-500 group-hover:text-white transition-colors">
                      [ ID: {String(item.id).padStart(2, '0')} ]
                    </span>
                    <span className="text-xl font-serif text-brand-accent select-none opacity-40">
                      “
                    </span>
                  </div>
                  
                  {/* Depoimento sem itálico clichê, fonte limpa e direta */}
                  <p className="font-sans text-xs text-neutral-300 leading-relaxed tracking-wide">
                    "{item.comment}"
                  </p>
                </div>

                {/* Footer do Card */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      {item.name}
                    </h4>
                    <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-normal">
                      {item.role || 'Sneakerhead'}
                    </span>
                  </div>
                  
                  {/* Tag verificada sutil e militar/industrial */}
                  <div className="flex items-center space-x-1.5 border border-white/10 px-2.5 py-1 rounded font-mono text-[9px] uppercase tracking-widest text-neutral-400 group-hover:border-brand-accent/40 group-hover:text-white transition-colors">
                    <span className="h-1 w-1 rounded-full bg-brand-accent animate-pulse" />
                    <span>Legit</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
} 