# Usa una imagen base de Node.js
FROM node:18

# Crea un directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Compila el proyecto
RUN npm run build

# Expone el puerto en el que la aplicación escuchará
EXPOSE 8080

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]
