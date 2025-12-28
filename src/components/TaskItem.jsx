import { FiEdit2, FiTrash2 } from "react-icons/fi";

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const handleCheckboxChange = () => {
    const updatedTask = {
      ...task,
      status: task.status === "Done" ? "Pending" : "Done",
    };
    onToggleStatus(updatedTask);
  };

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center hover:shadow-sm transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.status === "Done"}
          onChange={handleCheckboxChange}
          className="w-5 h-5 cursor-pointer"
        />

        <div className="flex flex-row gap-6 items-center">
          <h3
            className={`font-semibold ${
              task.status === "Done" ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </h3>

          <p className="text-sm text-gray-500">{task.dueDate}</p>

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              task.status === "Done"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        {/* Edit */}
        <button
          onClick={() => onEdit(task)}
          className="p-2  hover:bg-blue-100 rounded-xl text-blue-600  transition"
          title="Edit task"
        >
          <FiEdit2 size={18} />
        </button>

        {/* Delete */}
        <button
          onClick={() => {
            if (confirm(`Are you sure you want to delete Task: ${task.title}`)) {
              onDelete(task.id);
            }
          }}
          className="p-2 rounded-xl hover:bg-red-100 text-red-600 transition"
          title="Delete task"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
