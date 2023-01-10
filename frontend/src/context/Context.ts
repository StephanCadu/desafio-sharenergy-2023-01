import { createContext } from "react";

interface ContextState {}

const Context = createContext({} as ContextState);

export default Context;