# 🚀 Guia Rápido de Setup

## Passo a Passo para Deploy

### 1. Obter API Key do Hugging Face (Opcional - Recomendado)

**Nota:** A API funciona sem chave, mas criar uma aumenta os limites!

1. Acesse: https://huggingface.co
2. Crie uma conta (é gratuita)
3. Vá em **Settings** → **Access Tokens**
4. Clique em **New token**
5. Dê um nome (ex: "rpg-game")
6. Selecione **Read** como permissão
7. Copie o token gerado

### 2. Configurar Localmente (Desenvolvimento)

**Opcional:** Se quiser usar com API key:

```bash
# Criar arquivo .env na raiz do projeto
echo "HUGGINGFACE_API_KEY=sua_chave_aqui" > .env
```

**Importante:** Substitua `sua_chave_aqui` pela chave real que você copiou.

**Nota:** Se não criar o .env, a API ainda funcionará, mas com limites menores.

### 3. Instalar Dependências

```bash
npm install
```

### 4. Testar Localmente

```bash
# Para testar com a API funcionando, use Vercel CLI:
npm i -g vercel
vercel dev

# Ou apenas o frontend:
npm run dev
```

### 5. Deploy no Vercel

#### Opção A: Via CLI (Recomendado)

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Quando perguntar:
# - Link to existing project? → No
# - Project name? → (deixe padrão ou escolha)
# - Directory? → ./
# - Override settings? → No
```

#### Opção B: Via GitHub

1. Faça push do código para o GitHub
2. Acesse https://vercel.com
3. Clique em **Add New Project**
4. Conecte seu repositório GitHub
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em **Deploy**

### 6. Configurar Variável de Ambiente no Vercel (Opcional)

**Lembrete:** A API funciona sem chave! Mas se quiser aumentar limites:

1. No dashboard do Vercel, vá no seu projeto
2. **Settings** → **Environment Variables**
3. Adicione:
   - **Name**: `HUGGINGFACE_API_KEY`
   - **Value**: (cole seu token do Hugging Face)
   - **Environments**: Marque todas (Production, Preview, Development)
4. Clique em **Save**
5. **Deployments** → Selecione o último deploy → **Redeploy**

### 7. Pronto! 🎉

Seu site estará no ar! A URL será algo como:
`https://seu-projeto.vercel.app`

## ⚠️ Troubleshooting

### Erro: "Modelo está carregando"
- O modelo pode estar "dormindo" (cold start)
- Aguarde 10-30 segundos e tente novamente
- A primeira requisição sempre demora mais

### API não funciona localmente
- Use `vercel dev` para testar a API localmente
- Ou teste apenas o frontend com `npm run dev` (a IA só funcionará em produção)

### Histórias não estão sendo geradas
- Verifique os logs no Vercel (Deployments → Logs)
- Verifique o console do navegador para erros
- Pode ser que o modelo esteja carregando (aguarde e tente novamente)

### Limites de requisição
- Sem API key: ~30 requisições/hora
- Com API key: limites muito maiores
- Crie uma conta gratuita para aumentar limites

## 📚 Próximos Passos

- Personalize os prompts em `api/generate-story.ts`
- Adicione mais cenas pré-escritas em `src/story/storyData.ts`
- Customize os estilos em `src/styles/global.css`
- Considere criar uma API key do Hugging Face para aumentar limites
