import React from "react";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos;
};

async function TodoList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link href={`todos/${todo.id}`}>Todo : {todo.id}</Link>
        </div>
      ))}
    </>
  );
}

export default TodoList;
