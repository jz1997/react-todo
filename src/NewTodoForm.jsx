import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  // 处理表单提交
  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem) {
      return;
    }

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            id="item"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.currentTarget.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}
