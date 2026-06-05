# ✅ React Task Manager

A Todo List application built with **React** + **TypeScript** + **Vite**.

---

## 🧠 Concepts & Hooks Used

### `useState`
Used to manage local component state such as the list of tasks, input field values, current page index, and modal visibility.

```tsx
const [tasks, setTasks] = useState<Task[]>([]);
const [currentPage, setCurrentPage] = useState(1);
```

### `useContext`
Used to share global state (e.g. task list, theme) across deeply nested components without prop drilling.


### Props
Components communicate via props — parent components pass data and callback functions down to children.

```tsx
<TaskCard task={task} onDelete={handleDelete} onEdit={handleEdit} />
```

### Pagination
Tasks are split into pages to avoid rendering a large list at once. Only the current page slice is displayed.

```tsx
const paginated = tasks.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);
```

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── add_new_task/     # Form to add a new task
│   ├── edit_task/        # Form to edit an existing task
│   ├── task/             # Single task card component
│   ├── task_list/        # Paginated list of tasks
│   ├── todo_container/   # Main wrapper (holds context provider)
│   └── top_nav_bar/      # Navigation bar
├── core/                 # Context, reducer, types
├── App.tsx
└── main.tsx
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| CSS Modules | Component-scoped styles |
| localStorage | Task persistence |
