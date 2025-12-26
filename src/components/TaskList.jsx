import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks.length)
    return <p className="text-gray-500">No tasks found.</p>;

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
