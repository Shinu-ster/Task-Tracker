import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-6  right-6 text-gray-500 hover:text-black cursor-pointer"
        >
         < MdOutlineCancel size={22} color="#F4320B" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
