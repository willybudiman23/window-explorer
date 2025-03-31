# Window Explorer FE

## 🚀 Tech Stack
- **Bun** `1.2.7`
- **Vite**
- **Vue 3**
- **Vue Router**
- **Axios**
- **Pinia**
- **Tailwind CSS** `4.x`

## ✅ Features Implemented
### 1️⃣ Fetch API to Get Complete Nested Folders
- On page load, the frontend requests all folders and subfolders from the API.
- The left panel displays the full folder structure.

### 2️⃣ Expand/Collapse Subfolders on Click
- Users can expand or collapse folders in the left panel by clicking an icon.
- The expanded state is managed in the frontend to maintain UI state.

### 3️⃣ Clicking a Folder Updates the Right Panel and URL

When a user clicks a folder on the left panel:
- ✅ The right panel updates to display subfolders and files of the selected folder.
- ✅ The URL path updates (/folder/:id) using Vue Router.

### 4️⃣ Preserve State on Reload
On reload, the frontend checks the URL parameter (folderId).
- It finds the selected folder, expands its parent folders, and updates the right panel.
- This ensures the UI remains consistent even after a refresh.

## 📌 About This Project
This project was built as a **simple implementation** of a Windows Explorer-like interface for testing purposes. Due to time constraints, many features are **not fully developed**.

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/willybudiman23/window-explorer.git
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
cd apps/window-explorer-frontend
cp .env.example .env
```

### 4️⃣ Start Development Server
Run the following command:
```
bun run dev
```

### 🛠 Build for Production
Run the following command:
```
bun run build
```

### ✅ Lint, Format Code & Type Check
Run the following command:
```
bun run lint
bun run format
bun run type-check
```