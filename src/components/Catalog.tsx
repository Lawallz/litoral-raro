import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Sparkles, Filter, X } from 'lucide-react';
import { Sneaker, Brand, Silhouette, FilterState } from '../types';
import { sneakersData } from '../data';

interface CatalogProps {
  onAddProductToBag: (sneaker: Sneaker, size: number) => void;
}

export default function Catalog({ onAddProductToBag }: CatalogProps) {
  // Filters State
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    brands: [],
    silhouettes: [],
    sizes: [],
    maxPrice: 10000,
    sortBy: 'highlights',
  });

  // Size Selector Overlay per Product Card
  const [activeSizeSelector, setActiveSizeSelector] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // Mobile filters overlay toggles
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Constants
  const availableBrands: Brand[] = ['Nike', 'Asics'];
  const availableSilhouettes: Silhouette[] = ['Low Top', 'Mid Top', 'High Top'];
  const availableSizes = [38, 39, 40, 41, 42, 43, 44];

  // Apply filters and sorting dynamically
  const filteredSneakers = useMemo(() => {
    let result = [...sneakersData];

    // 1. Brand filter (Executa primeiro para garantir isolamento total)
    if (filterState.brands.length > 0) {
      result = result.filter((s) => filterState.brands.includes(s.brand));
    }

    // 2. Search query matching (Busca apenas dentro dos resultados da marca filtrada)
    if (filterState.search.trim()) {
      const q = filterState.search.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.brand.toLowerCase().includes(q) ||
          s.colors.toLowerCase().includes(q)
      );
    }

    // 3. Silhouette filter
    if (filterState.silhouettes.length > 0) {
      result = result.filter((s) => filterState.silhouettes.includes(s.silhouette));
    }

    // 4. Size filter
    if (filterState.sizes.length > 0) {
      result = result.filter((s) =>
        s.sizes.some((sz) => filterState.sizes.includes(sz))
      );
    }

    // 5. Price filter
    result = result.filter((s) => s.price <= filterState.maxPrice);

    // Sorting
    if (filterState.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filterState.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filterState]);

  // Handler functions
  const handleBrandChange = (brand: Brand) => {
    setFilterState((prev) => {
      const alreadySelected = prev.brands.includes(brand);
      return {
        ...prev,
        brands: alreadySelected
          ? prev.brands.filter((b) => b !== brand)
          : [...prev.brands, brand],
      };
    });
  };

  const handleSilhouetteChange = (silhouette: Silhouette) => {
    setFilterState((prev) => {
      const alreadySelected = prev.silhouettes.includes(silhouette);
      return {
        ...prev,
        silhouettes: alreadySelected
          ? prev.silhouettes.filter((s) => s !== silhouette)
          : [...prev.silhouettes, silhouette],
      };
    });
  };

  const handleSizeClick = (size: number) => {
    setFilterState((prev) => {
      const alreadySelected = prev.sizes.includes(size);
      return {
        ...prev,
        sizes: alreadySelected
          ? prev.sizes.filter((s) => s !== size)
          : [...prev.sizes, size],
      };
    });
  };

  const handleResetFilters = () => {
    setFilterState({
      search: '',
      brands: [],
      silhouettes: [],
      sizes: [],
      maxPrice: 10000,
      sortBy: 'highlights',
    });
  };

  const handleAddWithConfirm = (sneaker: Sneaker, size: number) => {
    onAddProductToBag(sneaker, size);
    setActiveSizeSelector(null);
    setSelectedSize(null);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Page Header (Matching Catalog Mockup) */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
          NOSSOS PRODUTOS
        </span>
        <h1 className="font-display text-3xl font-black uppercase tracking-wider text-black sm:text-4xl lg:text-5xl mt-1">
          Catálogo Exclusivo
        </h1>
        <p className="font-sans text-sm text-gray-500 mt-2 leading-relaxed">
          Conectando o seu estilo com o que tá rodando de mais forte nos blocos e nas ruas do mundo todo. Nosso corre é trazer modelos selecionados a dedo pelo padrão de construção e visual impecável. Direto pro seu pé, sob encomenda.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        
        {/* Desktop Filter Sidebar (Left) */}
        <aside className="hidden lg:block space-y-8 pr-4">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-black" />
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-black">
                Filtros
              </h2>
            </div>
            <button
              onClick={handleResetFilters}
              className="text-xs font-mono text-gray-400 hover:text-black underline uppercase tracking-wider"
            >
              Limpar
            </button>
          </div>

          {/* Brands Filter */}
          <div className="space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Marcas
            </h3>
            <div className="space-y-2">
              {availableBrands.map((brand) => (
                <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filterState.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="font-mono text-xs font-medium text-gray-500 group-hover:text-black transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Silhouette Filter */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Silhueta
            </h3>
            <div className="space-y-2">
              {availableSilhouettes.map((sil) => (
                <label key={sil} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filterState.silhouettes.includes(sil)}
                    onChange={() => handleSilhouetteChange(sil)}
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="font-mono text-xs font-medium text-gray-500 group-hover:text-black transition-colors">
                    {sil}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Tamanho BR */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
              Tamanho BR
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {availableSizes.map((sz) => {
                const isSelected = filterState.sizes.includes(sz);
                return (
                  <button
                    key={sz}
                    onClick={() => handleSizeClick(sz)}
                    className={`font-mono text-xs py-2 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-black border-black text-white font-bold'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-black/30 hover:text-black'
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Products Panel (Right - 3/4) */}
        <main className="lg:col-span-3 space-y-6">
          
          {/* Controls bar: Search, sorting, and mobile filters toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-gray-100">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar modelo ou marca..."
                value={filterState.search}
                onChange={(e) => setFilterState({ ...filterState, search: e.target.value })}
                className="w-full rounded-xl border border-gray-200 pl-10 pr-4 py-2.5 text-xs text-black placeholder-gray-400 bg-white focus:border-black focus:outline-hidden transition-colors font-sans"
              />
            </div>

            {/* Sorter and mobile toggle button */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="flex items-center space-x-2 rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold font-mono uppercase tracking-wider text-black bg-white hover:bg-gray-50 transition-colors lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filtros</span>
              </button>

              <div className="flex items-center space-x-2">
                <ArrowUpDown className="h-3.5 w-3.5 text-gray-400" />
                <span className="hidden sm:inline font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  Ordenar Por:
                </span>
                <select
                  value={filterState.sortBy}
                  onChange={(e) => setFilterState({ ...filterState, sortBy: e.target.value as any })}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-black focus:border-black focus:outline-hidden transition-colors"
                >
                  <option value="highlights">Destaques</option>
                  <option value="price-asc">Preço Menor</option>
                  <option value="price-desc">Preço Maior</option>
                </select>
              </div>
            </div>

          </div>

          {/* Active Filtering Tags */}
          {(filterState.brands.length > 0 || filterState.silhouettes.length > 0 || filterState.sizes.length > 0 || filterState.search) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">Ativos:</span>
              
              {filterState.search && (
                <span className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-mono text-black">
                  <span>Termo: {filterState.search}</span>
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setFilterState({ ...filterState, search: '' })} />
                </span>
              )}

              {filterState.brands.map((b) => (
                <span key={b} className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-mono text-black">
                  <span>{b}</span>
                  <X className="h-3 w-3 cursor-pointer" onClick={() => handleBrandChange(b)} />
                </span>
              ))}

              {filterState.silhouettes.map((s) => (
                <span key={s} className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-mono text-black">
                  <span>{s}</span>
                  <X className="h-3 w-3 cursor-pointer" onClick={() => handleSilhouetteChange(s)} />
                </span>
              ))}

              {filterState.sizes.map((sz) => (
                <span key={sz} className="inline-flex items-center space-x-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-mono text-black">
                  <span>Tam BR {sz}</span>
                  <X className="h-3 w-3 cursor-pointer" onClick={() => handleSizeClick(sz)} />
                </span>
              ))}

              <button
                onClick={handleResetFilters}
                className="text-[10px] font-mono text-gray-400 hover:text-red-500 underline uppercase tracking-widest ml-1"
              >
                Limpar todos
              </button>
            </div>
          )}

          {/* Sneaker Grid */}
          {filteredSneakers.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-24 px-4 bg-white rounded-2xl border border-gray-100 space-y-5 shadow-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-50 text-xl animate-bounce">
                👟
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-black text-black uppercase tracking-wider">
                  Modelo não encontrado
                </h3>
                <p className="max-w-md text-xs text-gray-400 font-sans leading-relaxed mx-auto">
                  Não encontramos nenhum modelo com os filtros selecionados. Caso queira encomendar um modelo específico ou consultar tamanhos exclusivos, chame a nossa equipe no WhatsApp!
                </p>
              </div>

              {/* Botão de conversão direta */}
              <a
                href={`https://wa.me/5512991819041?text=${encodeURIComponent(
                  `Opa, beleza? Estava navegando no catálogo e não encontrei o modelo que queria (Filtros: ${filterState.brands.join(', ') || 'Geral'}${filterState.search ? ` - Busca: ${filterState.search}` : ''}). Gostaria de consultar a disponibilidade ou fazer uma encomenda exclusiva!`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 rounded-xl bg-black px-6 py-3.5 text-[10px] font-bold font-mono uppercase tracking-widest text-white shadow-md hover:bg-neutral-800 transition-all transform hover:-translate-y-0.5"
              >
                <span>Consultar no WhatsApp</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSneakers.map((sneaker) => {
                const isSizeSelecting = activeSizeSelector === sneaker.id;

                return (
                  <div
                    key={sneaker.id}
                    className="group relative flex flex-col justify-between overflow-hidden bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-luxe hover:border-black/5 transition-all duration-300"
                  >
                    <div>
                      {/* Image container - QUADRADINHO E RETO */}
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black-100 mb-4">
                        {sneaker.tag && (
                          <span className="absolute top-2 left-2 z-10 font-mono text-[9px] font-bold text-white uppercase tracking-widest bg-black border border-black px-2.5 py-1">
                            {sneaker.tag}
                          </span>
                        )}
                        <img
                          src={sneaker.image}
                          alt={sneaker.name}
                          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                        />

                        {/* Card Size Selection layer */}
                        {isSizeSelecting && (
                          <div className="absolute inset-0 bg-black/95 backdrop-blur-xs p-4 flex flex-col justify-between text-white z-20">
                            <div>
                              <p className="font-mono text-[10px] text-brand-accent uppercase tracking-wider font-bold mb-2">
                                Selecione seu tamanho BR:
                              </p>
                              <div className="grid grid-cols-4 gap-1.5">
                                {sneaker.sizes.map((size) => (
                                  <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`font-mono text-xs py-2 border transition-all ${
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
                                className="flex-1 py-2 bg-white text-black hover:bg-brand-accent hover:text-black font-mono text-[10px] font-bold uppercase tracking-widest transition-colors disabled:opacity-40"
                              >
                                Confirmar
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Informações do Produto (Marca, Nome e Preço) */}
                      <div className="px-1 pb-1">
                        <p className="font-mono text-[9px] uppercase text-gray-400 tracking-wider mb-0.5">
                          {sneaker.brand || "Premium"}
                        </p>
                        <h4 className="font-sans text-sm font-bold text-black tracking-tight leading-tight uppercase line-clamp-1 mb-2">
                          {sneaker.name}
                        </h4>
                        
                        {/* Bloco do Preço */}
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="font-mono text-sm font-black text-black">
                            R$ {sneaker.price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "Consulte"}
                          </span>
                          
                          {/* Se for o ID 6 OU o ID 3 (seja string ou número) */}
                          {[3, '3', 6, '6'].includes(sneaker.id) ? (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                              A pronta entrega
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                              Disponivel
                            </span>
                          )}
                            </div>
                          </div>
                        </div>

                    {/* Botão de Selecionar Tamanho */}
                    <button
                      onClick={() => setActiveSizeSelector(sneaker.id)}
                      className="w-full mt-3 py-3 bg-black hover:bg-neutral-800 text-white font-mono text-[10px] font-bold uppercase tracking-widest transition-colors rounded-xl"
                    >
                      Selecione o Tamanho
                    </button>
                  </div>
                );
              })}
            </div>
          )}

        </main>
      </div>

      {/* Mobile Drawer Filter Panel */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setShowMobileFilters(false)} />
          
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-black flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filtros</span>
              </h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Filters Content */}
            <div className="space-y-6 flex-1">
              {/* Brands */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
                  Marcas
                </h3>
                <div className="space-y-2">
                  {availableBrands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterState.brands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="font-mono text-xs font-medium text-gray-500">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Silhouette */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
                  Silhueta
                </h3>
                <div className="space-y-2">
                  {availableSilhouettes.map((sil) => (
                    <label key={sil} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filterState.silhouettes.includes(sil)}
                        onChange={() => handleSilhouetteChange(sil)}
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                      <span className="font-mono text-xs font-medium text-gray-500">
                        {sil}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h3 className="font-display text-xs font-bold uppercase tracking-widest text-black">
                  Tamanhos BR
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {availableSizes.map((sz) => {
                    const isSelected = filterState.sizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        onClick={() => handleSizeClick(sz)}
                        className={`font-mono text-xs py-2 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-black border-black text-white font-bold'
                            : 'bg-white border-gray-200 text-gray-500'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile filters bottom action */}
            <div className="border-t border-gray-100 pt-4 mt-6 space-y-2">
              <button
                onClick={() => {
                  handleResetFilters();
                  setShowMobileFilters(false);
                }}
                className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black border border-gray-200 rounded-xl transition-colors"
              >
                Limpar Tudo
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-black hover:bg-neutral-800 text-white rounded-xl transition-colors"
              >
                Ver {filteredSneakers.length} Sneakers
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}