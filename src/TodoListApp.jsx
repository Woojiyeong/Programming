import { useState } from "react";
import './todolist.css';
// import Button from "./components/Button.jsx";
// import Checkbox from "./components/CheckBox.jsx";
import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
import TodoItem from "./components/TodoItem.jsx"
import TodoList from "./components/TodoList.jsx"

class Todo{
  constructor(id, text,isCompleted){
    this.id = id ;
    this. text = text;
    this.isCompleted = isCompleted;
  }
}

function TodoListApp() {
  const [todos, setTodos ] = useState([]);

  function addTodo(text){
    //이전 todos에 newTodo 만들어서 추가 -> 그것을  setTodos() 하자
    setTodos((todos) => [
      ...todos,     //todos에 있는 item을 다 꺼내서 새로운 리시트에 하나씩 넣자
      new Todo(
        Date.now(), //id: 고유 ID 시간을 이용. == new Date().getTime()
        text,       //text: 할 일 내용
        false       //isCompleted: 할 일의 완료 여부 초기값은 false
      )
    ]);
  }
function toggleTodo(id){
  setTodos((todos) =>
    todos.map((todo) => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    )
  )
}
function deleteTodo(id){
  // todos를 하나씩 꺼내어 todo, todo.id === id
  setTodos((todos)=>
    todos.filter((todo) => todo.id !== id)
  )
}
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default TodoListApp;