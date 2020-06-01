import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import UrlList from "./components/UrlList";
import UploadImageForm from './components/UploadImageForm';

function App() {

  return (
    <div className="App">
		<body>
			<div className='container'>
				<div className='row'>
					<div className='col-md'>
						<TodoList/>
					</div>
					<div className='col-md'>
						<UrlList/>
					</div>
					<div className='col-md'>
						<UploadImageForm/>
					</div>
				</div>
			</div>
		</body>
    </div>
  );
}

export default App;
