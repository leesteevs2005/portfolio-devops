# Portfólio DevOps - Leandro E. Souza

Um portfólio profissional moderno e responsivo desenvolvido com **React 19**, **Vite**, **TailwindCSS 4** e **TypeScript**. Projetado especificamente para candidatos na área de **Infraestrutura e DevOps Júnior**.

## 🎯 Características Principais

- **Design Moderno**: Tema dark mode com gradientes azul/roxo tecnológicos
- **Responsivo**: Mobile-first, otimizado para todos os dispositivos
- **Animações Suaves**: Transições elegantes e efeitos ao scroll
- **Componentes Reutilizáveis**: Arquitetura limpa e escalável
- **Performance**: Build otimizado com Vite
- **Acessibilidade**: Semântica HTML correta e navegação intuitiva
- **Pronto para Deploy**: Configurado para Vercel, Netlify ou qualquer host estático

## 📋 Seções do Portfólio

### 1. **Navbar Fixa**
- Navegação responsiva com menu mobile
- Scroll suave para cada seção
- Logo com identidade visual

### 2. **Hero Section**
- Apresentação profissional com impacto visual
- Visualização tipo terminal com informações técnicas
- Chamadas para ação (CTAs) destacadas
- Links para redes sociais

### 3. **Sobre**
- Descrição profissional e pessoal
- Cards com destaques de competências
- Estatísticas de experiência

### 4. **Skills**
- Grid de competências técnicas organizadas por categoria
- Ícones e badges de tecnologias
- Barras de proficiência interativas

### 5. **Experiência**
- Timeline vertical de experiências profissionais
- Detalhes de responsabilidades e conquistas
- Período, localização e descrição de cada posição

### 6. **Projetos**
- Cards modernos com gradientes
- Tecnologias utilizadas em cada projeto
- Links para GitHub e demos
- Descrição de features principais

### 7. **Contato**
- Formulário de contato funcional
- Informações de contato diretas
- Links para redes sociais
- Feedback visual de envio

### 8. **Footer**
- Links rápidos para navegação
- Redes sociais
- Botão scroll to top
- Informações de copyright

## 🚀 Como Instalar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Passos de Instalação

1. **Clone o repositório** (ou baixe os arquivos)
```bash
git clone https://github.com/seu-usuario/portfolio-devops.git
cd portfolio-devops
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
pnpm dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 💻 Como Rodar Localmente

### Desenvolvimento
```bash
npm run dev
```
O servidor iniciará em `http://localhost:5173` com hot reload automático.

### Build para Produção
```bash
npm run build
```
Gera a pasta `dist/` com os arquivos otimizados.

### Preview do Build
```bash
npm run preview
```
Visualiza o build de produção localmente.

### Verificação TypeScript
```bash
npm run check
```
Valida tipos TypeScript sem compilar.

### Formatação de Código
```bash
npm run format
```
Formata o código com Prettier.

## 📦 Estrutura do Projeto

```
portfolio-devops/
├── client/
│   ├── public/                 # Arquivos estáticos
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navegação fixa
│   │   │   ├── Hero.tsx        # Seção inicial
│   │   │   ├── About.tsx       # Sobre profissional
│   │   │   ├── Skills.tsx      # Competências técnicas
│   │   │   ├── Experience.tsx  # Experiência profissional
│   │   │   ├── Projects.tsx    # Projetos em destaque
│   │   │   ├── Contact.tsx     # Formulário de contato
│   │   │   ├── Footer.tsx      # Rodapé
│   │   │   └── ui/             # Componentes shadcn/ui
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx # Contexto de tema
│   │   ├── App.tsx             # Componente principal
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Estilos globais
│   └── index.html              # HTML principal
├── package.json                # Dependências
├── vite.config.ts              # Configuração Vite
├── tsconfig.json               # Configuração TypeScript
├── tailwind.config.ts          # Configuração TailwindCSS
└── README.md                   # Este arquivo
```

## 🎨 Design e Customização

### Cores Personalizadas
As cores estão definidas em `client/src/index.css` usando CSS variables. Para customizar:

