import { BrowserRouter } from 'react-router-dom';
import ToDoBar from './components/ToDoBar';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
	return (
		<BrowserRouter>
			<ToDoBar />
			<ToDoInput />
			<ToDoList />
		</BrowserRouter>
	);
}

export default App;
