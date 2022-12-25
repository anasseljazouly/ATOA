import React, { Suspense } from "react";
import TodoList from "./TodoList";

export default function RootLayout({ children }) {
  return (
    <main className="flex">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <TodoList />
        </Suspense>
      </div>
      <div className="flex-1">
      {children}
        </div>
    </main>
  );
}
