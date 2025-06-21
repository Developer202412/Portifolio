# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```



 MERN Stack Portfolio

A full-stack portfolio application built with the MERN stack (MongoDB, Express.js, React, Node.js) showcasing backend-focused development expertise.

## 🚀 Features

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Query** for data fetching and caching
- **React Hot Toast** for notifications
- **Lucide React** for icons
- Responsive design with mobile-first approach
- Smooth scrolling navigation
- Interactive animations and micro-interactions

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** authentication
- **Rate limiting** and security middleware
- **Email service** with Nodemailer
- **Input validation** with express-validator
- **Error handling** middleware
- **CORS** configuration
- **Compression** and performance optimization

### Key Sections
- **Hero Section** - Professional introduction
- **About Section** - Backend-focused expertise showcase
- **Skills Section** - Technical skills with proficiency levels
- **Projects Section** - Portfolio projects with filtering
- **Contact Section** - Working contact form with backend integration

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Query
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Nodemailer
- Express Validator
- Helmet (Security)
- Morgan (Logging)
- Compression

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd mern-portfolio
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client
```

### 3. Environment Setup

#### Server Environment (.env)
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_jwt_key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=http://localhost:5173
```

#### Client Environment (.env)
```bash
cd client
cp .env.example .env
```

Edit `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
VITE_NODE_ENV=development
```

### 4. Database Setup

#### Start MongoDB
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
```

#### Seed Database (Optional)
```bash
cd server
node scripts/seedData.js
```

### 5. Start the Application

#### Development Mode (Both servers)
```bash
# From root directory
npm run dev
```

#### Or start separately
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

## 🌐 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/stats` - Get project statistics
- `GET /api/projects/:id` - Get single project

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `GET /api/contact/stats` - Get contact statistics

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/featured` - Get featured skills
- `GET /api/skills/stats` - Get skill statistics

### About
- `GET /api/about` - Get about information
- `GET /api/about/experience` - Get work experience
- `GET /api/about/education` - Get education
- `GET /api/about/achievements` - Get achievements

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/verify` - Verify JWT token

### Health Check
- `GET /api/health` - API health status

## 🔧 Configuration

### Rate Limiting
- Contact form: 3 requests per 15 minutes
- General API: 100 requests per 15 minutes
- Auth endpoints: 5 requests per 15 minutes

### Security Features
- Helmet for security headers
- CORS configuration
- Input validation and sanitization
- JWT token authentication
- Rate limiting
- Error handling middleware

### Email Configuration
The contact form sends emails using Nodemailer. Configure your email service:

1. **Gmail**: Use App Passwords
2. **SendGrid**: Use API key
3. **Other SMTP**: Configure host, port, and credentials

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
cd server
# Set environment variables
# Deploy with your preferred service
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use production MongoDB URI
- Configure email service
- Set secure JWT secret
- Update CORS origins

## 🧪 Testing

### Backend Tests
```bash
cd server
npm test
```

### API Testing
Use the provided health check endpoint:
```bash
curl http://localhost:5000/api/health
```

## 📊 Features Showcase

### Backend Expertise
- **Microservices Architecture**: Modular, scalable backend design
- **Database Optimization**: Efficient queries and indexing
- **API Security**: JWT, rate limiting, input validation
- **Real-time Features**: WebSocket support ready
- **Performance**: Caching, compression, optimization
- **Monitoring**: Logging, error tracking, health checks

### Frontend Excellence
- **Modern React**: Hooks, TypeScript, performance optimization
- **State Management**: React Query for server state
- **UI/UX**: Responsive design, animations, accessibility
- **Performance**: Code splitting, lazy loading, caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

**MERN Stack Developer**
- Email: nalyainocent619@gmail.com
- Phone: +255 769-693-881
- Location: Dar es Salaam, TZ
- GitHub: [Developer202412](https://github.com/Developer202412)

---

Built with ❤️ using the MERN stack, focusing on backend excellence and full-stack expertise.