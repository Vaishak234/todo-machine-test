import { Plus } from "lucide-react";
import {  useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/ToodoList";
import { Toaster } from "react-hot-toast";

  
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("all"); // State for filter type


  const onClose = () => {
    setIsOpen(false)
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col pt-20 items-center">
      <h2 className="text-4xl font-semibold mb-5">Todo List</h2>

      <section className="flex max-w-[800px] w-full justify-center flex-col p-2 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          {/* Filter Dropdown */}
          <select
            className="p-2 rounded-lg bg-gray-200"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

          {/* Add Todo Button */}
          <button
            className="bg-indigo-500 p-2 text-white flex rounded-lg"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Plus />
            Add Todo
          </button>
        </div>

       
        <div >
            <TodoList filter={filter} />
        </div>
      </section>

      {isOpen && <AddTodo onClose={onClose} />} 

      <Toaster />
    </div>
  );
}

export default App;
