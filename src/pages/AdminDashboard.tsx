import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Trash2, Edit2, PlusCircle, LogOut } from 'lucide-react';

export function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    brand: 'Nike',
    model: 'Air Max Tn',
    silhouette: 'Low Top',
    price: '',
    image: '',
    tag: 'DISPONÍVEL',
    colors: '',
    description: ''
  });

  // Buscar produtos cadastrados ao abrir o painel
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      setProducts(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (editingId) {
      // ATUALIZAR PRODUTO EXISTENTE
      const { error } = await supabase
        .from('products')
        .update({
          name: formData.name,
          brand: formData.brand,
          model: formData.model,
          silhouette: formData.silhouette,
          price: parseFloat(formData.price),
          image: formData.image,
          tag: formData.tag,
          colors: formData.colors,
          description: formData.description,
        })
        .eq('id', editingId);

      setLoading(false);
      if (error) {
        alert('Erro ao atualizar: ' + error.message);
      } else {
        alert('Tênis atualizado com sucesso!');
        setEditingId(null);
        resetForm();
        fetchProducts();
      }
    } else {
      // CADASTRAR NOVO PRODUTO
      const { error } = await supabase.from('products').insert([
        {
          name: formData.name,
          brand: formData.brand,
          model: formData.model,
          silhouette: formData.silhouette,
          price: parseFloat(formData.price),
          image: formData.image, // Aceita link direto (ex: https://... ou /assets/img/...)
          tag: formData.tag,
          colors: formData.colors,
          description: formData.description,
          sizes: [38, 39, 40, 41, 42, 43]
        }
      ]);

      setLoading(false);
      if (error) {
        alert('Erro ao cadastrar: ' + error.message);
      } else {
        alert('Tênis cadastrado com sucesso!');
        resetForm();
        fetchProducts();
      }
    }
  };

  const handleEdit = (product: any) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      brand: product.brand,
      model: product.model,
      silhouette: product.silhouette,
      price: product.price,
      image: product.image,
      tag: product.tag,
      colors: product.colors,
      description: product.description,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja remover este tênis do catálogo?')) {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) {
        alert('Erro ao deletar: ' + error.message);
      } else {
        fetchProducts();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      brand: 'Nike',
      model: 'Air Max Tn',
      silhouette: 'Low Top',
      price: '',
      image: '',
      tag: 'DISPONÍVEL',
      colors: '',
      description: ''
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-10 font-sans">
      
      {/* CABEÇALHO DO PAINEL */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Painel ADM - Litoral Raro</h2>
          <p className="text-sm text-gray-500 mt-1">Gerencie os sneakers do catálogo em tempo real.</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </div>
      
      {/* FORMULÁRIO DE CADASTRO / EDIÇÃO */}
      <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">
            {editingId ? '✏️ Editando Tênis' : '✨ Adicionar Novo Tênis'}
          </h3>
          {editingId && (
            <button 
              type="button" 
              onClick={resetForm} 
              className="text-xs text-red-600 underline font-medium hover:text-red-800"
            >
              Cancelar Edição
            </button>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Nome do Tênis</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 border bg-white focus:ring-black focus:border-black"
            placeholder="Ex: Nike Air Max Plus Tn 'Dragon'"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Preço (R$)</label>
            <input 
              type="number" 
              step="0.01"
              required
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 border bg-white"
              placeholder="329.90"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Cores</label>
            <input 
              type="text" 
              required
              value={formData.colors}
              onChange={(e) => setFormData({...formData, colors: e.target.value})}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 border bg-white"
              placeholder="Red/Black/Yellow"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Link ou Caminho da Imagem</label>
          <input 
            type="text" 
            required
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 border bg-white"
            placeholder="Cole o link direto da imagem ou /assets/img/foto.jpg"
          />
          <p className="text-xs text-gray-500 mt-1">💡 Dica: Você pode colar um link direto de imagem da internet ou o caminho local da pasta assets.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">Descrição</label>
          <textarea 
            rows={3}
            required
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-3 border bg-white"
            placeholder="Detalhes sobre o amortecimento, estilo e materiais..."
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition font-bold tracking-wide disabled:opacity-50 shadow-md"
        >
          <PlusCircle className="h-5 w-5" />
          {loading ? 'Salvando na Nuvem...' : (editingId ? 'Atualizar Tênis' : 'Salvar Novo Tênis')}
        </button>
      </form>

      {/* LISTAGEM DE PRODUTOS CADASTRADOS (PARA EDITAR OU EXCLUIR) */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Tênis Cadastrados no Banco ({products.length})</h3>
        
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-sm transition">
              <div className="flex items-center gap-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-14 h-14 object-cover rounded-lg border bg-white"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/150'; }} 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{product.name}</h4>
                  <p className="text-xs text-gray-500">R$ {product.price} • {product.colors}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleEdit(product)}
                  className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                  title="Editar"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                  title="Excluir"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <p className="text-center py-8 text-gray-400 text-sm">Nenhum tênis cadastrado na nuvem ainda.</p>
          )}
        </div>
      </div>

    </div>
  );
}