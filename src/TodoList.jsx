import Todo from "./Todo";

export default function TodoList({ todoList, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todoList.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
