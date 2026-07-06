import { Instagram, Mail, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 text-black">
      {/* Top half with columns */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          
          {/* Main Info Column (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-2">
              {/* Logo em imagem com tamanho controlado e responsivo */}
              <img 
                src="../../assets/img/logo-eraser.png" 
                alt="Litoral Raro Logo" 
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Sua conexão direta com a cultura sneaker global. Autenticidade, curadoria técnica certificada e exclusividade assegurada em cada passo.
            </p>

            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href="https://instagram.com/litoralraro"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="mailto:litoralraro@gmail.com"
                className="h-9 w-9 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black/20 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://litoralraro.com.br"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black/20 transition-all"
                aria-label="Web"
              >
                <Globe className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Institutional / Links (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Institucional
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setActiveTab('inicio')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogo')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('como-funciona')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contato')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Sourcing / Help (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Ajuda &amp; Termos
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#terms"
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider block"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider block"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider block"
                >
                  Envio e Rastreio
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider block"
                >
                  Devoluções e Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Collections lists (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Coleções Raras
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setActiveTab('catalogo')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Nike Air Max
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogo')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Air Jordan
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogo')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  Asics Sportstyle
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('catalogo')}
                  className="font-mono text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-wider text-left"
                >
                  New Balance Retro
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-gray-400 text-center sm:text-left uppercase tracking-wider">
            © {currentYear} Litoral Raro. Exclusive Sneaker Sourcing. Todos os direitos reservados.
          </p>

          {/* Premium brand badge */}
          <div className="flex items-center space-x-1.5 rounded-full border border-gray-100 bg-gray-50/50 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-500">
            <span>Feito Por @oglawall</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
