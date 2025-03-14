import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { selectFilteredTodos, selectTodos } from '../redux/slice/todoSlice'

const TodoList = ({ filter }) => {
   
    const todos = useSelector((state) => 
        filter !== 'all' ? selectFilteredTodos(state, filter) : selectTodos(state)
    )

    return (
        <div className='flex flex-col max-w-[800px] w-full p-4 rounded-lg bg-gray-200'>
            {
                todos?.length > 0 ? (
                    todos.map((todo, index) => (
                        <Card key={index} todo={todo} />
                    ))
                ) : (
                    <p className='text-lg font-semibold text-center'>No todos</p>
                )
            }
        </div>
    )
}

export default TodoList
