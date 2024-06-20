import React from "react";

function ConfirmationModal({ isOpen, closeModal, actionType, confirmAction }) {
  const getConfirmationMessage = () => {
    switch (actionType) {
      case "Edit":
        return "Are you sure you want to change these edits?";
      case "Suspend":
        return "Are you sure you want to suspend this wish?";
      case "Delete":
        return "Are you sure you want to delete this wish? This action cannot be undone.";
      default:
        return "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-start justify-evenly z-50 bg-slate-900 bg-opacity-50 p-7 ">
      <div className="bg-white dark:bg-gray-800 p-6 lg:w-1/2 shadow-lg">
        <p className="text-2xl mb-7 text-black-2 font-extrabold dark:text-white ">
          {getConfirmationMessage()}
        </p>
        <div className="flex flex-col md:flex-row justify-between lg:justify-start gap-4">
          <button
            className="px-22 py-4 text-xl text-white dark:text-white bg-black dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={() => {
              confirmAction();
              closeModal();
            }}>
            Confirm
          </button>
          <button
            className="px-22 py-4 text-xl text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-black-2 hover:text-white dark:hover:bg-gray-700 border-2 border-gray-300 focus:outline-none"
            onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
