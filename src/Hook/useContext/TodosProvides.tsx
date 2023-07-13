import { ReactElement, createContext, useReducer } from "react";
import todosReducer from "../useReducer/reducer";

export const TodosContext = createContext({} as any);

// type Props = {
//   children: ReactElement;
// };

const initialState = {
  todos: [],
};

const TodosProvides = ({ children }: any) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvides;
