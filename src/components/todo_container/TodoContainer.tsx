import theme from '../../core/theme'
import Task from '../task/Task'
import TopNavBar from '../top_nav_bar/TopNavBar'
import './TodoContainerStyle.css'
import {ThemeProvider} from '@mui/material/styles'
export default function TodoContainer() {
    return (
        <ThemeProvider theme={theme}>
        <div className="todo-container">
            <h1 className=''>My Tasks</h1>
            <hr/>
            <br/><br/>
            <TopNavBar/>
            <br/><br/>
            <Task/>
            <br/>
            <br/>
                        <Task/>


        </div>
        </ThemeProvider>
    )

}