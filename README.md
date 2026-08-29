# Litoral Raro — E-commerce & Curadoria de Sneakers

E-commerce/Webstore de curadoria de sneakers raros e edições limitadas. Desenvolvido em **React**, **TypeScript**, **Vite** e **Tailwind CSS**, trazendo uma interface minimalista com foco em alta performance, arquitetura em nuvem e experiência de compra premium.

<p align="center">
  <a href="https://ai.studio/apps/41895d2c-0172-4954-a291-6ff95d0b721a" target="_blank">
    <img width="1600" height="900" alt="Litoral Raro Preview" src="https://github.com/user-attachments/assets/95825065-b409-400e-999a-bb09d2b469b9">
  </a>
</p>

---

## Arquitetura & Stack Tecnológica

* **01 / WEB APP - Litoral Raro**
  * **O que é:** Site responsivo para e-commerce e cotações de tênis exclusivos.
  * **Techs:** `React` `TypeScript` `Vite` `Tailwind CSS`
  * **Funcionalidades:** Catálogo dinâmico, filtros avançados por marcas e modelos, carrinho/sacola persistente com `localStorage` e integração direta com o backend em nuvem.

* **02 / API & BACKEND (Supabase & Cloud Architecture)**
  * **O que é:** Arquitetura de Backend em nuvem utilizando **Supabase (BaaS)** para gestão de dados relacionais, regras de segurança e autenticação.
  * **Techs:** `Supabase` `PostgreSQL` `Row Level Security (RLS)` `SQL`
  * **Funcionalidades:** Autenticação segura de administradores (`Supabase Auth`), banco de dados relacional em tempo real, políticas de segurança restritivas e painel CRUD completo integrado ao frontend.

---

## Como Rodar Localmente

**Prerequisites:** Node.js instalado na máquina.

1. **Clone o repositório e instale as dependências:**
   ```bash
   npm install

2. **Configure as Variáveis de Ambiente:

Crie um arquivo .env na raiz do projeto baseando-se nas suas credenciais do Supabase:

VITE_SUPABASE_URL=[https://seu-projeto.supabase.co](https://seu-projeto.supabase.co)
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica

3. **Execute o app em modo de desenvolvimento:

`npm run dev`

Segurança e Cibersegurança (Supabase RLS)
O projeto conta com blindagem nativa de banco de dados utilizando Row Level Security (RLS):

Leitura Pública (SELECT): Aberta para que qualquer visitante navegue pelo catálogo em tempo real.

Escrita e Modificação (INSERT, UPDATE, DELETE): Restringidas exclusivamente a administradores autenticados através de sessões seguras.
