# FS-MS-V1D — MERN Microservices Application

A production-ready **MERN Stack Microservices Application** built with Node.js, Express.js, MongoDB, JWT authentication, and an API Gateway.

The application is divided into independent microservices for **API Gateway, Authentication, Admin, and User** functionality.

---

## 📌 Project Overview

**FS-MS-V1D** demonstrates a Node.js and Express.js based microservices architecture where each business capability runs as an independent service.

The application contains:

* API Gateway
* Authentication Service
* Admin Service
* User Service
* MongoDB database
* JWT-based authentication
* Role-based authorization
* Task creation and assignment
* User task updates
* Railway deployment support

### Architecture

```text
                         Client / React Frontend
                                  |
                                  v
                     +-------------------------+
                     |   MS-01 API Gateway     |
                     |       Port: 5000        |
                     +-----------+-------------+
                                 |
                  +--------------+--------------+
                  |              |              |
                  v              v              v
          +-------------+ +-------------+ +-------------+
          | MS-02 Auth  | | MS-03 Admin | | MS-04 User  |
          | Port: 5001  | | Port: 5002  | | Port: 5003  |
          +------+------+ +------+------+ +------+------+
                 |               |               |
                 +---------------+---------------+
                                 |
                                 v
                         +---------------+
                         |    MongoDB    |
                         +---------------+
```

---

# 🚀 Microservices

## 1. MS-01 API Gateway

**Directory:**

```text
ms-01-api-gateway/
```

**Local Port:**

```text
5000
```

Responsibilities:

* Single public entry point
* Routes requests to internal microservices
* Authentication service proxy
* Admin service proxy
* User service proxy
* CORS handling
* Central API access for frontend applications

---

## 2. MS-02 Auth Service

**Directory:**

```text
ms-02-auth/
```

**Local Port:**

```text
5001
```

Responsibilities:

* User registration
* User login
* JWT generation
* Authentication
* Password-related functionality
* User authentication data
* Role information

---

## 3. MS-03 Admin Service

**Directory:**

```text
ms-03-admin/
```

**Local Port:**

```text
5002
```

Responsibilities:

* Admin authentication/authorization
* Task creation
* Task management
* Task assignment
* Task status management
* Admin task operations

---

## 4. MS-04 User Service

**Directory:**

```text
ms-04-user/
```

**Local Port:**

```text
5003
```

Responsibilities:

* User task retrieval
* Assigned task management
* Task status updates
* User-specific operations

---

# 🛠 Technology Stack

### Backend

* Node.js
* Express.js
* JavaScript / ES Modules
* MongoDB
* Mongoose
* JWT
* CORS
* dotenv
* Axios / HTTP client
* HTTP Proxy Middleware

### Development

* Nodemon
* Concurrently
* Git
* GitHub
* Postman

### Deployment

* Railway
* MongoDB Atlas / Railway MongoDB

### Frontend

The backend architecture is designed to be consumed by:

* React
* React + Vite
* Microfrontend applications

---

# 📁 Project Structure

```text
fs-ms-v1d/
│
├── .gitignore
├── README.md
├── package.json
│
├── ms-01-api-gateway/
│   ├── package.json
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── .env.example
│
├── ms-02-auth/
│   ├── package.json
│   ├── index.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── .env.example
│
├── ms-03-admin/
│   ├── package.json
│   ├── index.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── .env.example
│
└── ms-04-user/
    ├── package.json
    ├── index.js
    ├── models/
    ├── routes/
    ├── controllers/
    ├── middleware/
    └── .env.example
```

---

# 📋 Prerequisites

Install the following before running the project:

* Node.js 20+
* npm
* MongoDB
* Git
* Postman
* VS Code (recommended)

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Check Git:

