import { Edit, Trash } from 'lucide-react';
import React, { useState } from 'react';
import AddTodo from './AddTodo';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/slice/todoSlice';
import toast from 'react-hot-toast';

const Card = ({ todo }) => {

  const statusStyles = todo.status === "Completed" ? "text-green-600" : "text-red-600";
  const [isOpen ,setIsOpen] = useState(false)
  const dispatch = useDispatch()  

  const onClose = ()=>{
    setIsOpen(false)
  }

  const handleDelete = (id)=>{
      dispatch(removeTodo(id))
      toast.success('Todo removed sucessfully')
  }

  return (
    <>
      <div className="w-full p-4 flex justify-between items-center bg-white rounded-lg mb-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{todo.name}</h2>
          <p className="text-sm text-gray-600">{todo.description}</p>
          <span className={`text-sm font-medium ${statusStyles}`}>
            {todo.status}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-gray-500 hover:text-red-600" onClick={()=>handleDelete(todo.id)} >
            <Trash />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600" onClick={()=>setIsOpen(true)}>
            <Edit />
          </button>
        </div>
      </div>

      {isOpen && <AddTodo onClose={onClose} isEdit editValues={todo}/>}
    </>
  );
};

export default Card;
