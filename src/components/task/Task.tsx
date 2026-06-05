import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import TaskActionButtons from "./TaskActionButtons";
import { cardStyle, titleRowStyle, bodyTextStyle } from "./task.style";

type TaskProps={
    id:number,
    title:string,
    body:string
    done?:boolean
}
export default function Task(props:TaskProps) {


  return (
    <Card sx={cardStyle}>
      <CardContent>

        <Box sx={titleRowStyle}>
          <Typography variant="h6">
            {props.title}
          </Typography>

          <TaskActionButtons />
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={bodyTextStyle}
        >
          {props.body}
        </Typography>

      </CardContent>
    </Card>
  );
}