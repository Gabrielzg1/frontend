# Use uma imagem base adequada
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho
COPY package*.json ./
COPY . ./

# Instala as dependências
RUN npm install

# Compila o aplicativo React
RUN npm run build

# Expõe a porta em que o aplicativo está sendo executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
