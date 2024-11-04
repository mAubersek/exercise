import { useEffect } from "react";

const SuccessNotification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-orange text-white p-4 rounded shadow-lg animate-pulse">
      {message}
    </div>
  );
};

export default SuccessNotification;
