import React, {useState, useEffect} from 'react';
import Todo from './Todo.js';
import LoadingIcon from './LoadingIcon';

const TodoList = () =>{
	const [todo,setTodo] = useState('');
    const [todos,setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFail,setIsFail] = useState(false);
  

	const createTodo = () => {
		console.log(todo);
	
		fetch('api/todos/',
		  {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"content": todo
			})
		  })
		  .then(res => console.log(res))
		  .then( () => FetchData() )
		  .catch(err => console.log(err));
	
		document.getElementById('input_todo').value = "";
	  }

    const FetchData = () => {
      fetch("api/todos")
            .then(res => res.json())
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
        <div className='container'>

			<h3>Todo-List</h3>

			<div className='row '>
				<input className='form-control col-9' type='text' id='input_todo' onChange={handleInputChange} required></input>
				<button className='btn btn-primary col ml-1' onClick={createTodo} >add</button>
			</div>

        	<hr/>

			<div>
				{ isLoading ? <LoadingIcon/> :  todos.map( (todo) => <Todo key = {todo._id} todo = {todo} update={FetchData}/> ) }
				{ isFail && <p> Some error occur when connecting to server!</p> }
			</div>
			
        </div>
    )
}

export default TodoList;