
# 🔐 PassBuddy — Holding Passwords That Matter

![Status](https://img.shields.io/badge/Deployed-Fully%20Working-brightgreen?style=for-the-badge)  
A secure, sleek, and smart password manager built with **React**, **Express**, and **MongoDB Atlas**.

🌐 **Live Deployment**: [Vercel Deployment]((https://pass-buddy-1yum.vercel.app/))  

## ✨ Features

- 🔐 Save, update, and delete passwords for websites
- 📋 Copy credentials to clipboard with a single click
- 📦 REST API built with **Express.js** & tested using **Postman**
- 🎨 Responsive UI with **TailwindCSS** & **Lordicons**
- 🔔 Notifications powered by **React Toastify**
- 🔢 Unique password IDs generated using **UUID v4**
- ☁️ Full-stack cloud deployment via **Render** (backend) & **Vercel** (frontend)

## 🛠️ Tech Stack

| Frontend        | Backend         | Database       | Deployment     |
|-----------------|------------------|----------------|----------------|
| React + Vite    | Express.js       | MongoDB Atlas  | Vercel + Render |
| Tailwind CSS    | Body-Parser, CORS| MongoDB Compass (optional) | Env Variables |

## 🔧 Tools & Libraries Used

- [React Toastify](https://fkhadra.github.io/react-toastify/) – beautiful toast notifications  
- [UUID v4](https://www.npmjs.com/package/uuid) – to uniquely identify password entries  
- [Postman](https://www.postman.com/) – for testing and validating backend API endpoints  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) – secure cloud database  
- [Render](https://render.com) – server hosting  
- [Vercel](https://vercel.com) – frontend hosting

## 📁 Folder Structure

```
PassBuddy/
│
├── backend/
│   ├── server.js         # Express server logic
│   └── .env              # Contains MongoDB URI (hidden)
│
├── frontend/
│   ├── src/
│   │   └── Manager.jsx   # Main UI and CRUD logic
│   ├── .env              # Contains backend URL (hidden)
│   ├── index.html
│   └── package.json
```

## 🚀 Deployment Instructions

### Frontend (Vercel)
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

### Backend (Render)
- Start Command: `node server.js`
- Atlas > Network Access: Add IP `0.0.0.0/0`

## 🔍 API Testing

- All backend endpoints were tested using **Postman**
- Supported routes:
  - `GET /` – Fetch all passwords
  - `POST /` – Add new password
  - `DELETE /` – Delete existing password

## 📸 Screenshots 

- Desktop View:

<img width="1898" height="986" alt="PassBuddy Desktop" src="https://github.com/user-attachments/assets/1d456b99-dd7c-4997-8c15-ed7503d9a1d2" />

- Responsive View:

<img width="896" height="680" alt="PassBuddy Responsive" src="https://github.com/user-attachments/assets/dc0b2a10-1a3d-46e6-a3cf-4d8869d53b38" />

## Licence

- MIT Licence included
- Open for contributions, user can fork the repo and use it :)

## 🙌 Author

Made with 💜 by **Vansh Bhatt**  
⭐ Star the repo if you liked it and feel free to fork it!



