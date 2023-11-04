import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react'
import styles from './style.module.css'
import TodoFooter from './components/TodoFooter'
function App() {
  //todo list
  const [todoList,setTodoList] = useState([])
  //create State
  const [todo,setTodo] = useState("")
  return (
    <div className="App">
      <Header />
      <div className={styles.alldone}>
      <Form 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList} />
      <TodoList 
      todo={todo} 
      setTodo={setTodo} 
      todoList={todoList} 
      setTodoList={setTodoList} />
    </div>
    <TodoFooter />
    </div>
  );
}

export default App;
