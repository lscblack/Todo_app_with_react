import styles from '../style.module.css'
import Todo from './Todo'
const TodoList = ({todoList,setTodoList}) =>{
	let show
	if(todoList.length > 0){
        show = (<>
        	   {todoList.map((item) => (
        	   <Todo setTodoList={setTodoList} todoList={todoList} todoItem={item} key={item.id}/>
        		))}
        </>)
	}else{
        show = (<><h3 align="center" className={styles.todoname2}>Not Todo Item Found </h3></>)
	}
	return(
		<>
		<div className={styles.todowidth}>
		   <h3 className={styles.todoFormHeader}>Todo List Items</h3> 
		   <br></br>
             {show}
		</div>
		</>
		)
}
export default TodoList