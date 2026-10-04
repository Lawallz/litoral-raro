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

Com Node.js e npm instalados:

```bash
git clone https://github.com/Lawallz/litoral-raro.git
cd litoral-raro
npm ci
```

Crie um arquivo `.env` na raiz com os valores do seu projeto:

```dotenv
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O script utiliza a porta `3000`; confira o endereço efetivo informado no terminal.

## Comandos de verificação

| Comando | Finalidade |
| --- | --- |
| `npm run lint` | Checagem de tipos com TypeScript |
| `npm run build` | Gerar o frontend em `dist/` |
| `npm run preview` | Inspecionar o build localmente |

## Segurança e Cibersegurança (Supabase RLS)
 * **O projeto conta com blindagem nativa de banco de dados utilizando Row Level Security (RLS):**

* **Leitura Pública (SELECT): Aberta para que qualquer visitante navegue pelo catálogo em tempo real.**

* **Escrita e Modificação (INSERT, UPDATE, DELETE): Restringidas exclusivamente a administradores autenticados através de sessões seguras.**
