import { notification } from 'antd';
import type { NotificationInstance } from 'antd/es/notification/interface';
import React, { ReactNode } from 'react';
import { useContext } from 'react';

const ToastContext = React.createContext<NotificationInstance | undefined>(
  undefined
);

type IToastProvider = {
  children: ReactNode;
};

export const ToastContextProvider = ({ children }: IToastProvider) => {
  const [toast, contextHolder] = notification.useNotification();

  return (
    <ToastContext.Provider value={toast}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);