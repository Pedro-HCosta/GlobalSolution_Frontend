# 🛰️ GS_FRONT — Sistema Corporativo de Bem-Estar e Saúde Mental com IA

Frontend desenvolvido em **React + TypeScript + Vite**, projetado para integrar com o backend em **Quarkus (Java)**.  
O sistema permite **Check-in diário do colaborador**, com foco em **Predição de burnout com IA + cultura organizacional baseada em dados.**.

---

## 🚀 Tecnologias Principais

- **React 18**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **React Router DOM**

---

## 📁 Estrutura do Projeto

```
src/
 ├── components/       → Componentes reutilizáveis (Navbar, Footer, etc.)
 ├── context/          → Contexto global de autenticação (AuthContext)
 ├── hooks/            → Hooks personalizados (useAuth, useAppointments)
 ├── pages/            → Páginas principais (Login, Signup, Dashboard, etc.)
 ├── routes/           → Gerenciamento de rotas da aplicação
 ├── services/         → Conexão com a API (api.ts usando Fetch)
 ├── types/            → Tipagens typescript
 ├── App.tsx           → Componente raiz
 ├── main.tsx          → Ponto de entrada React
 └── index.css         → Estilos globais com Tailwind
```

---

### 1. Instalar dependências

npm install


### 2. Executar o servidor de desenvolvimento

npm run dev

---

## 🧩 Configuração de API

O projeto usa **Fetch API** para se comunicar com o backend.  
A URL base da API pode ser configurada no arquivo:

```
src/services/api.ts
```


## 🧪 Requisitos

- Node.js **v18+**
- npm **v9+**

---

## 👥 Equipe
 
**Integrantes:**
- Pedro Henrique dos Santos Costa — RM562156 — 1TDPSI  
- Rafael Rodrigues Trindade Paes — RM564303 — 1TDSPJ  
- Michael Vinicius Silva de Oliveira — RM565840 — 1TDSA 

---
