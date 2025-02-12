"use client";
import { AlertTriangle, CheckCircle, X, XCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

type NotificationType = "success" | "error" | "warning";

interface Notification {
  id: number;
  type: NotificationType;
  message: string;
}

const NotificationContext = React.createContext<
  | {
      showNotification: (type: NotificationType, message: string) => void;
    }
  | undefined
>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (type: NotificationType, message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, message }]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <div className="fixed right-4 top-4 z-[99991] space-y-2">
        {notifications.map(({ id, type, message }) => (
          <NotificationItem
            key={id}
            type={type}
            message={message}
            onClose={() => removeNotification(id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

const getTypeStyles = (type: NotificationType) => {
  switch (type) {
    case "success":
      return {
        container: "bg-green-100 text-green-800",
        icon: <CheckCircle className="text-green-500" />,
      };
    case "warning":
      return {
        container: "bg-yellow-100 text-yellow-800",
        icon: <AlertTriangle className="text-yellow-500" />,
      };
    case "error":
      return {
        container: "bg-red-100 text-red-800",
        icon: <XCircle className="text-red-500" />,
      };
    default:
      return {};
  }
};

const NotificationItem: React.FC<{
  type: NotificationType;
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const [progress, setProgress] = useState(100);
  const { container, icon } = getTypeStyles(type);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setTimeout(onClose, 300); // Wait for exit animation
          return 0;
        }
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div
      className={`flex items-center justify-between rounded-lg p-4 shadow-md ${container} overflow-hidden`}
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <h4 className="font-semibold">{type}</h4>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-lg font-bold text-gray-500 hover:text-gray-700"
      >
        <X />
      </button>
      <div
        className={`duration-50 linear absolute bottom-0 left-0 h-1 ${type === "success" ? "bg-green-800" : type === "warning" ? "bg-yellow-800" : "bg-red-800"} transition-all`}
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  }
  return context;
};
