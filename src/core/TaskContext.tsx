import { createContext, useContext, useState } from 'react'

interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}

interface TaskContextType {
  taskList: TaskType[];
  addTask: (title: string, body: string) => void;
  deleteTask: (id: number) => void;
  toggleDone: (id: number) => void;
  editTask: (id: number, title: string, body: string) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [taskList, setTaskList] = useState<TaskType[]>([
    {
      id: 1,
      title: "Sample Task",
      body: "This is a sample task. Click the 'Add New Task' button to create your own tasks!",
      done: true
    }
  ]);

  function addTask(title: string, body: string) {
    setTaskList([...taskList, { id: taskList.length + 1, title, body, done: false }]);
  }

  function editTask(id: number, title: string, body: string) {
    setTaskList(taskList.map(task =>
      task.id === id ? { ...task, title, body } : task
    ));
  }

  function deleteTask(id: number) {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  function toggleDone(id: number) {
    setTaskList(taskList.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  return (
    <TaskContext.Provider value={{ taskList, addTask, deleteTask, toggleDone, editTask }}>
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