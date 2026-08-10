import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BagDrawer from './components/BagDrawer';
import { Sneaker, BagItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Phone } from 'lucide-react';
import { AdminPage } from './pages/Admin';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return window.location.pathname === '/admin' ? 'admin' : 'inicio';
  });
  
  const [bagItems, setBagItems] = useState<BagItem[]>(() => {
    const saved = localStorage.getItem('litoral_raro_bag');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ name: string; size: number } | null>(null);

  useEffect(() => {
    localStorage.setItem('litoral_raro_bag', JSON.stringify(bagItems));
  }, [bagItems]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleAddProductToBag = (sneaker: Sneaker, size: number) => {
    setBagItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.sneaker.id === sneaker.id && item.selectedSize === size
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { sneaker, selectedSize: size, quantity: 1 }];
      }
    });

    setToastMessage({ name: sneaker.name, size });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);

    setIsBagOpen(true);
  };

  const handleUpdateQuantity = (id: string, size: number, quantity: number) => {
    if (quantity < 1) return;
    setBagItems((prev) =>
      prev.map((item) =>
        item.sneaker.id === id && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: number) => {
    setBagItems((prev) =>
      prev.filter((item) => !(item.sneaker.id === id && item.selectedSize === size))
    );
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const totalCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  if (activeTab === 'admin' || window.location.pathname === '/admin') {
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen bg-brand-surface text-brand-ink flex flex-col justify-between selection:bg-brand-accent selection:text-black">
      
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openBag={() => setIsBagOpen(true)}
        bagCount={totalCount}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'inicio' && (
              <Home
                setActiveTab={setActiveTab}
                onAddProductToBag={handleAddProductToBag}
              />
            )}
            {activeTab === 'catalogo' && (
              <Catalog
                onAddProductToBag={handleAddProductToBag}
              />
            )}
            {activeTab === 'como-funciona' && (
              <Process
                setActiveTab={setActiveTab}
              />
            )}
            {activeTab === 'contato' && (
              <Contact
                setActiveTab={setActiveTab}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveTab={setActiveTab} />

      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />

      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/5512991819041?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20responsavel%20sobre%20cota%C3%A7%C3%A3o%20de%20sneakers."
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-brand-accent shadow-lg transition-transform duration-300 hover:scale-110"
          title="Falar com o Concierge"
        >
          <Phone className="h-6 w-6 stroke-[2]" />
        </a>
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 right-6 sm:left-auto sm:right-6 z-50 max-w-sm w-full bg-neutral-900 text-white rounded-2xl p-4 shadow-2xl border border-white/10 flex items-start justify-between"
          >
            <div className="flex space-x-3">
              <div className="h-8 w-8 rounded-lg bg-brand-accent flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-brand-accent uppercase tracking-wider">
                  Adicionado ao Orçamento
                </h4>
                <p className="text-xs text-white mt-0.5 line-clamp-1">
                  {toastMessage.name} (Tam {toastMessage.size})
                </p>
                <button
                  onClick={() => {
                    setIsBagOpen(true);
                    setToastMessage(null);
                  }}
                  className="text-[10px] text-gray-400 hover:text-white font-mono underline font-bold mt-1 uppercase tracking-widest"
                >
                  Ver sacola agora
                </button>
              </div>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}