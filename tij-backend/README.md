# Traveler's Info Junction — Backend

Express + MongoDB + JWT authentication API.

## 1. Install MongoDB locally (if not already)

- Download from: https://www.mongodb.com/try/download/community
- After installing, start it by running `mongod` in a terminal (keep it running).
- On Mac with Homebrew: `brew services start mongodb-community`

## 2. Install dependencies

```bash
cd tij-backend
npm install
```

## 3. Run the server

```bash
npm run dev
```

You should see:
```
✅ Connected to MongoDB
🚀 Server running at http://localhost:5000
```

## 4. Test it

**Signup:**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

Both return a `token` — save it, you'll need it for protected routes like `/api/auth/me`.

## Folder structure

```
tij-backend/
├── controllers/   → business logic (authController.js)
├── middleware/     → requireAuth.js (JWT verification)
├── models/         → User.js (Mongoose schema)
├── routes/         → authRoutes.js
├── server.js       → entry point
├── .env            → secrets & config (DO NOT commit this)
└── package.json
```