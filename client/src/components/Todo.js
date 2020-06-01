import React from 'react';

const Todo = ({todo}) =>{
    const removeTodo = () => {
        let url = 'http://localhost:8000/todos/' + todo._id;
        fetch(url, {method:'delete'})
        .then( res => console.log(res));
        // console.log(url);
    }
    return (
        <div>
            <h3>{todo.title}</h3>
            <h4>
                {todo.content}
                <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={removeTodo}>X</button>
            </h4>
            
            <hr/>
        </div>
    )
}

export default Todo;