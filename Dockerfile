# Usa una imagen base de Node.js
FROM node:18

# Crea un directorio de trabajo
WORKDIR /app

# Copia el package.json y el pnpm-lock.yaml al contenedor
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Instala pnpm y las dependencias
RUN npm install -g pnpm && pnpm install

# Copia el resto del código al contenedor
COPY . .

# Compila el proyecto
RUN pnpm run build

# Expone el puerto en el que la aplicación escuchará
EXPOSE 8080

# Define el comando para ejecutar la aplicación
CMD ["pnpm", "start"]
