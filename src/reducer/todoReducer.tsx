
interface TaskType {
  id: number;
  title: string;
  body: string;
  done?: boolean;
}
type TodoState=TaskType[];

type ActionType =
  | { type: "ADD_TASK"; payload: { title: string; body: string } }
  | { type: "DELETE_TASK"; payload: { id: number } }
  | { type: "TOGGLE_DONE"; payload: { id: number } }
  | { type: "EDIT_TASK"; payload: { id: number; title: string; body: string } };

export function todoReducer(state: TodoState, action: ActionType): TodoState {    switch (action.type) {
        case "ADD_TASK":{
            const newTask: TaskType = {
                id: state.length + 1,
                title: action.payload.title,
                body: action.payload.body,
                done: false,
            };
            return [...state, newTask];
        } 
        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload.id);
        
        case "TOGGLE_DONE":
            return state.map(task =>
                task.id === action.payload.id ? { ...task, done: !task.done } : task
            );

        case "EDIT_TASK":
            return state.map(task =>
                task.id === action.payload.id
                    ? { ...task, title: action.payload.title, body: action.payload.body }
                    : task
            );

        default:
            return state;
}
}