# Bloglist Application

Aplicación full-stack para la gestión de blogs con autenticación de usuarios.  
Permite crear, listar, comentar y eliminar blogs, además de visualizar usuarios y sus publicaciones.

El proyecto está dividido en **frontend** y **backend**, comunicados mediante una API REST.

---

## Funcionalidades

### Autenticación
- Login de usuarios con username y password
- Autenticación basada en JSON Web Tokens (JWT)
- Persistencia de sesión usando localStorage

### Blogs
- Listado de blogs
- Creación de nuevos blogs
- Likes en blogs
- Comentarios
- Eliminación de blogs (solo por el usuario creador)

### Usuarios
- Listado de usuarios
- Vista individual de usuario
- Visualización de blogs creados por cada usuario

### Interfaz
- Single Page Application (SPA)
- Navegación con React Router
- Estado global manejado con Redux
- Estilo dark moderno con glassmorphism
- Acceso a rutas protegido según autenticación

---

## Tecnologías

### Frontend
- React 18
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Bootstrap / React Bootstrap
- Vitest
- Testing Library
- ESLint / Prettier

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- CORS
- express-async-errors
- Supertest

---

## Estructura del proyecto

```
bloglist/
├── bloglist-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── reducers/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── blog-backend/
│   ├── controllers/
│   ├── models/
│   ├── utils/
│   ├── index.js
│   └── package.json
```

---

## Instalación y ejecución

### Backend

```bash
cd blog-backend
npm install
```

Crear un archivo `.env` con las siguientes variables:

```env
MONGODB_URI=your_mongodb_uri
TEST_MONGODB_URI=your_test_mongodb_uri
SECRET=your_jwt_secret
PORT=3001
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

### Frontend

```bash
cd bloglist-frontend
npm install
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## Scripts

### Frontend
- `npm run dev`
- `npm run build`
- `npm run test`
- `npm run lint`
- `npm run format`

### Backend
- `npm run dev`
- `npm start`
- `npm test`
- `npm run format`

---

## Tests

- Frontend: Vitest + Testing Library
- Backend: Node test runner + Supertest

---

## Autor

Felipe Durini
