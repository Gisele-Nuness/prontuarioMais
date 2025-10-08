import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notificacoes, setNotificacoes] = useState([]);

  const adicionarNotificacao = (nova) => {
    setNotificacoes((prev) => [...prev, nova]);
  };

  const limparNotificacoes = () => {
    setNotificacoes([]);
  };

  return (
    <NotificationContext.Provider
      value={{ notificacoes, adicionarNotificacao, limparNotificacoes }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
