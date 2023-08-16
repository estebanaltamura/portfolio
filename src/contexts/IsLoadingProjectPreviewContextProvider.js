import { createContext, useState } from "react";

export const IsLoadingProjectPreviewContext = createContext();

export const IsLoadingProjectPreviewContextProvider = ({ children }) => {
  const [ isLoadingProjectPreview, setIsLoadingProjectPreview ] = useState(true);  

  return (
    <IsLoadingProjectPreviewContext.Provider
      value={{ isLoadingProjectPreview, setIsLoadingProjectPreview }}
    >
      {children}
    </IsLoadingProjectPreviewContext.Provider>
  );
};


