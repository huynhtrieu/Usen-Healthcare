import React, { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  loginUser: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(Boolean(localStorage.getItem('accessToken')));
  const [token, setToken] = useState<string | null>(localStorage.getItem('accessToken'));
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if ((e.key === 'accessToken' && e.newValue !== token) || (e.key === 'userId' && e.newValue !== userId)) {
        // check accessToken được sửa đổi tab/cửa sổ khác
        logoutUser();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [token]);

  useEffect(() => {
    // check sự thay đổi accessToken cùng tab
    if (localStorage.getItem('accessToken') !== token || localStorage.getItem('userId') !== userId) {
      logoutUser();
    }
  }, [token, userId]);

  const loginUser = () => {
    setIsLoggedIn(true);
    setToken(localStorage.getItem('accessToken'));
    setUserId(localStorage.getItem('userId'));
  };
  
  const logoutUser = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    setToken(null);  // Cập nhật state token
    setUserId(null);  // Cập nhật state userId
  };
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
