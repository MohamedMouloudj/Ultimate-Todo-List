# Todo List with Drag & Drop

This is a **Todo List application** built just to practice **TypeScript** in a React environment. The app allows users to add, manage, and reorder tasks using a **drag-and-drop** feature. Tasks are stored in **localStorage** for persistence.

[live-demo](https://ultimate-todo-list-topaz.vercel.app/)

## 🛠️ Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation.
- **TypeScript** - Strongly typed JavaScript.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **@hello-pangea/dnd** - Fork of react-beautiful-dnd for drag-and-drop functionality.
- **localStorage** - Browser storage to persist tasks.

## ✨ Features

- ✅ Add new tasks
- 📝 Edit or remove tasks
- 📦 Drag and drop tasks to reorder them
- 🔄 Tasks persist using localStorage
- 🎨 Responsive design with Tailwind CSS

## 📂 Project Structure

```
📦 my-todo-app
├── 📁 app
│   ├── 📄 page.tsx  # Main component with todo logic
│   ├── 📄 globals.css  # Tailwind styles
├── 📁 components
│   ├── 📄 Tasks.tsx  # List of tasks
│   ├── 📄 DoneTasks.tsx  # List of completed tasks
├── 📄 package.json
├── 📄 README.md
```

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/Ultimate-Todo-List.git
cd Ultimate-Todo-List
```

### 2️⃣ Install dependencies

```bash
npm install  # or yarn install
```

### 3️⃣ Run the development server

```bash
npm run dev  # or yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 How to Use

1. Type a new task in the input field and press **Enter** to add it.
2. Drag and drop tasks to change their order.
3. Tasks are automatically saved in **localStorage**.

## 🛠️ Future Improvements

- ✅ Improve UI/UX with animations.
- 🗑️ Add a "clear completed tasks" button.
- ☁️ Sync tasks with an API for cross-device access.

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

Feel free to contribute, open issues, or suggest improvements! 🚀
