# 📊 Spreadsheet UI — React + Tailwind + react-table

A spreadsheet-style web UI built with React, TailwindCSS, and `react-table`. Includes features like editable cells, row management, and column visibility toggling. Fast, clean, and production-ready.

---

## ✨ Features

- ✅ Editable cells (text, date, dropdowns)
- ➕ Add new rows
- 🗑 Delete rows
- 👁️ Toggle column visibility (Hide Fields)
- 🎯 Clean responsive layout with Tailwind
- ⚙️ Vite-powered for fast dev/build
- 🧠 TypeScript support

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js **v20.x** (required for Vercel)
- npm **v9.x** or higher

> Check versions:
```bash
node -v
npm -v

# 🛠️ Local Setup
## Clone the repo
git clone https://github.com/YOUR_USERNAME/spreadsheet-reactjs-reacttable.git
cd spreadsheet-reactjs-reacttable
npm install
npm run dev
Open in browser http://localhost:5173

# Project Structure
react-spreadsheet-clone/
│
├── public/                     # Static assets
│
├── src/
│   ├── components/             # UI Components
│   │   ├── DataTable.tsx       # Main table
│   │   ├── Toolbar.tsx         # Hide fields / Sort / Filter
│   │   ├── Header.tsx          # Title + Add button
│   │   └── Tabs.tsx            # Status tabs
│   │  
│   │
│   ├── data/
│   │   ├── mockData.js         # Static row data
│   │   └── types.ts            # TypeScript types
│   │
│   ├── App.tsx                 # Main app
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind styles
│
├── package.json                # Project metadata
├── vite.config.ts              # Vite build config
├── tsconfig.json               # TS config
├── tailwind.config.js          # Tailwind setup
└── postcss.config.js           # PostCSS plugins


👨‍💻 Author
Made with ❤️ by aadilaliofficial
