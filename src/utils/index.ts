import Filter from "../interfaces/Filter";
import ITodo from "../interfaces/ITodo";

export const filterTasks = (tasksList: ITodo[], filter: Filter) => {
  switch (filter) {
    case 'all':
      return tasksList;
    case 'completed':
      return tasksList.filter(task => task.isCompleted);
    case 'active':
      return tasksList.filter(task => !task.isCompleted);
    default:
      return tasksList;
  }
}
