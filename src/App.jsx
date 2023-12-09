import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ToDoBar from './components/ToDoBar';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
	const [todo, setTodo] = useState({
		title: '',
		descr: '',
	});
	const [todos, setTodos] = useState([]);
	const [done, setDone] = useState([]);

	const addTodo = () => {
		const task = {
			id: Math.random(),
			title: todo.title,
			descr: todo.descr,
			status: false,
		};
		let newTask = [task, ...todos];
		if (todo.title === '') {
			alert('To add a task you need at least a filled title field');
		} else {
			setTodos(newTask);
		}

		setTodo({ title: '', descr: '' });
	};

	const deleteTodo = id => {
		let del = todos.filter(elem => elem.id != id);
		let delDone = done.filter(elem => elem.id != id);
		setTodos(del);
		setDone(delDone);
	};

	const toggleTodo = id => {
		let toggle = todos.map(elem => (elem.id === id ? { ...elem, status: true } : { ...elem }));
		let notDone = toggle.filter(elem => elem.status === false);
		let done = toggle.filter(elem => elem.status === true);
		setTodos(notDone);
		setDone(prev => [...prev, ...done]);
	};

	return (
		<BrowserRouter>
			<ToDoBar />
			<ToDoInput
				todo={todo}
				setTodo={setTodo}
				addTodo={addTodo}
			/>
			<ToDoList
				todos={todos}
				deleteTodo={deleteTodo}
				toggleTodo={toggleTodo}
				done={done}
			/>
		</BrowserRouter>
	);
}

export default App;
