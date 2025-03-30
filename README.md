# Window Explorer Monorepo

This is a **monorepo** built with **Turbo**, managing multiple apps

## 🚀 Tech Stack
- **Bun** `1.2.7`
- **Turbo**
- **Vite**
- **Vue 3**
- **Vue Router**
- **Axios**
- **Tailwind CSS** `4.x`
- **Elysia (Bun Backend)**
- **Prisma**

## 📌 About This Project
This project was built as a **simple implementation** of a Windows Explorer-like for testing purposes. Due to time constraints, many features are **not fully developed**.

## 📦 Installation

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
Copy .env.example to .env and update VITE_API_EXPLORER_ENDPOINT:
```
cp apps/window-explorer-frontend/.env.example apps/window-explorer-frontend/.env
```

### 4️⃣ Run Apps with Turbo
Run frontend app
```
bun --filter window-explorer-frontend run dev
```
Run backend app
```
bun --filter window-explorer-backend run dev
```