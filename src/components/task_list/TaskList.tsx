import Task from '../task/Task'
import './TaskListStyle.css'
import { useTaskContext } from '../../core/TaskContext';
import { Pagination } from '@mui/material';
import { useState } from 'react';

interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}

const TASKS_PER_PAGE = 3;

export default function TaskList() {
  const { filteredTasks, deleteTask, toggleDone } = useTaskContext();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);
  const currentPage = Math.min(page, totalPages) || 1;

  const paginatedList = filteredTasks.slice(
    (currentPage - 1) * TASKS_PER_PAGE,
    currentPage * TASKS_PER_PAGE
  );

  if (filteredTasks.length === 0) {
    return (
      <div className="taskContainer">
        <h2>No tasks available</h2>
        <p>Click the "Add New Task" button to create your first task.</p>
      </div>
    );
  }

  return (
    <div className="taskContainer-with-tasks">
      {paginatedList.map((task: TaskType) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          body={task.body}
          isDone={task.done!}
          onDelete={() => deleteTask(task.id)}
          onDone={() => toggleDone(task.id)}
        />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_e, value) => setPage(value)}
        variant="outlined"
        color="primary"
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
            borderColor: 'white',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'white',
            color: '#2d6a5a',
            borderColor: 'white',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
          },
        }}
      />
    </div>
  );
}