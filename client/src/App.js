import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import ShortUrlList from "./components/ShortUrlList";
import ImageList from './components/ImageList';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
		<Navbar/>
		<div className='container'>
			<div className='row'>
				<div className='col-md'>
					<TodoList/>
				</div>
				<div className='col-md'>
					<ShortUrlList/>
				</div>
				<div className='col-md'>
					<ImageList/>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
