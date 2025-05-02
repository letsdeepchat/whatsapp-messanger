![singlescreeen](https://github.com/user-attachments/assets/5947b86b-92b0-437d-a438-f67ecee3dcdd)


![both screeen](https://github.com/user-attachments/assets/0ca9ccd4-d483-409b-b32b-fa218a74fdf2)

WhatsApp Clone
A real-time chat application built with React, Node.js, Socket.IO, and MongoDB, featuring Google OAuth login, messaging, and a typing indicator.
Project Structure
whatsapp-clone/
├── client/           # React frontend
├── server/           # Node.js backend with MongoDB
├── socket/           # Socket.IO server for real-time features
└── README.md

Features

Google OAuth authentication
Real-time messaging with Socket.IO
Typing indicator
File uploads
MongoDB for persistent storage

Prerequisites

Node.js v18 (recommended, v20 may require NODE_OPTIONS=--openssl-legacy-provider)
MongoDB Atlas account
Google OAuth credentials
Git

Installation
1. Clone Repository
git clone https://github.com/<your-username>/whatsapp-clone.git
cd whatsapp-clone

2. Set Up Environment Variables

Client (client/.env):echo "REACT_APP_SOCKET_URL=http://localhost:9000" > client/.env


Server (server/.env):echo "MONGO_URI=mongodb+srv://<user>:<password>@cluster0.fqers4o.mongodb.net/WHATSAPPCLONE" > server/.env


Socket (socket/.env):echo "CLIENT_URL=http://localhost:3000" > socket/.env



3. Install Dependencies

Client:cd client
npm install
npm audit fix
npm install @cypress/request@3.0.1 semver@7.5.4 shell-quote@1.8.1 tough-cookie@4.1.3 webpack-dev-middleware@5.3.4 jsdom@22.1.0


Server:cd ../server
npm install


Socket:cd ../socket
npm install



4. Run Locally

Socket Server:cd socket
lsof -i :9000 && kill -9 <PID>
npm start


Backend Server:cd ../server
npm start


Frontend:cd ../client
export NODE_OPTIONS=--openssl-legacy-provider
npm start



5. Access Application

Open http://localhost:3000 in a browser.
Log in with Google OAuth.
Test messaging and typing indicator with two users.

Deployment

Client: Deploy to Vercel
Set REACT_APP_SOCKET_URL to socket server URL.


Server: Deploy to Render
Set MONGO_URI for MongoDB Atlas.


Socket: Deploy to Render
Set CLIENT_URL to client URL.


See deployment guide in docs/deployment.md (create if needed).

Troubleshooting

Port Conflict:lsof -i :9000
kill -9 <PID>


Node.js v20 Issues: Downgrade to v18:sudo n 18


MongoDB: Verify connection:mongosh "mongodb+srv://<user>:<password>@cluster0.fqers4o.mongodb.net/WHATSAPPCLONE"


Check logs: client, server, socket folders.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to branch (git push origin feature-name).
Open a pull request.

