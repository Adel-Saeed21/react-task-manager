import { Button, Stack } from "@mui/material";
import TaskIcon from '@mui/icons-material/Task';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { useTaskContext } from '../../core/TaskContext';

export default function TopNavBar() {
  const { filter, setFilter } = useTaskContext();

  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="primary"
        startIcon={<FormatListBulletedIcon />}
        variant={filter === 'all' ? "contained" : "outlined"}
        onClick={() => setFilter('all')}
      >
        All Tasks
      </Button>
      <Button
        color="success"
        startIcon={<TaskIcon />}
        variant={filter === 'done' ? "contained" : "outlined"}
        onClick={() => setFilter('done')}
      >
        Completed
      </Button>
      <Button
        color="warning"
        startIcon={<PendingOutlinedIcon />}
        variant={filter === 'undone' ? "contained" : "outlined"}  
        style={{ color: filter === 'undone' ? "white" : "inherit" }}
        onClick={() => setFilter('undone')}
      >
        In Progress
      </Button>
    </Stack>
  );
}