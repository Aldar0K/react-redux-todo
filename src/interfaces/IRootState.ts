import Filter from "./Filter";
import ITodo from "./ITodo";

interface IRootState {
  todos: ITodo[]
  filter: Filter
}

export default IRootState;
