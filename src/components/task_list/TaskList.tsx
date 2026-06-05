import Task from '../task/Task'
import './TaskListStyle.css'
import { useTaskContext } from '../../core/TaskContext';
interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}

export default function TaskList() {
    const { taskList, deleteTask, toggleDone } = useTaskContext();
    if (taskList.length === 0) {
        return (
<div className="taskContainer"> 
                <h2>No tasks available</h2>
                <p>Click the "Add New Task" button to create your first task.</p>
            </div>
        )
    }else{
        return (
        <div className="taskContainer-with-tasks">               
                    {taskList.map((task: TaskType) => (
                    <Task key={task.id} id={task.id} title={task.title} body={task.body} isDone={task.done!} onDelete={() =>deleteTask(task.id)} onDone={() => 
                        toggleDone(task.id)
                    } />
                ))}
        </div>
        );
    }
    
}