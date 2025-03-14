import React from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredTodos, selectTodos, updateTodos } from '../redux/slice/todoSlice';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './SortableItems';

const TodoList = ({ filter }) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) =>
        filter !== 'all' ? selectFilteredTodos(state, filter) : selectTodos(state)
    );

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = todos.findIndex((item) => item.id === active.id);
            const newIndex = todos.findIndex((item) => item.id === over.id);

            const updatedTodos = arrayMove(todos, oldIndex, newIndex);
            dispatch(updateTodos(updatedTodos)); 
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={todos.map((todo) => todo.id)} strategy={verticalListSortingStrategy}>
                <div className="flex flex-col max-w-[800px] w-full p-4 rounded-lg bg-gray-200">
                    {todos?.length > 0 ? (
                        todos.map((todo) => (
                            <SortableItem key={todo.id} id={todo.id}>
                                <Card todo={todo} />
                            </SortableItem>
                        ))
                    ) : (
                        <p className="text-lg font-semibold text-center">No todos</p>
                    )}
                </div>
            </SortableContext>
        </DndContext>
    );
};

export default TodoList;
