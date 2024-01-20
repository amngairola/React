import { createContext, useContext } from "react";

export const TheamContext = createContext({
  //default values and functionalties
  theamMode: "Light",
  darkTheam: () => {},
  lightTheam: () => {},
});

export const ThemeProvider = TheamContext.Provider;

export default function useTheam() {
  return useContext(TheamContext);
}
