import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import TaskActionButtons from "./TaskActionButtons";
import { cardStyle, titleRowStyle, bodyTextStyle } from "./task.style";

export default function Task() {
  const task = {
    title: "Learn React",
    body: "Learn React, TypeScript, and Material UI to build modern web applications. Practice by creating projects like Todo Apps, Dashboards, and E-commerce applications.",
  };

  return (
    <Card sx={cardStyle}>
      <CardContent>

        <Box sx={titleRowStyle}>
          <Typography variant="h6">
            {task.title}
          </Typography>

          <TaskActionButtons />
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={bodyTextStyle}
        >
          {task.body}
        </Typography>

      </CardContent>
    </Card>
  );
}