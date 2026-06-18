import { createContext, useContext, useState , useMemo,useReducer, useEffect} from 'react'
import { todoReducer } from '../reducer/todoReducer';

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
        filteredTasks: TaskType[];
}

const TaskContext = createContext<TaskContextType | null>(null);


export function TaskProvider({ children }: { children: React.ReactNode }) {


      const [taskList, dispatch] = useReducer(todoReducer, [], () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });



const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

function addTask(title: string, body: string) {
  dispatch({ type: "ADD_TASK", payload: { title, body } });
}

function editTask(id: number, title: string, body: string) {
  dispatch({ type: "EDIT_TASK", payload: { id, title, body } });
}

function deleteTask(id: number) {
  dispatch({ type: "DELETE_TASK", payload: { id } });
}

function toggleDone(id: number) {
  dispatch({ type: "TOGGLE_DONE", payload: { id } });
}

const filteredTasks = useMemo(() => {
  if (filter === 'done') return taskList.filter(t => t.done);
  if (filter === 'undone') return taskList.filter(t => !t.done);
  return taskList;
}, [taskList, filter]);

  return (
    <TaskContext.Provider value={{ taskList, filter, setFilter, addTask, deleteTask, toggleDone, editTask, filteredTasks }}>
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