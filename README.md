# Portfolio React - David Johnson

Um portfólio interativo inspirado no design chat, construído com React, TypeScript, Tailwind CSS e Vite.

## Funcionalidades

- **Interface Home**: Tela inicial com apresentação pessoal, estatísticas e navegação
- **Chat Overlay**: Ao clicar em uma seção, abre um chat estilo conversa com o conteúdo
- **Navegação Intuitiva**: Botões de navegação na home e no footer do chat
- **Troca de Seções**: Ao selecionar outra opção, o chat é limpo e começa do zero
- **Fechamento do Chat**: Clique fora do chat ou no botão X para fechar e voltar à home
- **Design Responsivo**: Funciona em desktop e mobile
- **Dark Mode**: Suporte a tema claro e escuro

## Estrutura do Projeto

```
src/
├── components/
│   ├── HomePage.tsx      # Página inicial com apresentação
│   ├── ChatOverlay.tsx   # Overlay de chat interativo
│   ├── NavButtons.tsx    # Botões de navegação
│   └── index.ts          # Exportações dos componentes
├── data/
│   └── content.ts        # Dados e conteúdo das seções
├── routes.tsx            # Configuração de rotas
├── main.tsx             # Entry point
└── index.css            # Estilos globais

public/
└── img/                 # Imagens do portfólio
```

## Como Usar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra `http://localhost:5173` no navegador

## Seções Disponíveis

- **About**: Informações pessoais e estatísticas
- **Skills**: Tecnologias e competências
- **Projects**: Projetos com imagens e descrições
- **Clients**: Empresas e marcas trabalhadas
- **Contact**: Informações de contato e redes sociais

## Tecnologias

- React 19
- TypeScript
- Tailwind CSS 4
- React Router 7
- Vite 8

## Personalização

Edite o arquivo `src/data/content.ts` para alterar:

- Informações pessoais
- Projetos
- Habilidades
- Contato
- Conteúdo das seções

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
