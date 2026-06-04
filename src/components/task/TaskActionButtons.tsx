import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
export default function TaskActionButtons() {
    return (
        <div>
            <IconButton aria-label="delete" color="error">
            <DeleteIcon />            
            </IconButton>
            <IconButton aria-label="done" color="success">
            <DoneOutlineOutlinedIcon />            
            </IconButton>
            <IconButton aria-label="edit" color="primary">
            <EditOutlinedIcon />            
            </IconButton>


        </div>

    )
}