```bash
git --version
```

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/yraviui/fs-ms-v1d.git
```

Go to the project:

```bash
cd fs-ms-v1d
```

Install root dependencies:

```bash
npm install
```

Install API Gateway dependencies:

```bash
cd ms-01-api-gateway
npm install
cd ..
```

Install Auth dependencies:

```bash
cd ms-02-auth
npm install
cd ..
```

Install Admin dependencies:

```bash
cd ms-03-admin
npm install
cd ..
```

Install User dependencies:

```bash
cd ms-04-user
npm install
cd ..
```

---

# 🔐 Environment Variables

Environment files are intentionally excluded from Git.

The project uses:

```text
ms-01-api-gateway/.env
ms-02-auth/.env
ms-03-admin/.env
ms-04-user/.env
```

These files should never be committed to GitHub.

Use the provided example files:

```text
.env.example
```

as templates.

---

# ⚙️ Local Environment Configuration

## MS-01 API Gateway

```env
NODE_ENV=development
PORT=5000

AUTH_SERVICE_URL=http://localhost:5001
ADMIN_SERVICE_URL=http://localhost:5002
USER_SERVICE_URL=http://localhost:5003
```

---

## MS-02 Auth

```env
NODE_ENV=development
PORT=5001

MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
JWT_SECRET=<YOUR_JWT_SECRET>
JWT_EXPIRES_IN=<YOUR_JWT_EXPIRATION>
```

---

## MS-03 Admin

```env
NODE_ENV=development
PORT=5002

MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
JWT_SECRET=<YOUR_JWT_SECRET>
USER_SERVICE_URL=http://localhost:5003
```

---

## MS-04 User

```env
NODE_ENV=development
PORT=5003

MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
JWT_SECRET=<YOUR_JWT_SECRET>
```

> Replace the variables above with the exact variables required by the current implementation.

Never place real passwords, JWT secrets, MongoDB credentials, API keys, or tokens inside `README.md`.

---

# ▶️ Running the Application

The root project uses `concurrently` for local development.

From the project root:

```bash
npm run dev
```

This starts all four services.

```text
MS-01 API Gateway    → http://localhost:5000
MS-02 Auth           → http://localhost:5001
MS-03 Admin          → http://localhost:5002
MS-04 User           → http://localhost:5003
```

---

# 🔄 Local Service Communication

During local development:

```text
API Gateway
    |
    +----> http://localhost:5001
    |          Auth Service
    |
    +----> http://localhost:5002
    |          Admin Service
    |
    +----> http://localhost:5003
               User Service
```

The frontend should normally communicate with the API Gateway rather than directly calling each internal microservice.

---

# 🌐 API Gateway

The API Gateway is the main API entry point.

Local base URL:

```text
http://localhost:5000
```

Production base URL:

```text
https://<YOUR-RAILWAY-GATEWAY-DOMAIN>
```

Frontend applications should use the Gateway URL.

Example:

```text
POST http://localhost:5000/api/auth/register
```

instead of directly calling:

```text
POST http://localhost:5001/...
```

---

# 🔑 Authentication

The application uses JWT-based authentication.

Typical flow:

```text
Client
  |
  | Register
  v
API Gateway
  |
  v
Auth Service
  |
  v
MongoDB
```

Login:

```text
Client
  |
  | Login
  v
API Gateway
  |
  v
Auth Service
  |
  v
JWT Token
```

Authenticated requests use:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

# 👨‍💼 Admin Task Workflow

The task workflow is:

```text
Admin Login
    |
    v
Create Task
    |
    v
Assign Task to User
    |
    v
User Receives Task
    |
    v
User Updates Task
    |
    v
Admin Views Updated Task
```

---

# 👤 User Task Workflow

```text
User Login
    |
    v
Get Assigned Tasks
    |
    v
View Task
    |
    v
Update Task
    |
    v
