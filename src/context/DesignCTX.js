import { createContext, useState } from "react";

const DesignCTX = createContext();

const DesignProvide = ({ children }) => {
  let [input, setInput] = useState(false);
  const toggleInput = () => setInput(!input);
  return (
    <DesignCTX.Provider value={{ input, toggleInput }}>
      {children}
    </DesignCTX.Provider>
  );
};

export { DesignCTX, DesignProvide };