1. Edite as cores em `:root` (light mode) e `.dark` (dark mode)
2. As cores principais são:
   - `--primary`: Azul elétrico (#00d9ff)
   - `--secondary`: Roxo vibrante (#7c3aed)
   - `--background`: Preto profundo (#0a0e27)

### Tipografia
- **Títulos**: Courier Prime (monospace, 700)
- **Corpo**: Inter (sans-serif, 400-700)
- Importadas do Google Fonts em `client/index.html`

### Animações
Animações customizadas disponíveis em `client/src/index.css`:
- `animate-fadeInUp`: Fade in com slide up
- `animate-fadeInLeft`: Fade in da esquerda
- `animate-fadeInRight`: Fade in da direita
- `animate-gradientShift`: Gradiente animado
- `animate-glow`: Efeito de brilho

## 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19.2.1 | Framework UI |
| Vite | 7.1.7 | Build tool e dev server |
| TailwindCSS | 4.1.14 | Estilização |
| TypeScript | 5.6.3 | Type safety |
| Lucide React | 0.453.0 | Ícones |
| Framer Motion | 12.23.22 | Animações |
| shadcn/ui | - | Componentes UI |

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático via Git

1. **Faça push do código para GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Acesse [vercel.com](https://vercel.com)**
3. **Clique em "New Project"**
4. **Selecione seu repositório GitHub**
5. **Configure as variáveis de ambiente** (se necessário)
6. **Clique em "Deploy"**

### Opção 2: Deploy via CLI

1. **Instale o Vercel CLI**
```bash
npm install -g vercel
```

2. **Faça login**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Siga as instruções do CLI**

### Opção 3: Deploy Manual

1. **Gere o build**
```bash
npm run build
```

2. **Faça upload da pasta `dist/` para a Vercel**
   - Arraste e solte a pasta no dashboard da Vercel
   - Ou use o CLI: `vercel --prod`

### Configuração de Domínio Personalizado

1. No dashboard da Vercel, vá para **Settings > Domains**
2. Clique em **Add Domain**
3. Digite seu domínio
4. Siga as instruções para configurar DNS

## 📝 Personalizando o Conteúdo

### Editar Informações Pessoais

1. **Navbar** (`client/src/components/Navbar.tsx`)
   - Altere "Leandro Souza" para seu nome

2. **Hero** (`client/src/components/Hero.tsx`)
   - Atualize título, descrição e links sociais

3. **About** (`client/src/components/About.tsx`)
   - Modifique a descrição profissional

4. **Skills** (`client/src/components/Skills.tsx`)
   - Adicione/remova competências técnicas

5. **Experience** (`client/src/components/Experience.tsx`)
   - Atualize experiências profissionais

6. **Projects** (`client/src/components/Projects.tsx`)
   - Adicione seus projetos reais

7. **Contact** (`client/src/components/Contact.tsx`)
   - Atualize email, telefone e localização

## 🔐 Variáveis de Ambiente

Se precisar de variáveis de ambiente, crie um arquivo `.env.local`:

```
VITE_GITHUB_URL=https://github.com/seu-usuario
VITE_LINKEDIN_URL=https://linkedin.com/in/seu-perfil
VITE_EMAIL=seu@email.com
```

Acesse no código com: `import.meta.env.VITE_GITHUB_URL`

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos os componentes foram testados em múltiplos tamanhos de tela.

## ♿ Acessibilidade

- Semântica HTML correta
- Contraste adequado de cores
- Navegação por teclado
- ARIA labels onde necessário
- Links com descrições claras

## 🐛 Troubleshooting

### Porta 5173 já está em uso
```bash
# Use uma porta diferente
npm run dev -- --port 3000
```

### Erro de módulos não encontrados
```bash
# Limpe node_modules e reinstale
rm -rf node_modules
npm install
```

### Build falha
```bash
# Verifique erros TypeScript
npm run check

# Limpe cache do Vite
rm -rf .vite
npm run build
```

## 📚 Recursos Úteis

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)
- [Documentação TailwindCSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins pessoais e profissionais.

## 🤝 Contribuições

Sinta-se livre para fazer fork, melhorar e compartilhar!

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação das tecnologias utilizadas
2. Consulte os comentários no código
3. Abra uma issue no GitHub

---

**Desenvolvido com ❤️ para candidatos em Infraestrutura e DevOps**

Última atualização: Fevereiro 2026
