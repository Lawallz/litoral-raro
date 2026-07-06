import { X, Trash2, Phone, Sparkles, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BagItem } from '../types';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (id: string, size: number, quantity: number) => void;
  onRemoveItem: (id: string, size: number) => void;
  onClearBag: () => void;
}

export default function BagDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}: BagDrawerProps) {

  // Calcula o valor total acumulado na sacola
  const totalBagPrice = items.reduce((acc, item) => {
    return acc + (item.sneaker.price * item.quantity);
  }, 0);

  // Dispara a mensagem formatada incluindo os preços individuais e o total estimado
  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `*SOLICITAÇÃO DE ORÇAMENTO - LITORAL RARO*\n`;
    text += `Olá, gostaria de consultar a disponibilidade e cotação atualizada para os seguintes modelos:\n\n`;

    items.forEach((item, index) => {
      const itemSubtotal = item.sneaker.price * item.quantity;
      text += `${index + 1}. *${item.sneaker.name}*\n`;
      text += `   • Marca: ${item.sneaker.brand}\n`;
      text += `   • Tamanho BR: ${item.selectedSize}\n`;
      text += `   • Preço Un.: R$ ${item.sneaker.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `   • Quantidade: ${item.quantity}x (Subtotal: R$ ${itemSubtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})\n\n`;
    });

    text += `*Valor Total Estimado:* R$ ${totalBagPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    text += `*Solicitante:* ${navigator.userAgent.includes('Mobile') ? 'Dispositivo Móvel' : 'Web Client'}\n\n`;
    text += `Por favor, me confirme a disponibilidade e o prazo de entrega por encomenda. Obrigado!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5512991819041?text=${encodedText}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 p-6">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-black" />
                <h2 className="font-display text-lg font-bold uppercase tracking-wider text-black">
                  Sacola de Orçamento
                </h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-black transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
                    <ShoppingBag className="h-8 w-8 text-gray-300" />
                  </div>
                  <h3 className="font-display text-base font-bold text-black mb-1">
                    Sua sacola está vazia
                  </h3>
                  <p className="max-w-xs text-sm text-gray-400">
                    Navegue pelo nosso catálogo exclusivo e adicione os modelos que você tem interesse para fazer uma cotação.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold font-mono text-gray-400 uppercase tracking-widest">
                      {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
                    </span>
                    <button
                      onClick={onClearBag}
                      className="text-xs font-mono text-gray-400 hover:text-red-500 underline transition-colors"
                    >
                      Limpar tudo
                    </button>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {items.map((item, idx) => (
                      <div key={`${item.sneaker.id}-${item.selectedSize}`} className="flex py-4 first:pt-0 last:pb-0">
                        {/* Sneaker Image */}
                        <img
                          src={item.sneaker.image}
                          alt={item.sneaker.name}
                          className="h-20 w-20 rounded-xl object-cover bg-gray-50 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Sneaker Info */}
                        <div className="ml-4 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-display text-sm font-bold text-black leading-snug uppercase line-clamp-2">
                                {item.sneaker.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.sneaker.id, item.selectedSize)}
                                className="text-gray-400 hover:text-red-500 p-1 transition-colors shrink-0"
                                aria-label="Remover item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                              {item.sneaker.brand} • Tam {item.selectedSize}
                            </p>
                          </div>

                          <div className="flex justify-between items-center mt-3">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-100 rounded-lg bg-white">
                              <button
                                onClick={() => onUpdateQuantity(item.sneaker.id, item.selectedSize, item.quantity - 1)}
                                className="px-2.5 py-1 text-gray-400 hover:text-black font-semibold text-xs transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-mono font-bold text-black">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.sneaker.id, item.selectedSize, item.quantity + 1)}
                                className="px-2.5 py-1 text-gray-400 hover:text-black font-semibold text-xs transition-colors"
                              >
                                +
                              </button>
                            </div>

                            {/* Item Price Component */}
                            <div className="text-right">
                              <p className="font-mono text-sm font-black text-black">
                                R$ {(item.sneaker.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                              </p>
                              {item.quantity > 1 && (
                                <p className="font-mono text-[9px] text-gray-400 uppercase">
                                  R$ {item.sneaker.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} cada
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Price Details & CTA */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-gray-50/50 space-y-4">
                
                {/* Price Summary Breakdown */}
                <div className="space-y-1.5 border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center text-xs text-gray-500 font-mono uppercase tracking-wider">
                    <span>Subtotal dos itens</span>
                    <span>R$ {totalBagPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-bold text-black uppercase">
                    <span className="font-display">Total Estimado</span>
                    <span className="font-mono text-base font-black">R$ {totalBagPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-brand-accent/20 border border-brand-accent/30 p-3 flex items-start space-x-2.5">
                  <Sparkles className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-normal">
                    Como trabalhamos sob encomenda, os valores finais e a disponibilidade de estoque oficial serão confirmados em tempo real pelo nosso atendimento.
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsAppCheckout()}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-black py-4 text-xs font-bold font-mono uppercase tracking-widest text-white shadow-md hover:bg-neutral-800 transition-all transform hover:scale-[1.01]"
                >
                  <Phone className="h-4 w-4" />
                  <span>Confirmar e Chamar no WhatsApp</span>
                </button>
                
                <p className="text-[10px] text-center text-gray-400 font-mono uppercase tracking-wider">
                  Atendimento personalizado e suporte direto com a nossa equipe
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}