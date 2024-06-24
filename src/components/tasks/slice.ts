import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Task = {
    id: number
    title: string
    description: string
    completed: boolean
}

type TaskState = Task[]

const DEFAULT_TASKS: Task[] = [
    {
        id: 1,
        title: "Learn React",
        description: "Learn React to build single page applications",
        completed: true
    },
    {
        id: 2,
        title: "Learn Redux",
        description: "Learn Redux to manage the state of your React application",
        completed: true
    },
    {
        id: 3,
        title: "Learn Redux Toolkit",
        description: "Learn Redux Toolkit to simplify your Redux code",
        completed: false
    }
]

export const ACTIONS = {
    ADD_TASK: "addTask",
    TOGGLE_COMPLETED: "toggleTaskCompleted"
}

export type AppAction = keyof typeof ACTIONS

const taskSlice = createSlice({
    name: "tasks",
    initialState: DEFAULT_TASKS,
    reducers: {
        addTask(state, action: PayloadAction<{ title: string, description: string }>) {
            state.push({
                id: state.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            })
        },
        toggleTaskCompleted(state, action: PayloadAction<{ id: number }>) {
            console.log("toggling", { id: action.payload.id })
            const index = state.findIndex(task => task.id === action.payload.id)
            state[index].completed = !state[index].completed
        }
    }
})

export const { addTask, toggleTaskCompleted } = taskSlice.actions
export default taskSlice.reducer