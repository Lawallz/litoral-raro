import { ArrowRight, Phone, CheckCircle2, ShieldAlert, Award, Headphones } from 'lucide-react';
import { processStepsData } from '../data';

interface ProcessProps {
  setActiveTab: (tab: string) => void;
}

export default function Process({ setActiveTab }: ProcessProps) {
  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. TITLE BANNER */}
      <section className="relative overflow-hidden bg-black text-white py-16 sm:py-24 text-center">
        {/* Abstract vector dots background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,249,157,0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-[0.2em]">
            Linha de Frente
          </span>
          <h1 className="font-display text-3xl font-black uppercase tracking-wider sm:text-5xl leading-tight">
            Como Funciona o Corre
          </h1>
          <p className="font-sans text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Garimpo bruto e seleção cirúrgica das silhuetas mais disputadas das ruas. Conheça a caminhada da Litoral Raro para colocar o kit no seu pé.
          </p>
        </div>
      </section>

      {/* 2. THE FOUR STEP JOURNEY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processStepsData.map((step) => (
            <div
              key={step.id}
              className="group flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-gray-100 p-5 shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Step label header */}
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-mono text-xs font-bold text-black uppercase tracking-widest bg-brand-accent px-2.5 py-1 rounded">
                    PASSO {step.number}
                  </span>
                  <span className="font-display text-3xl font-black text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold uppercase tracking-wider text-black mb-2">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step visual image */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gray-50 mt-auto flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. O PADRÃO LITORAL RARO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
            NOSSO DIFERENCIAL
          </span>
          <h2 className="font-display text-2xl font-black uppercase tracking-wider text-black sm:text-3xl mt-1">
            O Padrão Litoral Raro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Authentic card */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="h-12 w-12 rounded-xl bg-neutral-900 text-brand-accent flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
              Alto Padrão de Construção
            </h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Cada par passa por uma conferência manual rigorosa. Checamos minuciosamente a qualidade dos materiais, as texturas, o formato e a firmeza de cada costura antes do envio.
            </p>
          </div>

          {/* Sourcing card */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="h-12 w-12 rounded-xl bg-neutral-900 text-brand-accent flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
              Estéticas Selecionadas
            </h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Acesso às silhuetas e colorways mais disputadas do mercado global. Trazemos direto para o seu lifestyle os pares mais difíceis de encontrar rodando por aí.
            </p>
          </div>

          {/* Support card */}
          <div className="p-8 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center space-y-4 shadow-xs">
            <div className="h-12 w-12 rounded-xl bg-neutral-900 text-brand-accent flex items-center justify-center">
              <Headphones className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
              Suporte Direto
            </h3>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Acompanhamento total do seu corre. Mantemos você atualizado desde a busca inicial com nossos contatos internacionais até o envio seguro direto para a sua casa.
            </p>
          </div>
        </div>
      </section>

      {/* 4. READY SOURCING CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(217,249,157,0.08)_0%,transparent_50%)]" />
          
          <div className="relative z-10 space-y-3">
            <h2 className="font-display text-2xl font-black uppercase tracking-wider sm:text-3xl">
              Pronto para lançar <br />
              aquele par pesado?
            </h2>
            <p className="font-sans text-sm text-gray-400 max-w-md leading-relaxed">
              Dá um confere no nosso catálogo e faça o seu pedido, ou mande a foto daquele modelo específico que você quer que nós puxamos pra você.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('catalogo')}
              className="rounded-xl bg-white text-black hover:bg-brand-accent hover:text-black font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors text-center"
            >
              Ver o Catálogo
            </button>
            <a
              href="https://wa.me/5512991819041?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20sneaker%20espec%C3%ADfico%20com%20a%20Litoral%20Raro."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}