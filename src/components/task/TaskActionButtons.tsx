import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import EditTask from "../edit_task/EditTask";

interface TaskActionButtonsProps {
  id: number;
  isDone: boolean;
  onDelete: () => void;
  onDone: () => void;
}

export default function TaskActionButtons({ id, isDone, onDelete, onDone }: TaskActionButtonsProps) {
  return (
    <div>
      <IconButton aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="done" onClick={onDone} color={isDone ? "success" : "default"}>
        <DoneOutlineOutlinedIcon />
      </IconButton>
      <EditTask id={id} />
    </div>
  );
}