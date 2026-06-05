import theme from '../../core/theme'
import AddNewTask from '../add_new_task/AddNewTask'
import TaskList from '../task_list/TaskList'
import TopNavBar from '../top_nav_bar/TopNavBar'
import './TodoContainerStyle.css'
import { ThemeProvider } from '@mui/material/styles'
import { TaskProvider } from '../../core/TaskContext'
export default function TodoContainer() {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <div className="todo-container">
          <h1>My Tasks</h1>
          <hr/>
          <br/><br/>
          <TopNavBar/>
          <br/><br/>
          <TaskList />
          <AddNewTask  />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}