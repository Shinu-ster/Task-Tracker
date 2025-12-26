const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border rounded p-4 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.dueDate}</p>
        <span
          className={`text-xs px-2 py-1 rounded ${
            task.status === "Done"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
