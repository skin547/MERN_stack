import React, {useState, useEffect} from 'react';
import Todo from './Todo.js';


const TodoList = () =>{
	const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFail,setIsFail] = useState(false);
  

	const createTodo = () => {
		console.log(todo);
	
		fetch('http://localhost:8000/todos/',
		  {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				// "title":title,
				"content": todo
			})
		  })
		  .then(res => console.log(res))
		  .then( () => FetchData() )
		  .catch(err => console.log(err));
	
		document.getElementById('input_todo').value = "";
	  }

    const FetchData = () => {
      fetch("http://localhost:8000/todos")
            .then(res => res.json())
            // .then(res => res.data )
            .then(res => { 
              setTodos(res);
              setIsLoading(false);
            })
            .catch( error => {
              console.log(error);
              setIsLoading(false);
              setIsFail(true);
              });
	}
	
	const handleInputChange = (event) => {
		setTodo(event.target.value);
	  }
		
  
    useEffect(() => {
      FetchData();
    },[])
    
  
  
    return (
        <div>
			<h3>Todo-List</h3>
			<input className='form-control' type='text' id='input_todo' onChange={handleInputChange} required></input>
			<p></p>
	
			<button className='btn btn-primary' onClick={createTodo}>add</button>
        	<hr/>
            {isLoading ? <p>Loading...</p> :  todos.map( (todo) => <Todo key = {todo._id} todo = {todo} /> )}
            {isFail && <p> Some error occur when connecting to server!</p>}
        </div>
    )
}

export default TodoList;