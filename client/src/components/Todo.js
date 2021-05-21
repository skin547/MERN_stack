import React from 'react';

const Todo = ({todo, update}) =>{
    
    const removeTodo = () => {
        let url = '/api/todos/' + todo._id;
        fetch(url, {method:'delete'})
        .then( res => console.log(res))
        .then( () => update() );
    }

    return (
        <div className='row shadow p-3 mb-3 rounded'>
        
            <div className = 'col-9' style = { { "fontSize" : "16pt" } } >
                {todo.content}
            </div>

            <div className='col'>
                <button type="button" class="close" aria-label="Close" onClick={removeTodo}>
                    <span aria-hidden="true">&times;</span>
                </button>

            </div>

        </div>
    )
}


export default Todo;