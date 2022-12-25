import React, { Suspense } from "react";
import { notFound } from "next/navigation";

const fetchTodoById = async (todoId) => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/todos/${todoId}`
  //   );

  // SSR rendered on server side
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache:'no-cache'});

  // SSG rendered on build time
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {cache:'force-cache'});

  //   ISR Look down !!!!
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  // //the modification will be visible after 60 seconds using ssr

  const todo = await res.json();
  return todo;
};

async function TodoPage(props) {
  const todoId = props.params.todoId;
  const todo = await fetchTodoById(todoId);

  // notFound error
  if (!todo.id) {
    console.log("not found");
    return notFound();
  }

  return (
    <div>
      <h1>TodoPage : {todoId}</h1>
      <h2>{todo.title}</h2>
    </div>
  );
}

export default TodoPage;

// so fast , use yarn run build than yarn run start
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  //prebuilding only 10 pages
  const trimmedTodos = todos.splice(0, 5);

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
