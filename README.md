# 🔐 PassBuddy

<div align="center">

![PassBuddy Logo](https://img.shields.io/badge/🔐-PassBuddy-4F46E5?style=for-the-badge&labelColor=1F2937)

**Your Personal Password Manager - Secure, Smart, Simple**

[![Deployment Status](https://img.shields.io/badge/Status-Live%20%26%20Working-00D084?style=for-the-badge)](https://your-vercel-url.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-MERN-FF6B6B?style=for-the-badge)](https://github.com/vanshbhatt/PassBuddy)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://your-vercel-url.vercel.app) • [📖 Documentation](#-documentation) • [🚀 Deploy](#-deployment) • [🐛 Report Bug](https://github.com/vanshbhatt/PassBuddy/issues)

</div>

---

## 🎯 Overview

PassBuddy is a modern, full-stack password manager designed to keep your credentials secure and easily accessible. Built with the latest web technologies and deployed on enterprise-grade cloud infrastructure.

### ✨ Key Highlights

- **🔒 Secure Storage** - Your passwords are safely stored in MongoDB Atlas
- **⚡ Lightning Fast** - Built with React + Vite for optimal performance
- **📱 Responsive Design** - Works seamlessly across all devices
- **🌐 Cloud Deployed** - Fully hosted on Vercel and Render
- **🎨 Modern UI** - Clean, intuitive interface with smooth animations

---

## 🚀 Features

<table>
  <tr>
    <td align="center" width="33%">
      <h3>🔐 Password Management</h3>
      <p>Save, update, and delete passwords for all your websites with enterprise-grade security</p>
    </td>
    <td align="center" width="33%">
      <h3>📋 One-Click Copy</h3>
      <p>Copy credentials to clipboard instantly with visual feedback and notifications</p>
    </td>
    <td align="center" width="33%">
      <h3>🌐 REST API</h3>
      <p>Robust backend API built with Express.js and thoroughly tested with Postman</p>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <h3>🎨 Beautiful UI</h3>
      <p>Responsive design with TailwindCSS and smooth Lordicon animations</p>
    </td>
    <td align="center" width="33%">
      <h3>🔔 Smart Notifications</h3>
      <p>Real-time feedback with React Toastify for all user actions</p>
    </td>
    <td align="center" width="33%">
      <h3>☁️ Cloud Ready</h3>
      <p>Fully deployed on Vercel and Render with environment-based configuration</p>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

---

## 📦 Libraries & Tools

<details>
<summary><strong>Click to expand full tech stack</strong></summary>

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend Framework** | React 18 + Vite | Fast, modern development experience |
| **Styling** | TailwindCSS | Utility-first CSS framework |
| **Icons** | Lordicons | Animated icon library |
| **Notifications** | React Toastify | Beautiful toast notifications |
| **HTTP Client** | Fetch API | API communication |
| **ID Generation** | UUID v4 | Unique password identifiers |
| **Backend Framework** | Express.js | RESTful API server |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL database |
| **Database Client** | MongoDB Compass | Database management (optional) |
| **API Testing** | Postman | Endpoint testing and validation |
| **Deployment** | Vercel + Render | Frontend and backend hosting |

</details>

---

## 📁 Project Structure

```
PassBuddy/
├── 📂 backend/
│   ├── 📄 server.js              # Express server & API routes
│   ├── 📄 .env                   # Environment variables (hidden)
│   └── 📄 package.json           # Backend dependencies
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📄 Manager.jsx        # Main password manager component
│   │   ├── 📄 App.jsx            # Root application component
│   │   └── 📄 main.jsx           # Application entry point
│   ├── 📂 public/
│   │   └── 📄 index.html         # HTML template
│   ├── 📄 .env                   # Frontend environment variables
│   ├── 📄 package.json           # Frontend dependencies
│   └── 📄 tailwind.config.js     # TailwindCSS configuration
│
├── 📄 README.md                  # Project documentation
└── 📄 .gitignore                 # Git ignore rules
```

---

## 🔧 Environment Configuration

<details>
<summary><strong>Environment Variables Setup</strong></summary>

### Frontend Environment (`.env`)
```env
# Backend API URL
VITE_BACKEND_URL=https://your-backend-name.onrender.com

# Optional: Enable development mode
VITE_DEV_MODE=false
```

### Backend Environment (`.env`)
```env
# MongoDB Atlas Connection
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/passbuddy

# Server Configuration
PORT=5000
NODE_ENV=production

# CORS Configuration
FRONTEND_URL=https://your-frontend-name.vercel.app
```

**⚠️ Security Note**: Never commit `.env` files to version control. Add them to `.gitignore`.

</details>

---

## 🚀 Deployment Guide

<details>
<summary><strong>Frontend Deployment (Vercel)</strong></summary>

### Step 1: Prepare Your Repository
1. Push your code to GitHub
2. Ensure `frontend/` contains your React app

### Step 2: Vercel Setup
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project" and import your repository
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Environment Variables
Add in Vercel dashboard:
```
VITE_BACKEND_URL = https://your-backend-name.onrender.com
```

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

</details>

<details>
<summary><strong>Backend Deployment (Render)</strong></summary>

### Step 1: Render Setup
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository

### Step 2: Configuration
```yaml
Name: passbuddy-backend
Environment: Node
Build Command: npm install
Start Command: node server.js
```

### Step 3: Environment Variables
Add in Render dashboard:
```
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/passbuddy
PORT = 5000
```

### Step 4: MongoDB Atlas Network Access
1. Go to MongoDB Atlas → Network Access
2. Add IP Address: `0.0.0.0/0` (Allow from anywhere)

</details>

---

## 🔍 API Documentation

<details>
<summary><strong>Available Endpoints</strong></summary>

### Base URL
```
https://your-backend-name.onrender.com
```

### Endpoints

#### GET `/`
Fetch all saved passwords
```json
Response: [
  {
    "id": "uuid-string",
    "site": "example.com",
    "username": "user@example.com",
    "password": "encrypted-password"
  }
]
```

#### POST `/`
Add a new password
```json
Request Body: {
  "site": "example.com",
  "username": "user@example.com",
  "password": "user-password"
}
```

#### DELETE `/`
Delete an existing password
```json
Request Body: {
  "id": "uuid-string"
}
```

### Testing with Postman
1. Import the collection from `/docs/postman-collection.json`
2. Set environment variable `base_url` to your backend URL
3. Run the test suite

</details>

---

## 🎨 Screenshots

<div align="center">

### Dashboard Overview
![Dashboard](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=PassBuddy+Dashboard)

### Add New Password
![Add Password](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Add+New+Password)

### Password Management
![Manage Passwords](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Manage+Passwords)

</div>

---

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account
- Git installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vanshbhatt/PassBuddy.git
   cd PassBuddy
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Add your MongoDB URI
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env  # Add your backend URL
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

---

## 📈 Roadmap

- [ ] **Multi-user Support** - User authentication system
- [ ] **Password Generator** - Built-in secure password generation
- [ ] **Import/Export** - Backup and restore functionality
- [ ] **Browser Extension** - Chrome/Firefox extension
- [ ] **Mobile App** - React Native mobile application
- [ ] **2FA Integration** - Two-factor authentication support

---

## 🛡️ Security

PassBuddy takes security seriously:

- **Encrypted Storage** - All passwords are securely stored in MongoDB Atlas
- **HTTPS Only** - All communication is encrypted in transit
- **Environment Variables** - Sensitive data is never hardcoded
- **CORS Protection** - Configured to prevent unauthorized access
- **Input Validation** - All inputs are sanitized and validated

### Reporting Security Issues
If you discover a security vulnerability, please email security@vanshbhatt.com instead of using the public issue tracker.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for seamless frontend deployment
- **Render** for reliable backend hosting
- **MongoDB** for robust database solutions
- **TailwindCSS** for beautiful styling utilities

---

<div align="center">

## 👨‍💻 Author

**Vansh Bhatt**

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://vanshbhatt.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/vanshbhatt)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vanshbhatt)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@vanshbhatt.com)

---

**Made with 💜 and lots of ☕**

If you found this project helpful, please consider giving it a ⭐ star on GitHub!

---

### 📥 Download Instructions
1. **Right-click** on this artifact
2. **Select "Save as..."** or "Download"
3. **Save as** `README.md` in your project root
4. **Replace** your existing README.md file
5. **Customize** the links and screenshots as needed

[⬆️ Back to Top](#-passbuddy)

</div>
