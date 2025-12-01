# 🚀 Guia Completo: Deploy no Vercel - Passo a Passo

## 📋 Pré-requisitos

1. ✅ Código commitado no Git (já fizemos isso!)
2. ✅ Conta no GitHub (se ainda não tiver, crie em https://github.com)
3. ✅ Conta no Vercel (vamos criar agora)

---

## 🎯 MÉTODO 1: Via GitHub (Mais Fácil - Recomendado)

### Passo 1: Fazer Push para o GitHub

Se você ainda não fez push do código:

```bash
# Verificar se tem um repositório remoto
git remote -v

# Se não tiver, adicione seu repositório GitHub:
# git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Fazer push
git push -u origin main
```

**OU** se você ainda não criou o repositório no GitHub:

1. Acesse https://github.com
2. Clique no **+** (canto superior direito) → **New repository**
3. Dê um nome (ex: `projeto-rpg-web`)
4. Deixe **público** ou **privado** (sua escolha)
5. **NÃO** marque "Add README" (já temos um)
6. Clique em **Create repository**
7. Depois, no terminal:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

### Passo 2: Criar Conta no Vercel

1. Acesse: **https://vercel.com**
2. Clique em **Sign Up** (canto superior direito)
3. Escolha **Continue with GitHub**
4. Autorize o Vercel a acessar seus repositórios
5. Pronto! Você está logado

### Passo 3: Conectar Repositório

1. No dashboard do Vercel, clique em **Add New Project** (ou **+ New Project**)
2. Você verá uma lista dos seus repositórios do GitHub
3. **Encontre seu repositório** (ex: `projeto-rpg-web`)
4. Clique em **Import** ao lado do repositório

### Passo 4: Configurar o Projeto

O Vercel vai detectar automaticamente que é um projeto Vite, mas vamos verificar:

1. **Framework Preset**: Deve estar como **Vite** (se não estiver, selecione)
2. **Root Directory**: Deixe como `./` (raiz)
3. **Build Command**: Deve estar como `npm run build` (verifique)
4. **Output Directory**: Deve estar como `dist` (verifique)
5. **Install Command**: Deixe como `npm install` (padrão)

### Passo 5: Variáveis de Ambiente (OPCIONAL)

**IMPORTANTE:** A API funciona sem isso! Mas se quiser aumentar limites:

1. Antes de fazer deploy, role a página para baixo
2. Encontre a seção **Environment Variables**
3. Clique em **Add** ou **Add Variable**
4. Adicione:
   - **Name**: `HUGGINGFACE_API_KEY`
   - **Value**: (cole seu token do Hugging Face - se tiver)
   - **Environments**: Marque todas (Production, Preview, Development)
5. Clique em **Add** ou **Save**

**Nota:** Se não tiver token do Hugging Face, pode pular este passo. A API funciona sem ele!

### Passo 6: Fazer Deploy

1. Clique no botão **Deploy** (grande, azul, no final da página)
2. Aguarde o processo (pode levar 1-3 minutos)
3. Você verá o progresso em tempo real

### Passo 7: Pronto! 🎉

Quando terminar, você verá:

- ✅ **Success!** 
- Um link tipo: `https://seu-projeto.vercel.app`
- Clique no link para ver seu site no ar!

---

## 🎯 MÉTODO 2: Via CLI do Vercel (Alternativa)

Se preferir usar o terminal:

### Passo 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Login

```bash
vercel login
```

Isso vai abrir o navegador para você fazer login.

### Passo 3: Deploy

No diretório do seu projeto:

```bash
vercel
```

O Vercel vai fazer perguntas:

1. **Set up and deploy?** → Digite `Y` (Yes)
2. **Which scope?** → Escolha sua conta/equipe
3. **Link to existing project?** → Digite `N` (No) - primeira vez
4. **What's your project's name?** → Digite um nome (ex: `projeto-rpg-web`) ou pressione Enter para usar o padrão
5. **In which directory is your code located?** → Digite `./` (raiz)
6. **Want to override the settings?** → Digite `N` (No)

Aguarde o deploy terminar!

### Passo 4: Configurar Variável de Ambiente (Opcional)

Se quiser adicionar a API key do Hugging Face:

1. Acesse https://vercel.com
2. Vá no seu projeto
3. **Settings** → **Environment Variables**
4. Adicione `HUGGINGFACE_API_KEY` (se tiver)

---

## 🔍 Verificar se Está Funcionando

1. Acesse o link do seu site (ex: `https://seu-projeto.vercel.app`)
2. Você deve ver a tela de criação de personagem
3. Crie um personagem
4. Faça algumas escolhas
5. Se aparecer "A IA está criando sua próxima aventura...", está funcionando! ✅

**Nota:** A primeira requisição pode demorar 10-30 segundos (o modelo precisa "acordar").

---

## 🐛 Problemas Comuns

### Erro: "Build failed"

**Solução:**
- Verifique os logs no Vercel (clique no deploy que falhou)
- Certifique-se de que `package.json` está correto
- Verifique se todas as dependências estão listadas

### Site não carrega

**Solução:**
- Aguarde alguns minutos (primeiro deploy pode demorar)
- Verifique se o build foi bem-sucedido
- Veja os logs no Vercel

### API não funciona

**Solução:**
- A API só funciona em produção (não funciona em `npm run dev` local)
- Verifique os logs no Vercel (Deployments → Logs)
- A primeira requisição pode demorar (cold start)

### "Modelo está carregando"

**Solução:**
- Normal na primeira requisição
- Aguarde 10-30 segundos
- Tente novamente

---

## 📝 Resumo Rápido (TL;DR)

1. ✅ Push para GitHub
2. ✅ Criar conta no Vercel (https://vercel.com)
3. ✅ Conectar repositório GitHub
4. ✅ Clicar em "Deploy"
5. ✅ Pronto! Site no ar!

**Variável de ambiente é OPCIONAL** - a API funciona sem ela!

---

## 🎉 Próximos Passos Após Deploy

- Compartilhe o link com amigos!
- Personalize os prompts em `api/generate-story.ts`
- Adicione mais cenas em `src/story/storyData.ts`
- Customize os estilos em `src/styles/global.css`

---

**Dúvidas?** Verifique os logs no Vercel ou me pergunte! 😊

