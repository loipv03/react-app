import { ITodo } from "@/interfaces/Todos";
import { instance } from "./instances";

const getAllTodos = () => {
  return instance.get("/todos");
};
const addAllTodo = (todos: ITodo) => {
  return instance.post("/todos", todos);
};
const deleteAllTodos = (id: number) => {
  return instance.delete(`/todos/${id}`);
};

export { getAllTodos, addAllTodo, deleteAllTodos };
