import styles from '../style.module.css'
import shortid from 'shortid'
const Form = ({todoList,setTodoList,todo,setTodo}) =>{

	//handle input
	const handleForm = (event) =>{
        setTodo(event.target.value)
	}
	//handle form submit
	const handleSubmit = (event) =>{
		if (todo !== ""){
			event.preventDefault()
			setTodoList([...todoList,{ name: todo,id: shortid.generate() }])
			setTodo("")
			console.log(todoList)
		}else{
			event.preventDefault()
			alert("You Can't Add Empty Name")
		}
	}
    return(
    	<div className={styles.todoform}>
    	    <h3 className={styles.todoFormHeader}>Add Todo Item Here</h3>
    	    <form className={styles.borderForm} onSubmit={handleSubmit}>
    	        <div className={styles.todolabel}>Todo Name: </div>
    		    <input className={styles.todoinput} placeholder="Add Todo Item" value={todo} onChange={handleForm} />
    		    <button className={styles.todobutton} >Add</button>
    	    </form>
    	</div>
    	)
}
export default Form