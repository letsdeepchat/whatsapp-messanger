# WhatsApp Clone
## 📸 Screenshots

**Single Screen View**

![Single Screen](https://github.com/user-attachments/assets/5947b86b-92b0-437d-a438-f67ecee3dcdd)

**Dual Screen View**

![Both Screens](https://github.com/user-attachments/assets/0ca9ccd4-d483-409b-b32b-fa218a74fdf2)


A real-time chat application built with **React**, **Node.js**, **Socket.IO**, and **MongoDB**, featuring **Google OAuth login**, **messaging**, and a **typing indicator**.

---

## 📁 Project Structure

```
whatsapp-clone/
├── client/           # React frontend
├── server/           # Node.js backend with MongoDB
├── socket/           # Socket.IO server for real-time features
└── README.md
```

---

## ✨ Features

* Google OAuth authentication
* Real-time messaging with Socket.IO
* Typing indicator
* File uploads
* MongoDB for persistent storage

---

## 🔧 Prerequisites

* Node.js **v18** (recommended)

  > v20 users: may require `NODE_OPTIONS=--openssl-legacy-provider`
* MongoDB Atlas account
* Google OAuth credentials
* Git

---

## 🛠️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/whatsapp-clone.git
cd whatsapp-clone
```

### 2. Set Up Environment Variables

**Client (`client/.env`)**

```bash
echo "REACT_APP_SOCKET_URL=http://localhost:9000" > client/.env
```

**Server (`server/.env`)**

```bash
echo "MONGO_URI=mongodb+srv://<user>:<password>@cluster0.fqers4o.mongodb.net/WHATSAPPCLONE" > server/.env
```

**Socket (`socket/.env`)**

```bash
echo "CLIENT_URL=http://localhost:3000" > socket/.env
```

### 3. Install Dependencies

**Client:**

```bash
cd client
npm install
npm audit fix
npm install @cypress/request@3.0.1 semver@7.5.4 shell-quote@1.8.1 tough-cookie@4.1.3 webpack-dev-middleware@5.3.4 jsdom@22.1.0
```

**Server:**

```bash
cd ../server
npm install
```

**Socket:**

```bash
cd ../socket
npm install
```

---

## ▶️ Run Locally

**Socket Server:**

```bash
cd socket
lsof -i :9000 && kill -9 <PID>   # If port 9000 is occupied
npm start
```

**Backend Server:**

```bash
cd ../server
npm start
```

**Frontend:**

```bash
cd ../client
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

---

## 🌐 Access Application

* Open [http://localhost:3000](http://localhost:3000) in your browser.
* Log in with Google OAuth.
* Test messaging and typing indicator with two users on separate screens or devices.

---

## 🚀 Deployment

### Client (Vercel)

* Set `REACT_APP_SOCKET_URL` to your socket server’s deployed URL.

### Server (Render)

* Set `MONGO_URI` using your MongoDB Atlas URI.

### Socket (Render)

* Set `CLIENT_URL` to your deployed client URL.

> See `docs/deployment.md` for more information (create if it doesn't exist).

---

## 🧹 Troubleshooting

**Port Conflict:**

```bash
lsof -i :9000
kill -9 <PID>
```

**Node.js v20 Issues:**

```bash
sudo n 18
```

**MongoDB:**

```bash
mongosh "mongodb+srv://<user>:<password>@cluster0.fqers4o.mongodb.net/WHATSAPPCLONE"
```

Check logs in `client`, `server`, and `socket` directories for any errors.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
