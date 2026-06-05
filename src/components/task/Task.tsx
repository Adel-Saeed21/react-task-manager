import { Card, CardContent, Typography, Box } from "@mui/material";
import TaskActionButtons from "./TaskActionButtons";
import { cardStyle, titleRowStyle, bodyTextStyle } from "./task.style";
type TaskProps = {
  id: number;
  title: string;
  body: string;
  isDone: boolean;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

export default function Task(props: TaskProps) {
  return (
    <Card sx={{ ...cardStyle, backgroundColor: props.isDone ? "#e0ffe0" : "white" }}>
      <CardContent>
        <Box sx={titleRowStyle}>
          <Typography
            variant="h6"
            sx={{ textDecoration: props.isDone ? "line-through" : "none", color: props.isDone ? "gray" : "inherit" }}
          >
            {props.title}
          </Typography>
          <TaskActionButtons
            id={props.id}
            isDone={props.isDone}
            onDelete={() => props.onDelete(props.id)}
            onDone={() => props.onDone(props.id)}
          />
        </Box>
        <Typography variant="body1" color="text.secondary" sx={bodyTextStyle}>
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}