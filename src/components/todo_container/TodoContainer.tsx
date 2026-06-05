import theme from '../../core/theme'
import AddNewTask from '../add_new_task/AddNewTask'
import TaskList from '../task_list/TaskList'
import TopNavBar from '../top_nav_bar/TopNavBar'
import './TodoContainerStyle.css'
import { ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

export default function TodoContainer() {
  interface TaskType {
    id: number;
    title: string;
    body: string;
  }

  const [taskList, setTaskList] = useState<TaskType[]>([
   
  ]);

  function addTask(title: string, body: string) {
    const newTask: TaskType = {
      id: taskList.length + 1,
      title,
      body
    };
    setTaskList([...taskList, newTask]);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="todo-container">
        <h1>My Tasks</h1>
        <hr/>
        <br/><br/>
        <TopNavBar/>
        <br/><br/>
        <TaskList taskList={taskList} />
        <AddNewTask onAddTask={addTask} />
      </div>
    </ThemeProvider>
  );
}