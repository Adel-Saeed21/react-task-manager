import { createContext, useContext, useState } from 'react'

interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}

type FilterType = 'all' | 'done' | 'undone';

interface TaskContextType {
  taskList: TaskType[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  addTask: (title: string, body: string) => void;
  deleteTask: (id: number) => void;
  toggleDone: (id: number) => void;
  editTask: (id: number, title: string, body: string) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskList, setTaskList] = useState<TaskType[]>(() => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
});

  const [filter, setFilter] = useState<FilterType>('all');
function addTask(title: string, body: string) {
  const newList = [...taskList, { id: taskList.length + 1, title, body, done: false }];
  setTaskList(newList);
  localStorage.setItem('tasks', JSON.stringify(newList));
}

function editTask(id: number, title: string, body: string) {
  const newList = taskList.map(task =>
    task.id === id ? { ...task, title, body } : task
  );
  setTaskList(newList);
  localStorage.setItem('tasks', JSON.stringify(newList));
}

function deleteTask(id: number) {
  const newList = taskList.filter(task => task.id !== id);
  setTaskList(newList);
  localStorage.setItem('tasks', JSON.stringify(newList)); 
}

function toggleDone(id: number) {
  const newList = taskList.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  setTaskList(newList);
  localStorage.setItem('tasks', JSON.stringify(newList)); 
}
  return (
    <TaskContext.Provider value={{ taskList, filter, setFilter, addTask, deleteTask, toggleDone, editTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within TaskProvider');
  return context;
}