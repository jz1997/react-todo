import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";

export default function App() {
  const [todoList, setTodoList] = useState(() => {
    const todoListJsonStr = localStorage.getItem("todo_list");
    if (todoListJsonStr) {
      return JSON.parse(todoListJsonStr);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(todoList));
  }, [todoList]);

  // 添加待办
  function addTodo(title) {
    const newTodoList = [
      ...todoList,
      { id: crypto.randomUUID(), title, completed: false },
    ];
    setTodoList(newTodoList);
  }

  // 标记完成和未完成
  function toggleTodo(id, checked) {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: checked,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  }

  // 删除待办
  function deleteTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />

      {/* Todo List */}
      <h1 className="header">Todo List</h1>

      {todoList.length === 0 && <div>No todo list</div>}

      <TodoList
        todoList={todoList || []}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
