const Modal = ({ isClose }) => {
  return (
    <div className="h-screen w-screen fixed flex items-center justify-center bg-slate-50">
      <button
        onClick={isClose}
        className="text-black font-semibold rounded-lg border-2 bg-white border-white p-2  hover:shadow-lg hover:text-red-400"
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
