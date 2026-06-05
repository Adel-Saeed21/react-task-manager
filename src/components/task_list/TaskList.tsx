import Task from '../task/Task'
import './TaskListStyle.css'
interface TaskType {
  id: number;
  title: string;
  body: string;
}

interface TaskListProps {
  taskList: TaskType[];
}

export default function TaskList({ taskList }: TaskListProps) {

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
                    <Task key={task.id} id={task.id} title={task.title} body={task.body} />
                ))}
        </div>
        );
    }
    
}