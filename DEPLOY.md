# 🌐 Guia de Deploy - Vercel

## Deploy Rápido (5 minutos)

### 1. Obter API Key do Hugging Face (Opcional)

**IMPORTANTE:** A API funciona sem chave! Mas criar uma aumenta os limites.

1. Acesse: https://huggingface.co
2. Crie conta gratuita
3. Vá em **Settings** → **Access Tokens**
4. Clique em **New token**
5. Dê um nome e selecione **Read**
6. Copie o token

### 2. Deploy no Vercel

#### Via GitHub (Recomendado):

1. **Push para GitHub:**
```bash
git add .
git commit -m "Adicionar integração com Hugging Face AI"
git push origin main
```

2. **No Vercel:**
   - Acesse https://vercel.com
   - Clique em **Add New Project**
   - Conecte seu repositório GitHub
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: ./
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Clique em **Deploy**

3. **Configurar Variável de Ambiente (Opcional):**
   - No projeto do Vercel → **Settings** → **Environment Variables**
   - Adicione:
     - **Name**: `HUGGINGFACE_API_KEY`
     - **Value**: (cole seu token - opcional)
     - **Environments**: Todas (Production, Preview, Development)
   - Salve

4. **Redeploy (se adicionou a variável):**
   - Vá em **Deployments**
   - Clique nos 3 pontos do último deploy
   - **Redeploy**

#### Via CLI:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Quando perguntar:
# - Link to existing project? → No
# - Project name? → (escolha um nome)
# - Directory? → ./
# - Override settings? → No
```

Depois, configure a variável `HUGGINGFACE_API_KEY` no dashboard do Vercel (opcional).

### 3. Pronto! 🎉

Seu site estará no ar em: `https://seu-projeto.vercel.app`

## ⚙️ Configuração Local (Opcional)

Para testar localmente com a API:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Criar arquivo .env (opcional)
echo "HUGGINGFACE_API_KEY=sua_chave_aqui" > .env

# Rodar com API funcionando
vercel dev
```

**Nota:** A API funciona sem o .env, mas com limites menores.

## 🔍 Verificar se Está Funcionando

1. Acesse seu site no Vercel
2. Crie um personagem
3. Faça algumas escolhas
4. Se aparecer "A IA está criando sua próxima aventura...", está funcionando! ✅

**Nota:** A primeira requisição pode demorar 10-30 segundos (cold start do modelo).

## 🐛 Problemas Comuns

**Erro: "Modelo está carregando"**
- Normal na primeira requisição
- Aguarde 10-30 segundos e tente novamente
- O modelo precisa "acordar" (cold start)

**API não responde**
- Verifique os logs no Vercel (Deployments → Logs)
- Pode ser cold start do modelo (aguarde)
- Verifique se não há erros no console do navegador

**Histórias não são geradas**
- Abra o console do navegador (F12)
- Veja se há erros de rede
- Verifique os logs do Vercel
- Pode ser que o modelo esteja carregando (normal na primeira vez)

**Limites de requisição**
- Sem API key: ~30 requisições/hora (ainda generoso!)
- Com API key: limites muito maiores
- Crie uma conta gratuita para aumentar limites

## 💡 Dicas

- A primeira requisição sempre demora mais (cold start)
- Requisições subsequentes são mais rápidas
- Considere criar uma API key para aumentar limites
- O modelo usado é gratuito e open-source (Meta Llama 3)
