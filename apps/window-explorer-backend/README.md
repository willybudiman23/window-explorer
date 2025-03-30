# Window Explorer BE

## 🚀 Tech Stack
- **Bun** `1.2.7`
- **Elysia**
- **Prisma**
- **PostgresSQL**

## ✅ Endpoints Implemented
### 1️⃣ GET /folders
- return complete nested folders and sub folders also with files

## 📌 About This Project
This project was built as a **simple implementation** of a Windows Explorer-like interface for testing purposes. Due to time constraints, many features are **not fully developed**.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/window-explorer.git
cd window-explorer
```

### 2️⃣ Install Dependencies
Make sure you have bun installed. If not, install it first:
```
curl -fsSL https://bun.sh/install | bash
```
Then install dependencies:
```
bun install
```

### 3️⃣ Set Up Environment Variables
Copy .env.example to .env and update DATABASE_URL:
```
cd apps/window-explorer-backend
cp .env.example .env
```
### Migration & Seed
```
bunx prisma migrate dev --name init
bunx prisma db seed
```

### Start Development Server
Run the following command:
```
bun run dev