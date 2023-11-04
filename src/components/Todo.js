import styles from '../style.module.css'
const Todo = ({todoItem,todoList,setTodoList}) =>{
	const deleteTodo = () => {
      setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== todoItem.id))
	}
	return(
		<div >
		    <div className={styles.todoitem}>
		    	<h3 className={styles.todoname}>{todoItem.name}</h3>
		    	<button onClick={deleteTodo} className={styles.tododeletebutton}>Done</button>
		    </div>
		</div>
		)
}
export default Todo