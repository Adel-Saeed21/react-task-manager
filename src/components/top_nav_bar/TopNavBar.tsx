import { Button, Stack } from "@mui/material";
import TaskIcon from '@mui/icons-material/Task';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
export default function TopNavBar() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        color="primary"
        startIcon={<FormatListBulletedIcon />}
        variant="contained"
      >
        All Tasks
      </Button>

      <Button
        variant="contained"
        color="success"
        startIcon={<TaskIcon />}
      >
        Completed
      </Button>

      <Button
        variant="contained"
        color="warning"
        style={{color:"white"
        }}
        startIcon={<PendingOutlinedIcon />}
      >
        In Progress
      </Button>
    </Stack>
  );
}