import React, { createContext, useState, useContext } from 'react';

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);

  const value = {
    isRunning,
    setIsRunning,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};
