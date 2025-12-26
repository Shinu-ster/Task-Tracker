const STORAGE_KEY = "tasks";

export const getTasks = async () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const createTask = async (task) => {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const newTask = { ...task, id: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...tasks, newTask]));
  return newTask;
};

export const updateTask = async (task) => {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedTasks = tasks.map((t) => (t.id === task.id ? task : t));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  return task;
};

export const deleteTask = async (id) => {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedTasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
};
