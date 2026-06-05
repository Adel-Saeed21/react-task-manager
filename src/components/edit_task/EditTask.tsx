import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react"
import { useTaskContext } from "../../core/TaskContext";

export default function EditTask(props: { id: number }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { editTask, taskList } = useTaskContext();

  function handleOpen() {
    const task = taskList.find(t => t.id === props.id);
    if (task) {
      setTitle(task.title);
      setBody(task.body);
    }
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setTitle('');
    setBody('');
  }

  function handleSubmit() {
    if (title.trim() && body.trim()) {
      editTask(props.id, title, body);
      handleClose();
    }
  }

  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle style={{ color: "blue" }}>Edit Task</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Body"
            fullWidth
            multiline
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}