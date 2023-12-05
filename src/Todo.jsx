export default function Todo({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <>
      <li key={id}>
        <label>
          <input
            autoComplete="off"
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />{" "}
          {title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
