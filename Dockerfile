# Imagem base oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta que a API usa
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
