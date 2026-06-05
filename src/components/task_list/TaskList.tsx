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
  const { taskList, deleteTask, toggleDone, filter } = useTaskContext();
  const [page, setPage] = useState(1);

  const filteredList = taskList.filter(task => {
    if (filter === 'done') return task.done === true;
    if (filter === 'undone') return task.done === false;
    return true;
  });

  const totalPages = Math.ceil(filteredList.length / TASKS_PER_PAGE);

  const paginatedList = filteredList.slice(
    (page - 1) * TASKS_PER_PAGE,
    page * TASKS_PER_PAGE
  );

  if (filteredList.length === 0) {
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
  page={page}
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