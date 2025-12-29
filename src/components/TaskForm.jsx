import { useState, useEffect } from "react";
import Modal from "./Modal";

const TaskForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(initialData.title);
      setDueDate(initialData.dueDate);
      setStatus(initialData.status);
    } else {
      setTitle("");
      setDueDate("");
      setStatus("Pending");
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, dueDate, status });
  };

  const today = new Date().toISOString().split("T")[0];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Task" : "Add Task"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full border rounded p-2"
          value={dueDate}
          min={today}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        {!initialData ? (
          <></>
        ) : (
          <>
            <select
              className="w-full border rounded p-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Pending</option>
              <option>Done</option>
            </select>
          </>
        )}

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
          Save
        </button>
      </form>
    </Modal>
  );
};

export default TaskForm;
