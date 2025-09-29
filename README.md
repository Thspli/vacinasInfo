# VacinasInfo - Site Informativo sobre Vacinas

Um site profissional e responsivo desenvolvido em Next.js com TypeScript para informar sobre a importância das vacinas e combater a desinformação.

## 🚀 Características

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ ESLint configurado
- ✅ CSS Modules (sem Tailwind)
- ✅ Estrutura com src directory
- ✅ 4 páginas completas com conteúdo
- ✅ Animações CSS suaves
- ✅ Design responsivo
- ✅ Navegação sticky
- ✅ Formulário de contato interativo

## 📁 Estrutura do Projeto

```
vacinas-info/
├── src/
│   ├── app/
│   │   ├── contato/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── importancia/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── mitos/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── components/
│       ├── Footer.tsx
│       ├── Footer.module.css
│       ├── Navigation.tsx
│       └── Navigation.module.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Páginas

### 1. **Início (/)** 
- Hero section com gradiente animado
- Estatísticas sobre vacinas
- Cards informativos com animações
- Call-to-action

### 2. **Importância (/importancia)**
- Explicação detalhada sobre como vacinas funcionam
- Processo de imunização ilustrado
- Impacto global das vacinas
- Lista de doenças controladas
- Informações sobre segurança

### 3. **Mitos e Verdades (/mitos)**
- 10 mitos desmentidos com evidências científicas
- Sistema de filtros por categoria
- Design visual que diferencia mitos de verdades
- Fontes confiáveis listadas

### 4. **Contato (/contato)**
- Formulário funcional com validação
- Informações de contato úteis
- Telefones de emergência
- FAQ com perguntas frequentes

## 🛠️ Instalação

1. **Clone ou crie o projeto:**

```bash
npx create-next-app@latest vacinas-info --typescript --eslint --no-tailwind --src-dir --app --no-turbopack
cd vacinas-info
```

2. **Copie todos os arquivos fornecidos para suas respectivas pastas**

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto em desenvolvimento:**

```bash
npm run dev
```

5. **Abra no navegador:**

```
http://localhost:3000
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o ESLint

## 🎨 Características Visuais

### Animações
- Fade in/out
- Slide in (esquerda e direita)
- Scale in
- Hover effects
- Transições suaves

### Cores
- Primary: #2563eb (Azul)
- Secondary: #10b981 (Verde)
- Danger: #ef4444 (Vermelho)
- Gradientes modernos

### Responsividade
- Mobile-first design
- Breakpoints para tablet e desktop
- Menu hamburger em dispositivos móveis
- Grid adaptativo

## 📚 Conteúdo

O site aborda:
- História e importância das vacinas
- Como o sistema imunológico responde às vacinas
- Conceito de imunidade de rebanho
- Doenças erradicadas e controladas por vacinas
- Desmentir 10 mitos comuns sobre vacinas
- Fontes científicas confiáveis
- Informações de contato e emergência

## 🔒 Segurança

- Nenhum dado é enviado para servidores externos
- Formulário de contato é simulado (não envia emails reais)
- Validação de formulários no cliente
- Links externos desabilitados por segurança

## 🌐 Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 📝 Licença

Este é um projeto educacional e informativo. Todo conteúdo é baseado em fontes científicas confiáveis.

## 🤝 Contribuindo

Este projeto foi criado para fins educacionais. Sinta-se livre para adaptá-lo às suas necessidades.

## ⚠️ Aviso Importante

Este site tem caráter informativo e educacional. Para orientações específicas sobre vacinação, sempre consulte um profissional de saúde qualificado ou as autoridades sanitárias locais.

---

Desenvolvido com ❤️ usando Next.js e TypeScript# vacinasInfo
