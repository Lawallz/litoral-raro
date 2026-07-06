import { useState, FormEvent } from 'react';
import { Phone, Mail, Instagram, ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { faqData } from '../data';

interface ContactProps {
  setActiveTab: (tab: string) => void;
}

export default function Contact({ setActiveTab }: ContactProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre Produto');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Expand state
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Monta a mensagem formatada para o WhatsApp
    let text = `*NOVA MENSAGEM de CONTATO - LITORAL RARO*\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*E-mail:* ${email}\n`;
    text += `*Assunto:* ${subject}\n\n`;
    text += `*Mensagem:*\n${message}`;

    const encodedText = encodeURIComponent(text);
    // Substitua pelo número oficial da Litoral Raro
    const whatsappUrl = `https://wa.me/5512991819041?text=${encodedText}`;

    // Simula um pequeno delay para feedback visual antes de abrir o link
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Abre o WhatsApp em uma nova aba
      window.open(whatsappUrl, '_blank');

      // Reseta os campos do formulário
      setName('');
      setEmail('');
      setMessage('');
      setSubject('Dúvida sobre Produto');
    }, 800);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-20 pb-20">
      
      {/* 1. HEADER SECTION */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
          Fale Conosco
        </span>
        <h1 className="font-display text-3xl font-black uppercase tracking-wider text-black sm:text-4xl lg:text-5xl mt-1">
          Contato
        </h1>
        <p className="font-sans text-sm text-gray-500 mt-2 leading-relaxed">
          Estamos prontos para ajudar você a encontrar o par perfeito para sua coleção. Experiência exclusiva e curadoria sob medida para os seus gostos.
        </p>
      </div>

      {/* 2. DIRECT CONTACT AND CONTACT FORM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct channels (Atendimento Direto) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-display text-lg font-black uppercase tracking-widest text-black mb-1">
              Atendimento Direto
            </h2>
            <p className="font-sans text-xs text-gray-400">
              Escolha o canal de sua preferência para um suporte imediato e personalizado.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* WhatsApp channel */}
            <a
              href="https://wa.me/5512991819041?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20atendimento%20da%20Litoral%20Raro."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 hover:border-black/10 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-black">
                    WhatsApp Suporte
                  </h3>
                  <span className="font-mono text-[11px] text-gray-400">
                    +55 (12) 99181-9041
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </a>

            {/* Email channel */}
            <a
              href="mailto:litoralraro@gmail.com"
              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 hover:border-black/10 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-black">
                    E-mail Comercial
                  </h3>
                  <span className="font-mono text-[11px] text-gray-400">
                    litoralraro@gmail.com
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </a>

            {/* Instagram channel */}
            <a
              href="https://instagram.com/litoralraro"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 hover:border-black/10 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-black">
                    Instagram Oficial
                  </h3>
                  <span className="font-mono text-[11px] text-gray-400">
                    @litoralraro
                  </span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </a>

          </div>

          {/* Aesthetic shoe photo on podium underneath */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-xs relative h-64 bg-neutral-950">
            <img
              src="../assets/img/Air Max Dn8 Black 2.jpg"
              alt="High-end exclusive sneaker"
              className="h-full w-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-6">
              <div>
                <span className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">
                  Estilo Editorial
                </span>
                <p className="font-display text-xs font-bold uppercase tracking-wider text-white">
                  Exclusividade sem limites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Send message form (Envie uma mensagem) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <div>
            <h2 className="font-display text-lg font-black uppercase tracking-widest text-black mb-1">
              Envie uma Mensagem
            </h2>
            <p className="font-sans text-xs text-gray-400">
              Preencha os campos abaixo para iniciar seu atendimento via WhatsApp automaticamente.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl bg-neutral-50 border border-gray-100 p-8 text-center space-y-3">
              <Check className="h-10 w-10 text-white mx-auto bg-black p-2 rounded-full" />
              <h3 className="font-display text-base font-bold uppercase tracking-wider text-black">
                Redirecionando para o WhatsApp...
              </h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Sua mensagem foi formatada com sucesso. Caso a janela de conversa não tenha aberto, clique no botão abaixo para prosseguir.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-xs text-black font-semibold underline pt-3"
              >
                Escrever nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Nome Completo */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-xs text-black placeholder-gray-400 bg-white focus:border-black focus:outline-hidden transition-colors font-sans"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-xs text-black placeholder-gray-400 bg-white focus:border-black focus:outline-hidden transition-colors font-sans"
                />
              </div>

              {/* Assunto Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                  Assunto
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-black focus:border-black focus:outline-hidden transition-colors"
                >
                  <option value="Dúvida sobre Produto">Dúvida sobre Produto</option>
                  <option value="Solicitação de Sneaker Especial">Solicitação de Sneaker Especial</option>
                  <option value="Status de Importação">Status de Importação</option>
                  <option value="Parcerias">Parcerias</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-xs text-black placeholder-gray-400 bg-white focus:border-black focus:outline-hidden transition-colors font-sans resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 rounded-xl bg-black py-4 text-xs font-bold font-mono uppercase tracking-widest text-white shadow-md hover:bg-neutral-800 transition-colors disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Iniciando Conversa...' : 'Enviar pelo WhatsApp >'}</span>
              </button>

            </form>
          )}

        </div>

      </div>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="border-t border-gray-100 pt-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-4 space-y-3">
            <h2 className="font-display text-xl font-black uppercase tracking-wider text-black">
              Suporte &amp; Dúvidas
            </h2>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Já conferiu nossas seções de autoatendimento? Você pode encontrar respostas rápidas sobre autenticidade, prazos de importação e trocas.
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => setActiveTab('como-funciona')}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white hover:border-black/10 text-xs font-bold font-mono uppercase tracking-wider text-black transition-all"
              >
                <span>Como Funciona</span>
                <ChevronDown className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>

          <div className="md:col-span-8 divide-y divide-gray-100 bg-white rounded-3xl border border-gray-100 px-6 py-2 shadow-xs">
            {faqData.map((item) => {
              const isExpanded = expandedFaq === item.id;
              return (
                <div key={item.id} className="py-4">
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="flex w-full items-center justify-between text-left py-2"
                  >
                    <span className="font-display text-sm font-bold text-black uppercase tracking-wide leading-tight">
                      {item.question}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                  {isExpanded && (
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed font-sans pr-6">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}