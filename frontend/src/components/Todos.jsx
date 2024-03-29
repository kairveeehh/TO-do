
export function Todos({ todos }) {
  return <div>
    {todos.map(function (todo) {
      return <div>
        <h1>{todos.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed == true ? "completede" : "Mark as completed"}</button>
      </div>
    })}
  </div>
}