Complete Task
```

---

# 🔗 API Examples

The following examples use the API Gateway.

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Admin

### Get Tasks

```http
GET /api/admin/tasks
```

### Create Task

```http
POST /api/admin/tasks
```

### Update Task

```http
PUT /api/admin/tasks/:id
```

---

## User

### Get User Tasks

```http
GET /api/user/tasks
```

### Update User Task

```http
PUT /api/user/tasks/:id
```

> API paths should be kept synchronized with the actual route definitions in the microservices.

---

# 🧪 Testing with Postman

Recommended testing sequence:

### 1. Register

```http
POST /api/auth/register
```

### 2. Login

```http
POST /api/auth/login
```

Save the JWT token.

### 3. Create Admin Task

```http
POST /api/admin/tasks
```

### 4. Assign Task

```http
PUT /api/admin/tasks/:id
```

### 5. Get User Tasks

```http
GET /api/user/tasks
```

### 6. Update User Task

```http
PUT /api/user/tasks/:id
```

### 7. Verify Admin Task

```http
GET /api/admin/tasks
```

---

# 🚂 Railway Deployment

The project is designed to be deployed as four independent Railway services.

```text
Railway Project
│
├── ms-01-api-gateway
│
├── ms-02-auth
│
├── ms-03-admin
│
└── ms-04-user
```

Each service uses its own Root Directory.

### API Gateway

```text
Root Directory:
/ms-01-api-gateway
```

### Auth

```text
Root Directory:
/ms-02-auth
```

### Admin

```text
Root Directory:
/ms-03-admin
```

### User

```text
Root Directory:
/ms-04-user
```

---

# ☁️ Railway Production Architecture

```text
                    Internet
                       |
                       v
             +---------------------+
             | API Gateway         |
             | Railway             |
             | Public URL          |
             +----------+----------+
                        |
          +-------------+-------------+
          |             |             |
          v             v             v
     +---------+   +---------+   +---------+
     | Auth    |   | Admin   |   | User    |
     | Service |   | Service |   | Service |
     +----+----+   +----+----+   +----+----+
          |             |             |
          +-------------+-------------+
                        |
                        v
                  +-----------+
                  | MongoDB   |
                  +-----------+
```

Only the API Gateway should normally be exposed publicly.

Internal services should communicate through Railway's private networking.

---

# 🔒 Production Environment Variables

Production `.env` files should not be committed.

Configure production variables through Railway Variables.

Example:

```env
NODE_ENV=production
MONGO_URI=<PRODUCTION_MONGODB_URI>
JWT_SECRET=<PRODUCTION_JWT_SECRET>
```

For internal service communication, use Railway private service domains instead of localhost.

Example:

```env
AUTH_SERVICE_URL=http://${{ms-02-auth.RAILWAY_PRIVATE_DOMAIN}}

ADMIN_SERVICE_URL=http://${{ms-03-admin.RAILWAY_PRIVATE_DOMAIN}}

USER_SERVICE_URL=http://${{ms-04-user.RAILWAY_PRIVATE_DOMAIN}}
```

---

# 🔐 Security

The repository intentionally ignores:

```text
.env
.env.*
node_modules/
```

Never commit:

* MongoDB passwords
* JWT secrets
* API keys
* Email passwords
* Access tokens
* Refresh tokens
* Private credentials

Before pushing code, verify:

```bash
git status
```

and:

```bash
git ls-files | findstr /i ".env"
```

Only `.env.example` files should be tracked.

---

# 🧹 Git Ignore

The repository uses `.gitignore` to exclude:

```text
node_modules/
.env
.env.*
dist/
build/
coverage/
logs/
.vscode/
.idea/
```

---

# 🔄 Development Workflow

```text
Developer
    |
    v
Local Development
    |
    v
npm run dev
    |
    v
Test with Postman
    |
    v
git add .
    |
    v
git commit
    |
    v
git push
    |
    v
GitHub
    |
    v
Railway
    |
    v
Production
```

---

# 📦 Repository

GitHub:

https://github.com/yraviui/fs-ms-v1d

---

# 📌 Future Improvements

Possible future enhancements:

* Docker containers
* Docker Compose
* API documentation with Swagger/OpenAPI
* Centralized logging
* Service health checks
* Rate limiting
* Redis caching
* Message broker
* Automated testing
* CI/CD with GitHub Actions
* Monitoring and observability
* Custom domain
* HTTPS
* Production database backups

---

# 👨‍💻 Author

**Y Ravi Prakash**

MERN Stack / Frontend Developer

Experienced in:

* React
* JavaScript
* TypeScript
* Node.js
* Express.js
* MongoDB
* Microservices
* Microfrontends
* Tailwind CSS

---

# 📄 License

This project is intended for learning, demonstration, portfolio, and development purposes.
