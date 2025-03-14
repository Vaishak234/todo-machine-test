import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

const initialState = {
    todos: [...loadTodosFromLocalStorage()]
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
            state.todos = newTodos;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if (index === -1) return;
            state.todos[index] = action.payload;
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        updateTodos:(state,action)=>{
            state.todos=action.payload;
        }
    }
});

export const selectTodos = (state) => state?.todos?.todos;

export const selectFilteredTodos = createSelector(
    [selectTodos, (_, filter) => filter],
    (todos, filter) => todos?.filter((todo) => todo.status === filter)
);

export const { addTodo, editTodo, removeTodo,updateTodos } = todoSlice.actions;

export default todoSlice.reducer;