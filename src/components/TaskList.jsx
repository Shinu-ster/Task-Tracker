import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  totalTasksCount,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  if(totalTasksCount === 0){
    return (
      <p className="text-gray-500 text-center" >
        No tasks yet. Add new tasks
      </p>
    )
  }

  if (tasks.length === 0) return <p className="text-gray-500 text-center">:( No such tasks found.</p>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
