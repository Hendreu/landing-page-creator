# Radar da Nuvem - Landing Page

Projeto desenvolvido com React + TypeScript + Vite + Tailwind CSS + shadcn/ui.

## Como rodar

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Header com navegação
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial (redirect para /radar)
│   ├── RadarDaNuvem.tsx # Página principal do Radar
│   ├── EarlyAccess.tsx  # Página de Early Access
│   └── NotFound.tsx    # Página 404
├── lib/                # Utilitários e configurações
├── App.tsx             # Componente principal com rotas
└── main.tsx            # Ponto de entrada
```

## Conexão com N8N

### RadarDaNuvem (Formulário principal)

O formulário envia dados para um webhook do N8N.

**Arquivo:** `src/pages/RadarDaNuvem.tsx`

**Linha ~78:**
```typescript
await fetch('https://samax.app.n8n.cloud/webhook/formulario-radar', {
  method: 'POST',
  headers: { 'Content-Type': 'application/octet-stream' },
  body: blob
});
```

Para alterar a URL:
1. Abra o arquivo `src/pages/RadarDaNuvem.tsx`
2. Procure a URL do fetch
3. Substitua pela URL do seu webhook N8N

### EarlyAccess

O formulário de Early Access está configurado mas ainda não envia para N8N (apenas mostra mensagem de sucesso).

**Arquivo:** `src/pages/EarlyAccess.tsx`

Para implementar o envio:
1. Adicione a URL do webhook no `handleSubmit`
2. Envie os dados do `formData` ao exemplo do RadarDaNuvem

## Navegação e Links

O header contém links para seções da página RadarDaNuvem:

- **O que é o Radar?** → `#o-que-recebe`
- **Para quem é?** → `#para-quem`
- **FAQ** → `#faq`

As seções estão definidas no componente `MotionSection` com IDs correspondentes.

**Arquivo:** `src/components/Navbar.tsx`

### Adicionando novas páginas

1. Crie o componente em `src/pages/`
2. Adicione a rota em `src/App.tsx`:

```tsx
import NomeDaPagina from "./pages/NomeDaPagina";

<Route path="/nova-rota" element={<NomeDaPagina />} />
```

## Deploy

Para fazer deploy, basta rodar:

```sh
npm run build
```

A pasta `dist/` será criada com os arquivos estáticos. Você pode hospedar em qualquer serviço de hosting estático (Vercel, Netlify, AWS S3, etc).

## Personalização de Cores

As cores principais estão definidas em `src/index.css`:

```css
--brand-purple: 270 70% 35%;    /* Roxo principal */
--primary: 270 70% 35%;         /* Cor primária */
--accent: 270 70% 35%;          /* Cor de acento */
```

Para alterar, modifique os valores HSL nas variáveis CSS.
