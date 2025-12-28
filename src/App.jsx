import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api/taskApi";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useDebounce } from "./hooks/useDebounce";
import SearchAndFilter from "./components/SearchAndFilter";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    // Fetching Tasks when app loads
    getTasks().then(setTasks);
  }, []);

  const handleSave = async (data) => {
    if (editingTask) {
      const updated = await updateTask({ ...editingTask, ...data });
      // Updating Tasks
      setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    } else {
      const newTask = await createTask(data);
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks
    .filter((t) => (filter === "All" ? true : t.status === filter))
    .filter((t) =>
      t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "date") return a.dueDate.localeCompare(b.dueDate);
      if (sort === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const handleToggleStatus = async (updatedTask) => {
    await updateTask(updatedTask);

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      );

      // Move Done tasks to bottom
      return updatedTasks.sort((a, b) => {
        if (a.status === b.status) return 0;
        if (a.status === "Done") return 1;
        return -1;
      });
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 bg-[#5A7ACD] p-4 text-center text-white">
        Task Tracker
      </h1>

      <div className="flex mb-4 gap-2">
        <input
          className="border rounded p-2 flex-1"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#2B2A2A] text-white px-4 rounded"
        >
          + Add New Task
        </button>
      </div>

      <SearchAndFilter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <TaskList
        tasks={filteredTasks}
        totalTasksCount={tasks.length}
        onEdit={(task) => {
          setEditingTask(task);
          setIsModalOpen(true);
        }}
        onDelete={async (id) => {
          await deleteTask(id);
          setTasks(tasks.filter((t) => t.id !== id));
        }}
        onToggleStatus={handleToggleStatus}
      />

      <TaskForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={handleSave}
        initialData={editingTask}
      />
    </div>
  );
};

export default App;
