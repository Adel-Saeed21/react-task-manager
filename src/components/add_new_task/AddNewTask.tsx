import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'

interface AddNewTaskProps {
  onAddTask: (title: string, body: string) => void;
}

export default function AddNewTask({ onAddTask }: AddNewTaskProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setTitle('');
    setBody('');
  }

  function handleSubmit() {
    if (title.trim() && body.trim()) {
      onAddTask(title, body);
      handleClose();
    }
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add New Task
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle style={{color:"blue"}}>Add New Task</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            style={{borderRadius:"10px"}}
          />
          <TextField
            label="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}