import { ShoppingBag, User, Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBag: () => void;
  bagCount: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  openBag,
  bagCount,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <div 
          onClick={() => setActiveTab('inicio')} 
          className="flex cursor-pointer items-center space-x-2"
        >
          {/* Agora apontando para a raiz real do projeto */}
          <img 
            src={new URL('../../assets/img/logo-eraser.png', import.meta.url).href} 
            alt="Litoral Raro Logo" 
            className="h-14 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative py-2 font-mono text-xs font-semibold uppercase tracking-widest transition-colors ${
                activeTab === item.id ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-black"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-4">
          
          {/* Quick WhatsApp Action (Matching mockup button style) */}
          <a
            href="https://wa.me/5512991819041?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20orçamento%20de%20sneaker%20exclusivo."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center space-x-2 rounded-full border border-black/10 px-4 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Bag Button */}
          <button
            onClick={openBag}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-black hover:bg-gray-100 transition-all"
            aria-label="Ver carrinho"
          >
            <ShoppingBag className="h-5 w-5 stroke-[1.8]" />
            {bagCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold font-mono text-white ring-2 ring-white">
                {bagCount}
              </span>
            )}
          </button>

          {/* User Profile Visual Indicator */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-black hover:bg-gray-100 transition-all">
            <User className="h-5 w-5 stroke-[1.8]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-black hover:bg-gray-100 transition-all md:hidden"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-b border-gray-100 bg-white py-4 px-6 shadow-sm"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-mono text-xs font-semibold uppercase tracking-widest py-2 ${
                  activeTab === item.id ? 'text-black border-l-2 border-black pl-2' : 'text-gray-400 pl-2'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-gray-100 pt-3">
              <a
                href="https://wa.me/5512991819041?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20a%20disponibilidade%20do%20tênis:"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 rounded-xl bg-black py-2.5 text-xs font-semibold font-mono uppercase tracking-wider text-white"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
