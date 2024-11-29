# 📋 **Liferay User Group Portal**

O portal centraliza conteúdos e funcionalidades dispersos, facilitando o acesso e a interação de organizadores e membros da comunidade Liferay User Group. A plataforma permite compartilhar conhecimento, participar de meetups e acessar conteúdos exclusivos de forma prática e eficiente.

---

## 🚀 **Funcionalidades Principais**

- Centralização de conteúdos e eventos;
- Criação e gerenciamento de meetups;
- Publicação de posts pela comunidade;
- Redirecionamento integrado para chat no Slack;

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend:**
- React.js (com TypeScript)
- CSS Modules / TailwindCSS
- Axios (para chamadas de API)
- React Router

### **Backend:**
- Mock de dados com API JSON (JSON Server)
- Firebase (para futuras evoluções)

### **Gerenciamento de Versão:**
- Git e GitHub (com GitFlow)

---

## 💻 **Passo a Passo de Implantação**

### **1. Clonar o Repositório**

Abra o terminal e clone o projeto:

```bash
git clone https://github.com/seu-usuario/liferay-portal.git
cd liferay-portal
```

---

### **2. Instalar Dependências**

No diretório raiz, instale as dependências do projeto:

```bash
npm install
```
*Ou, se estiver usando Yarn:*
```bash
yarn install
```

---

### **3. Configurar o Backend Mock (JSON Server)**

1. Instale o JSON Server globalmente (caso ainda não tenha):

   ```bash
   npm install -g json-server
   ```

2. Execute o servidor de mock de dados:

   ```bash
   json-server --watch db.json --port 3000
   ```

---

### **4. Executar o Frontend**

Inicie o servidor de desenvolvimento do React:

```bash
npm run dev
```
*Ou com Yarn:*
```bash
yarn dev
```

Acesse a aplicação no navegador:  
`http://localhost:****`

---

### 📲 **5. (Opcional) Executar em Ambiente Mobile**

Se desejar executar em um simulador:

1. Certifique-se de ter o ambiente React Native configurado (Android ou iOS).
2. Na pasta do projeto mobile:

   ```bash
   yarn android
   ```
   *Para iOS:*
   ```bash
   yarn ios
   ```

---

## 🤝 **Contribuindo com o Projeto**

1. Crie um fork do repositório.
2. Clone o fork em sua máquina local.
3. Crie uma nova branch para sua funcionalidade ou correção:

   ```bash
   git checkout -b feature/nome-da-feature
   ```

4. Após fazer as alterações, envie um Pull Request para a branch `develop` com título e descrição detalhados.

---
