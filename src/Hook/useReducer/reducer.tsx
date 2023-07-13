import { getAllTodos } from "@/api/todos";
import { ITodo } from "@/interfaces/Todos";

const todosReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "POST_TODOS":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODOS":
      const newTodos = [...state.todos];

      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;
